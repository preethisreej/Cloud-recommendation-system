import React, { useEffect, createContext, useReducer, useContext } from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import Home from "./Home";
import GCPServices from "./HomeGCP";
import NavBar from "./Navbar";
import SignIn from "./SignIn";
import SignUp from "./Signup";

const Routing = () => {
	const history = useHistory();
	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("userData") || "{}");
		if (Object.keys(user).length) {
			history.push("/");
		} else {
			history.push("/signin");
		}
	}, []);
	return (
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
			<Route path="/aws">
				<Home />
			</Route>
			<Route path="/gcp">
				<GCPServices />
			</Route>
			<Route path="/signin">
				<SignIn />
			</Route>
			<Route path="/signup">
				<SignUp />
			</Route>
		</Switch>
	);
};

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routing />
		</BrowserRouter>
	);
}

export default App;
