/** @format */

import { BrowserRouter, Redirect, Route } from "react-router-dom";

import "./App.css";
import ContextRoute from "./components/context-route/context-route.component";
import Header from "./components/header/header.component";
import { UserContext } from "./components/contexts";
import { useAuthListener } from "./hooks/auth-hooks";
import BrowsePage from "./pages/homepage/browse.component";
import SignupPage from "./pages/signup/signuppage.component";
import StartPage from "./pages/start/startpage.component";
import SigninPage from "./pages/signinpage/signinpage.component";

function App() {
	const user = useAuthListener();

	return (
		<div className="App" id="App">
			<BrowserRouter>
				<Route exact path="/">
					{user ? <Redirect to="/browse" /> : <StartPage />}
				</Route>
				<ContextRoute
					exact
					path="/browse"
					contextComponent={UserContext}
					value={user}
				>
					{user ? <BrowsePage /> : <Redirect to="/" />}
				</ContextRoute>

				<ContextRoute
					path="/signup"
					contextComponent={UserContext}
					value={user}
				>
					<SignupPage />
				</ContextRoute>
				<ContextRoute
					path="/signin"
					contextComponent={UserContext}
					value={user}
				>
					{user ? (
						<Redirect to="/browse" />
					) : (
						<SigninPage />
					)}
				</ContextRoute>
				<Route path="/logout">
					<StartPage />
				</Route>
			</BrowserRouter>
		</div>
	);
}

export default App;
