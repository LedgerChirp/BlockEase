import Image from "next/image";
import React from "react";

function Mid() {
	const about = [
		{ title: "The Power of Ethereum Technology", desc: "" },
		{ title: "Earn rewards on transactions", desc: "" },
		{ title: "Simple Faster", desc: "" },
		{ title: "Convenience of QR Code Payments", desc: "" },
		{ title: "Redeeming Your Rewards", desc: "" },
	];
	const [down, setDown] = React.useState(false);
	return (
		<>
			<div className="w-[100vw] h-[95vh] my-auto">
				<h2 className="font-bold text-[40px] mt-6 ml-6 text-center md:text-left">
					What This App Will Provide ?
				</h2>
				<div className="flex flex-row md:grid md:grid-cols-2">
					<div className="mt-16 ml-12 hidden md:block">
						<Image src="/phone.png" width={450} height={450} alt="phone" />
					</div>
					<div className="my-auto space-y-10">
						{about.map((items, id) => (
							<div key={id} className="space-x-5 flex items-center">
								<div className="">
									<svg
										width="50"
										height="50"
										viewBox="0 0 50 50"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M25.0001 33.3333C22.7899 33.3333 20.6703 32.4554 19.1075 30.8926C17.5447 29.3298 16.6667 27.2101 16.6667 25C16.6667 22.7899 17.5447 20.6702 19.1075 19.1074C20.6703 17.5446 22.7899 16.6667 25.0001 16.6667C27.2102 16.6667 29.3298 17.5446 30.8926 19.1074C32.4554 20.6702 33.3334 22.7899 33.3334 25C33.3334 27.2101 32.4554 29.3298 30.8926 30.8926C29.3298 32.4554 27.2102 33.3333 25.0001 33.3333Z"
											fill="#0FA958"
										/>
									</svg>
								</div>
								<h2
									onClick={() => setDown(!down)}
									className="font-normal text-4xl cursor-pointer"
								>
									{items.title}
								</h2>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default Mid;
