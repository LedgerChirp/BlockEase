import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";

function Front() {
	return (
		<>
			<div className="fixed">
				<Navbar />
			</div>
			<div className="w-[100vw] h-[100vh]">
				<div className="grid grid-cols-2 w-[100vw] h-[100vh]">
					<div className="max-w-[22rem] m-auto space-y-6">
						<h2 className="font-bold text-5xl">
							Make Ethereum More Accessible
						</h2>
						<div className="p-3 w-[7rem] mt-4 items-center border border-black rounded-xl">
							<Link href={"/login/authenticate"} className="h-full w-full">
								Get Started
							</Link>
						</div>
					</div>
					<div className="m-auto">
						<svg
							width="325"
							height="494"
							viewBox="0 0 325 494"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M162.366 0.451355L158.817 11.6832V337.577L162.366 340.876L324.73 251.457L162.366 0.451355Z"
								fill="#A5A5A5"
							/>
							<path
								d="M162.367 0.451355L0 251.457L162.367 340.876V182.696V0.451355Z"
								fill="black"
							/>
							<path
								d="M162.367 369.518L160.367 371.79V487.878L162.367 493.319L324.829 280.145L162.367 369.518Z"
								fill="white"
							/>
							<path
								d="M162.367 493.319V369.518L0 280.145L162.367 493.319Z"
								fill="black"
							/>
							<path
								d="M162.366 340.876L324.729 251.457L162.366 182.696V340.876Z"
								fill="#565656"
							/>
							<path
								d="M0 251.457L162.367 340.876V182.696L0 251.457Z"
								fill="white"
							/>
						</svg>
					</div>
				</div>
			</div>
		</>
	);
}

export default Front;
