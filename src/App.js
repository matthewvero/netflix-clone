/** @format */

import { BrowserRouter, Redirect, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header/header.component";
import { useAuthListener } from "./hooks/auth-hooks";
import Homepage from "./pages/homepage/homepage.component";
import StartPage from "./pages/start/startpage.component";

function App() {
	const user = useAuthListener();
	return (
		<div className="App">
			<BrowserRouter>
				<Route path="/:anything">
					<Header />
				</Route>
				<Route exact path="/">
					{user ? <Redirect to="/home" /> : <StartPage />}
				</Route>
				<Route exact path="/home">
					{user ? <Homepage /> : <Redirect to="/" />}
				</Route>
			</BrowserRouter>
		</div>
	);
}

export default App;
