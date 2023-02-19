import React from "react";
import HistoryChart from "./../Charts/CoinInfo";
function Graph() {
	return (
		<>
			<div className="flex items-center mx-auto w-[90%]">
				<div className="bg-[#DCEAF8] flex items-center mx-auto md:h-[20rem] py-10 rounded-3xl grow">
					<div className="m-auto h-[100%] lg:h-[100%]">
						<HistoryChart />
					</div>
				</div>
			</div>
		</>
	);
}

export default Graph;
