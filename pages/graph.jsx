import React from "react";
import ConnectWallet from "../components/Web3/ConnectWallet";
import CoinInfo from "./../components/Charts/CoinInfo";

function graph() {
	return (
		<>
			<CoinInfo />
			<ConnectWallet />
		</>
	);
}

export default graph;
