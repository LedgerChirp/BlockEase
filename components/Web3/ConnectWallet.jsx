import React, { useState } from "react";
import useAxios from "../../components/Charts/UseAxios";
function ConnectWallet() {
	const [acc, setAcc] = useState(null);
	const [money, setMoney] = useState(0);
	const [send, setSend] = useState(0);
	const [id, setId] = useState("");
	const { response } = useAxios(
		`coins/ethereum/market_chart?vs_currency=usd&days=30&interval=daily`
	);
	const coinChartData = response?.prices?.map((value) => ({
		x: value[0],
		y: value[1].toFixed(2),
	}));

	const data = coinChartData?.map((val) => val.y);
	const price = Number(data?.[0]);

	const connect = async () => {
		const accounts = await window.ethereum
			.request({ method: "eth_requestAccounts" })
			.catch((err) => {
				console.log(err);
			});
		setAcc(accounts);
	};

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

	const sendTransection = async (money, id) => {
		await window.ethereum
			.request({
				method: "eth_sendTransaction",
				params: [
					{
						from: acc[0],
						to: id,
						value: Number(money * 1000000000000000000).toString(16),
					},
				],
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<>
			<button onClickCapture={() => connect()}>Connect Wallet</button>
			{acc && (
				<div className="">
					<h2>Your Account Id is : {acc[0]}</h2>
					<button onClickCapture={() => balance()}>Get Balance</button>
					{money != 0 && <h2>Your Balance is : {money} ETH</h2>}
					<h2>Send Transection :</h2>
					<input type="text" onChange={(e) => setId(e.target.value)} />
					<input type="number" onChange={(e) => setSend(e.target.value)} />
					<button
						onClick={() => sendTransection(send / price, id)}
						disabled={id.trim() == "" || send == 0}
						className=""
					>
						Send Transection
					</button>
				</div>
			)}
		</>
	);
}

export default ConnectWallet;
