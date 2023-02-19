import Image from "next/image";
import React, { useState } from "react";

function Profile({ mailid, name, img }) {
	const [acc, setAcc] = useState(null);

	const connect = async () => {
		const accounts = await window?.ethereum
			.request({ method: "eth_requestAccounts" })
			.catch((err) => {
				alert("Metamask Reject Your Request");
			});
		setAcc(accounts);
	};
	return (
		<>
			<div className="h-auto flex items-center mx-auto w-[90%] py-4">
				<div className="bg-[#DCEAF8] flex items-center mx-auto md:h-[20rem] py-10 rounded-3xl grow">
					<div className="mx-auto text-center">
						<Image
							src={img}
							alt="profile"
							width={20}
							height={20}
							className="h-20 w-20 rounded-full mx-auto"
						/>
						<h2 className="text-2xl font-bold mt-4">{name}</h2>
						{acc ? (
							<h2 className="text-sm font-medium mt-2">ID : {acc[0]}</h2>
						) : (
							<button
								onClick={() => connect()}
								className="items-center text-center flex justify-center font-bold mx-auto border-2 mt-4 border-black hover:bg-black hover:text-white w-fit h-fit p-3 rounded-3xl"
							>
								Connect Metamask
							</button>
						)}
						<button className="items-center space-x-4 text-center flex justify-center font-bold mx-auto border-2 mt-4 border-black hover:bg-black hover:text-white w-fit h-fit p-3 rounded-3xl">
							<Image
								src={"/share.svg"}
								alt="share"
								width={20}
								height={20}
								className="hover:fill-white hover:text-white"
							/>
							<p>Share</p>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Profile;
