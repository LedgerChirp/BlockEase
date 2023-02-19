import React from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
	const nav = [
		{ name: "Home", link: "/" },
		{ name: "About", link: "#about" },
		{name: "Contact Us", link: ""}
	];
	return (
		<>
			<div className="fixed w-[80%] mx-auto h-16 flex justify-center">
				<div className="flex items-center justify-evenly">
					<div className="">
						<Image src={"/vercel.svg"} width={100} height={100} alt="logo" />
					</div>
					<div className="space-x-6 flex ml-28">
						{nav.map((item, index) => (
							<div key={index} className="flex items-center font-semibold">
								<Link href={item.link}>{item.name}</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default Navbar;
