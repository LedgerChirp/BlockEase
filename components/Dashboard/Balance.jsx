import React, { useEffect, useState } from "react";
import useAxios from "./../Charts/UseAxios";

function Balance() {
	const [money, setMoney] = useState(0);
	const [acc, setAcc] = useState(null);
	const connect = async () => {
		const accounts = await window?.ethereum
			.request({ method: "eth_requestAccounts" })
			.catch((err) => {
				alert("Metamask Reject Your Request");
			});
		setAcc(accounts);
	};
	connect();
	useEffect(() => {
		if (window.ethereum) {
			window.ethereum.on("accountsChanged", function (accounts) {
				setAcc(accounts);
			});
		}
	}, []);

	const { response } = useAxios(
		`coins/ethereum/market_chart?vs_currency=usd&days=30&interval=daily`
	);
	const coinChartData = response?.prices?.map((value) => ({
		x: value[0],
		y: value[1].toFixed(2),
	}));

	const data = coinChartData?.map((val) => val.y);
	const price = Number(data?.[0]);

	const balance = async () => {
		const bal = await window.ethereum
			.request({
				method: "eth_getBalance",
				params: [acc[0], "latest"],
			})
			.catch((err) => {
				console.log(err);
			});
		setMoney(parseInt(bal) / Math.pow(10, 18));
	};
	balance();
	return (
		<>
			<div className="flex flex-col pt-48 sm:pt-0 items-center mx-auto">
				<h2>Available Balance</h2>
				<h2 className="font-bold text-2xl">
					&#x24; {price * money} / {money} &#x2666; ETH
				</h2>
			</div>
		</>
	);
}

export default Balance;
