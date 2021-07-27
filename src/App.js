/** @format */

import { BrowserRouter, Redirect, Route } from "react-router-dom";

import "./App.css";
import ContextRoute from "./components/context-route/context-route.component";
import Header from "./components/header/header.component";
import { UserContext } from "./components/user.context";
import { useAuthListener } from "./hooks/auth-hooks";
import Homepage from "./pages/homepage/homepage.component";
import SignupPage from "./pages/signup/signuppage.component";
import StartPage from "./pages/start/startpage.component";

function App() {
	const user = useAuthListener();

	return (
		<div className="App">
			<BrowserRouter>
				<ContextRoute
					path="/:anything"
					contextComponent={UserContext}
					value={user}
				>
					<Header />
				</ContextRoute>
				<Route exact path="/">
					{user ? <Redirect to="/home" /> : <StartPage />}
				</Route>
				<Route exact path="/home">
					{user ? <Homepage /> : <Redirect to="/" />}
				</Route>
				<ContextRoute
					path="/signup"
					contextComponent={UserContext}
					value={user}
				>
					<SignupPage />
				</ContextRoute>
			</BrowserRouter>
		</div>
	);
}

export default App;
