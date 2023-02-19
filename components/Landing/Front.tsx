import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";
import eth_logo from "./EthSVG";
function Front() {
	return (
		<>
			<div className="fixed">
				<Navbar />
			</div>
			<div className="w-[100vw] h-[100vh]">
				<div className="flex w-[100vw] h-[100vh]">
					<div className="max-w-[22rem] m-auto space-y-10 flex flex-col text-center items-center">
						<h2 className="font-bold text-5xl">
							Make Ethereum More Accesible
						</h2>
						<div className="pl-auto p-3 w-[8rem] items-center border border-black rounded-xl">
							<Link href={"/login/authenticate"} className="h-full w-full">
								Get Started
							</Link>
						</div>
					</div>
					<div className="m-auto z-0 opacity-40 relative hidden md:opacity-100 md:block" dangerouslySetInnerHTML={{__html:eth_logo}} />
				</div>
			</div>
		</>
	);
}

export default Front;
