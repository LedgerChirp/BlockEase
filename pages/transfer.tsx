import React from "react";
import Sidebar from "../components/Home/Sidebar";
import QR from "../components/Home/QR";
import SendMoney from "../components/Home/SendMoney";
import Graph from "../components/Home/Graph";
import Convertor from "../components/Home/Converter";
function transfer() {
	return (
		<>
			<div className="grid gap-8 grid-cols-[0.2fr_26%_auto] grid-rows-[0.7fr_0.3fr] gap-[0px_0px] grid-flow-row m-5 mt-8">
				<Sidebar />
				<QR />
				<SendMoney/>
				<Graph />
				<Convertor />
			</div>
		</>
	);
}

export default transfer;
