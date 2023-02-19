import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import svgs from "../../API/svgs";

function Sidebar() {
	const router = useRouter();
	return (
		<>
			<div className="flex flex-col space-y-8 w-fit bg-[#DCEAF8] rounded-full h-[80vh] ml-2">
				{svgs.map((items) => (
					<button className="flex justify-center" key={items.id}>
						<Link href={items.link}>
							<Image
								className={
									router.pathname === items.link || router.asPath === items.link
										? "bg-white w-[50px] h-[50px]  p-2 rounded-full text-white "
										: "bg-current fill-black"
								}
								src={items.svg_path}
								width={items.width as any}
								height={items.height as any}
								alt="logo"
							/>
						</Link>
					</button>
				))}
			</div>
		</>
	);
}

export default Sidebar;
