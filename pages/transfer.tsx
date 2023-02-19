import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import React from "react";
import Convertion from "../components/Home/Convertion";
import QR from "../components/Home/Qr";
import Sidebar from "../components/Home/Sidebar";
import TransferMoney from "../components/Home/TransferMoney";
import Graph from "./../components/Home/Graph";

function transfer() {
	return (
		<>
			<div className="h-[100vh] w-[100vw] overflow-hidden flex space-x-3">
				<div className="my-[5rem] w-fit">
					<Sidebar />
				</div>
				<div className="flex flex-col w-full h-[100vh] space-y-4 overflow-x-hidden overflow-y-scroll scrollbar-hide">
					<div className="w-full grid grid-cols-1 lg:grid-cols-2 space-y-4 lg:space-y-0">
						<QR />
						<TransferMoney />
					</div>
					<div className="w-full grid grid-cols-1 lg:grid-cols-2 space-y-4 lg:space-y-0">
						<Graph />
						<Convertion />
					</div>
				</div>
			</div>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async ({ req }: any) => {
	const session = await getSession({ req });

	if (!session) {
		return {
			redirect: {
				destination: "/login",
				permanent: false,
			},
		};
	}
	return {
		props: {},
	};
};

export default transfer;
