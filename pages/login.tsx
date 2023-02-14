import React from "react";
import { signIn } from "next-auth/react";
import Front from "../components/Landing/Front";
import Mid from "./../components/Landing/Mid";

function login() {
	return (
		<div className="overflow-hidden scrollbar-hide">
			<Front />
			<Mid />
		</div>
	);
}

export default login;
