import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";
const SignUp = () => {
	const history = useHistory();
	const [name, setName] = useState("");
	const [password, setPasword] = useState("");
	const [branch, setBranch] = useState("");
	const [rollNo, setRollNo] = useState("");
	const [adminYr, setAdminYr] = useState("");
	const [email, setEmail] = useState("");
	const [image, setImage] = useState("");

	const uploadFields = () => {
		if (
			!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
				email
			)
		) {
			M.toast({ html: "invalid email", classes: "#c62828 red darken-3" });
			return;
		}
		// fetch("/signup", {
		// 	method: "post",
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 	},
		// 	body: JSON.stringify({
		// 		name,
		// 		password,
		// 		email,
		// 		branch,
		// 		rollNumber: rollNo,
		// 		admissionYear: adminYr,
		// 	}),
		// })
		// 	.then((res) => res.json())
		// 	.then((data) => {
		// 		if (data.error) {
		// 			M.toast({
		// 				html: data.error,
		// 				classes: "#c62828 red darken-3",
		// 			});
		// 		} else {
		// 			M.toast({
		// 				html: data.message,
		// 				classes: "#43a047 green darken-1",
		// 			});
		// 		}
		// 	})
		// 	.catch((err) => {
		// 		console.log(err);
		// 	});
		history.push("/signin");
	};

	return (
		<div className="mycard">
			<div className="card auth-card input-field">
				{/* <img src="/logo.jpeg" /> */}
				<h2>Cloud Service Recommendation System</h2>
				<input type="text" placeholder="Account" />
				<input
					type="text"
					placeholder="Name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					type="text"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input type="text" placeholder="Address" />
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPasword(e.target.value)}
				/>
				<input
					type="text"
					placeholder="Phone Number"
					value={branch}
					onChange={(e) => setBranch(e.target.value)}
				/>
				<button
					className="btn waves-effect waves-light #64b5f6 blue darken-1"
					onClick={() => uploadFields()}
				>
					SignUP
				</button>
				<h5>
					<Link to="/signin">Already have an account ?</Link>
				</h5>
			</div>
		</div>
	);
};

export default SignUp;
