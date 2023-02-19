import Image from "next/image";
import React, { useState } from "react";
import useAxios from "../Charts/UseAxios";

function Convertion() {
	const [money, setMoney] = useState(0);
	const [send, setSend] = useState(0);
	const [eth, setEth] = useState(0);
	const { response } = useAxios(
		`coins/ethereum/market_chart?vs_currency=usd&days=30&interval=daily`
	);
	const coinChartData = response?.prices?.map((value) => ({
		x: value[0],
		y: value[1].toFixed(2),
	}));

	const data = coinChartData?.map((val) => val.y);
	const price = Number(data?.[0]);

	const convertionopp = () => {
		send == 0 ? setEth(money / price) : setMoney(eth * price);
	};
	return (
		<>
			<div className="flex flex-col flex-wrap bg-[#DCEAF8] rounded-3xl justify-evenly items-center py-6 h-64 lg:h-80 w-[90%] mx-auto">
				<div className="flex space-x-6 items-center">
					<input
						type="number"
						onChange={(e) => setMoney(e.target.value)}
						onClick={() => setSend(0)}
						placeholder={money}
						className="bg-[#DCEAF8] border-b-[1px] border-[#BABABA] p-2 w-48 placeholder:font-semibold placeholder:text-black"
					/>
					<h2 className="font-semibold">USD</h2>
				</div>
				<div className="mx-auto">
					<>
						<button onClick={() => convertionopp()}>
							<Image
								src={"convert.svg"}
								width={50}
								height={50}
								alt="converter"
							/>
						</button>
					</>
				</div>
				<div className="flex space-x-6 items-center">
					<input
						type="number"
						onChange={(e) => setEth(e.target.value)}
						onClick={() => setSend(1)}
						placeholder={eth}
						className="bg-[#DCEAF8] border-b-[1px] border-[#BABABA] p-2 w-48 placeholder:font-semibold placeholder:text-black"
					/>
					<h2 className="font-semibold">ETH</h2>
				</div>
			</div>
		</>
	);
}

export default Convertion;
