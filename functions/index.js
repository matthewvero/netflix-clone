/** @format */
const functions = require("firebase-functions");
const cors = require("cors");
const express = require("express");
const fetch = require("node-fetch");
const apiKey = functions.config().tmdbapi.key;
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();

var app = express();

app.use(cors());

// const apiReadAccessTokenV4 =
// 	"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGM5NjdlNGVjNDc0M2Y1NTM2ODkwOTdlMzdiOGEzYyIsInN1YiI6IjYxMDE4NWIzN2Q1ZjRiMDA3NDMwM2QxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cKPCG4kPE_mP-WrbHxn4zWzPD17S6jEAYUZuIR7_TcU";

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

const storeCategories = async () => {
	try {
		// GET CATEGORY IDS
		const categoriesIDRes = await fetch(
			"https://api.themoviedb.org/3/genre/movie/list?api_key=24c967e4ec4743f553689097e37b8a3c"
		);
		const categoriesInfo = await categoriesIDRes.json();

		// CREATE CATEGORY API LINKS
		const categoriesURLs = categoriesInfo.genres.map(
			(el) =>
				`https://api.themoviedb.org/3/discover/movie?api_key=24c967e4ec4743f553689097e37b8a3c&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_genres=${el.id}&with_watch_monetization_types=flatrate`
		);

		// RETRIEVE POPULAR FILMS FROM EACH CATEGORY
		const categoriesRes = await Promise.all(
			categoriesURLs.map((el) => fetch(el))
		);
		const data = await Promise.all(
			categoriesRes.map((el) => el.json())
		);

		// WRITE TO FIRESTORE FOR FASTER INITIAL LOAD
		data.forEach((category, idx) => {
			db.collection("categories")
				.doc(categoriesInfo.genres[idx].name)
				.set(category);
		});

		db.collection("categoryIDs").doc("IDs").set(categoriesInfo);
	} catch (err) {
		console.log(err);
		return;
	}
};

storeCategories();

const storeTrending = async () => {
	try {
		const res = await fetch(
			"https://api.themoviedb.org/3/trending/all/week?api_key=24c967e4ec4743f553689097e37b8a3c"
		);

		const data = await res.json();

		db.collection("categories").doc("trending").set(data);
	} catch (err) {
		console.log(err);
		return;
	}
};

storeTrending();

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

exports.widgets = functions.https.onRequest(app);
