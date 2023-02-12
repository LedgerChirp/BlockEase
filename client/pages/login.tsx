import React from "react";
import { signIn } from "next-auth/react";

function login() {
	return (
		<>
			<h1>Login</h1>
			<button onClick={() => signIn("google")}>sign in</button>
		</>
	);
}

export default login;
