/** @format */
const functions = require("firebase-functions");
const cors = require("cors");
const express = require("express");
const fetch = require("node-fetch");
const apiKey = functions.config().tmdbapi.key;

const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();

var app = express();

app.use(cors());

const storeCategories = async () => {
	try {
		// GET CATEGORY IDS
		const categoriesIDRes = await fetch(
			`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
		);
		const categoriesInfo = await categoriesIDRes.json();

		// CREATE CATEGORY API LINKS
		const categoriesURLs = categoriesInfo.genres.map(
			(el) =>
				`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_genres=${el.id}&with_watch_monetization_types=flatrate`
		);

		// RETRIEVE POPULAR FILMS FROM EACH CATEGORY
		const categoriesRes = await Promise.all(
			categoriesURLs.map((el) => fetch(el))
		);
		const data = await Promise.all(
			categoriesRes.map((el) => el.json())
		);

		const batch = db.batch();

		// WRITE TO FIRESTORE FOR FASTER INITIAL LOAD
		data.forEach((category, idx) => {
			const ref = db
				.collection("categories")
				.doc(categoriesInfo.genres[idx].name);

			batch.set(ref, category);
		});
		const categoriesInfoRef = db.collection("categoryIDs").doc("IDs");

		batch.set(categoriesInfoRef, categoriesInfo);

		return batch.commit();
	} catch (err) {
		console.log(err);
		return;
	}
};

const storeTrending = async () => {
	try {
		const res = await fetch(
			`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}`
		);

		const data = await res.json();

		db.collection("categories").doc("trending").set(data);
	} catch (err) {
		console.log(err);
		return;
	}
};

exports.scheduledFunction = functions.pubsub
	.schedule("every 1 months")
	.onRun(async (context) => {
		try {
			await storeTrending();
			await storeCategories();
		} catch (err) {
			console.log(err);
		}
		return null;
	});

const authenticate = async (req, res, next) => {
	if (
		!req.headers.authorization ||
		!req.headers.authorization.startsWith("Bearer ")
	) {
		console.log("FORMATTING PROBLEM");
		res.status(403).send("Unauthorized");
		return;
	}
	const idToken = req.headers.authorization.split("Bearer ")[1];
	try {
		const decodedIdToken = await admin.auth().verifyIdToken(idToken);
		req.user = decodedIdToken;
		next();
		return;
	} catch (e) {
		console.log(e);
		res.status(403).send("Unauthorized");
		return;
	}
};

// app.use(authenticate);

const sendRequest = async (query, method) => {
	const url = `https://api.themoviedb.org/3/${query}?api_key=${apiKey}`;
	try {
		const res = await fetch(url);
		const data = await res.json();
		return data;
	} catch (err) {
		throw new Error(err);
	}
};

app.get("/tmdb/*", async (req, res) => {
	try {
		const response = await sendRequest(req.params[0]);
		res.send(response);
	} catch (err) {
		res.send(err);
	}
});

app.get("/films", async (req, res) => {
	try {
		const films = await sendRequest("trending/movie/week");

		res.status(200).send(films);
	} catch (err) {
		console.log(err);
		return;
	}
});

app.get("/trending", async (req, res) => {
	try {
		const films = await sendRequest("trending/movie/week");

		res.status(200).send(films);
	} catch (err) {
		console.log(err);
		return;
	}
});

app.get("/getinfo/:filmid", async (req, res) => {
	try {
		const releaseInfoRes = await fetch(
			`https://api.themoviedb.org/3/movie/${req.params.filmid}/release_dates?api_key=${apiKey}`
		);
		const titleInfoRes = await fetch(
			`https://api.themoviedb.org/3/movie/${req.params.filmid}?api_key=${apiKey}`
		);
		const releaseInfo = await releaseInfoRes.json();
		const titleInfo = await titleInfoRes.json();
		res.status(200).send({ releaseInfo, titleInfo });
	} catch (err) {
		console.log(err);
		res.status(500).send(err);
	}
});

app.get("/init", async (req, res) => {
	console.log(req);
	if (req.query.api_key === apiKey) {
		try {
			await storeTrending();
			await storeCategories();
			res.status(200).send("ok");
		} catch (err) {
			console.log(err);
			res.status(400).send(err);
		}
	} else {
		res.status(400).send("Wrong key");
	}
});

exports.widgets = functions.https.onRequest(app);
