import React, { useState } from "react";
import useAxios from "../Charts/UseAxios";

function TransferMoney() {
	const [acc, setAcc] = useState(null);
	const [money, setMoney] = useState(0);
	const [send, setSend] = useState("");

	const connect = async () => {
		const accounts = await window?.ethereum
			.request({ method: "eth_requestAccounts" })
			.catch((err) => {
				alert("Metamask Reject Your Request");
			});
		setAcc(accounts);
	};

	const { response } = useAxios(
		`coins/ethereum/market_chart?vs_currency=usd&days=30&interval=daily`
	);
	const coinChartData = response?.prices?.map((value) => ({
		x: value[0],
		y: value[1].toFixed(2),
	}));

	const data = coinChartData?.map((val) => val.y);
	const price = Number(data?.[0]);

	const sendTransection = async (money, id) => {
		await window?.ethereum
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
				alert("Metamask Reject Your Request");
			});
	};
	return (
		<>
			<div className="flex items-center mx-auto w-[90%] ">
				<div className="flex flex-col space-y-8 bg-[#DCEAF8] py-10 rounded-3xl grow lg:mt-[3rem]">
					{acc ? (
						<>
							<input
								type="text"
								onChange={(e) => setSend(e.target.value)}
								className="pl-4 pt-[1rem] pb-[1rem] mx-auto w-[80%] text-xl rounded-2xl"
								placeholder="Enter Receiver ID"
							/>
							<input
								type="number"
								onChange={(e) => setMoney(e.target.value)}
								className="pl-4 pt-[1rem] pb-[1rem] mx-auto w-[80%] text-xl rounded-2xl"
								placeholder="Enter Amount"
							/>
							<button
								onClick={() => sendTransection(money / price, send)}
								disabled={send.trim() == "" || money == 0}
								className="mx-auto w-[80%] bg-black rounded-full text-white p-3 items-center text-2xl"
							>
								Pay Amount
							</button>
						</>
					) : (
						<button
							onClick={() => connect()}
							className="items-center font-bold border-2 border-black hover:bg-black hover:text-white mx-auto w-fit h-fit p-3 rounded-3xl"
						>
							Connect Metamask
						</button>
					)}
				</div>
			</div>
		</>
	);
}

export default TransferMoney;
