import React from "react";
import { signIn } from "next-auth/react";
import Front from "../components/Landing/Front";
import Mid from "../components/Landing/Mid";
import Last from "../components/Landing/Last";

function login() {
	return (
		<div className="overflow-hidden scrollbar-hide">
			<Front />
			<Mid />
			<Last />
		</div>
	);
}

export default login;
