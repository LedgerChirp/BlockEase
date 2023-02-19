import React from "react";
import Sidebar from "../components/Home/Sidebar";
import Circle from "./assets/circle";
import Divider from "./assets/divider";
import Cards from "../components/Rewards/cards";

const rewards = () => {
	return (
		<div className="flex flex-row">
			<Sidebar />
			{/* <Circle /> */}
			<div className=" w-full flex flex-col ">
				<div className="my-12 flex flex-row ">
					<div className="rounded-full w-36 mx-12 h-36 p-20 bg-[#1F61A3]">
						<img src="" alt="" />
					</div>
					<div className=" h-36 mr-20 rounded-3xl w-full bg-[#D9D9D9] flex flex-row">
						<div className="text-center mx-36 my-10 font-semibold font-sans leading-loose tracking-wide">
							<h1>Satoshi Uncle</h1>
							<p>Beginner</p>
						</div>
						<div className="max-w-fit">
							<Divider />
						</div>
						<div className="flex flex-col my-auto mx-auto text-lg font-semibold leading-10 tracking-wide">
							<h1 className="inline-flex">
								Total Spent -
								<p className=" ml-10 mr-3 bg-transparent rounded-full font-mono w-fit text-sm">
									1000
								</p>{" "}
								ETH
							</h1>
							{/* <br /> */}
							<h1 className="inline-flex">
								Savings -
								<p className="ml-20 mr-3 bg-transparent rounded-3xl w-fit font-mono text-md">
									100
								</p>
								ETH
							</h1>
						</div>
					</div>
				</div>
				{/* <Circle /> */}
				<div className="w-full rounded-3xl h-screen mb-9 overflow-y-scroll overscroll-none scroll flex flex-wrap flex-row  bg-[#DCEAF8]">
					<Cards title="Cashback" description="0.003 ETH/1200 USD" />
					<Cards title="Cashback" description="0.003 ETH/1200 USD" />
					<Cards title="Cashback" description="0.003 ETH/1200 USD" />
					<Cards title="Cashback" description="0.003 ETH/1200 USD" />
					<Cards title="Cashback" description="0.003 ETH/1200 USD" />
					<Cards title="Cashback" description="0.003 ETH/1200 USD" />
					<Cards title="Cashback" description="0.003 ETH/1200 USD" />
					<Cards title="Cashback" description="0.003 ETH/1200 USD" />
					<Cards title="Cashback" description="0.003 ETH/1200 USD" />
					<Cards title="Cashback" description="0.003 ETH/1200 USD" />
					<Cards title="Cashback" description="0.003 ETH/1200 USD" />
					<Cards title="Cashback" description="0.003 ETH/1200 USD" />
					<Cards title="Cashback" description="0.003 ETH/1200 USD" />
					<Cards title="Cashback" description="0.003 ETH/1200 USD" />
				</div>
			</div>
		</div>
	);
};

export default rewards;
