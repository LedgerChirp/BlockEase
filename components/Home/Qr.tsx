import Image from "next/image";
import React from "react";
function QR() {
	return (
		<>
			<div className="flex flex-col bg-[#DCEAF8] rounded-3xl justify-evenly items-center w-[90%] py-8 mx-auto mt-[3rem]">
				<button className="space-y-10">
					<Image src="/qr.svg" width={190} height={170} alt="logo" />
					<div className="flex flex-row justify-center items-center font-semibold text-xl border-solid border-[2px] border-black rounded-lg px-6 py-1">
						<div className="grid grid-rows-1 items-center mr-3">
							<Image src="/qrscan.svg" width={25} height={25} alt="logo" />
						</div>
						<h2>Scan</h2>
					</div>
				</button>
			</div>
		</>
	);
}

export default QR;
