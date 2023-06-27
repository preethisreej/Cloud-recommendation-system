import React from "react";
import { Link, useHistory } from "react-router-dom";

const NavBar = () => {
	const history = useHistory();
	const state = localStorage.getItem("userData");

	const renderList = () => {
		if (state) {
			return [
				<li key="6aws">
					<Link to="/aws">AWS Services</Link>
				</li>,
				<li key="6gcp">
					<Link to="/gcp">GCP Services</Link>
				</li>,
				<li key="2">
					<Link to="/profile">Profile</Link>
				</li>,
				<li key="6">
					<button
						className="btn #c62828 red darken-3"
						onClick={() => {
							localStorage.clear();
							history.push("/signin");
						}}
					>
						Logout
					</button>
				</li>,
			];
		} else {
			return [
				<li key="6">
					<Link to="/signin">Signin</Link>
				</li>,
				<li key="7">
					<Link to="/signup">Signup</Link>
				</li>,
			];
		}
	};

	return (
		<nav>
			<div className="nav-wrapper white">
				<Link
					to={state ? "/" : "/signin"}
					className="brand-logo left"
					style={{ marginLeft: 10 }}
				>
					Cloud Service Recommendation System
				</Link>
				<ul id="nav-mobile" className="right">
					{renderList()}
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
