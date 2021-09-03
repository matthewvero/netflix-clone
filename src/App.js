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

function App() {
	const user = useAuthListener();

	return (
		<div className="App">
			<BrowserRouter>
				<ContextRoute
					path="/signup/:anything"
					contextComponent={UserContext}
					value={user}
				>
					<Header />
				</ContextRoute>
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
			</BrowserRouter>
		</div>
	);
}

export default App;
