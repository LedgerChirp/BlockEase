import React from "react";
import svgs from "../../API/svgs";

function Sidebar() {
	return (
		<>
			<div className="row-span-2 flex flex-col space-y-16 bg-[#DCEAF8] rounded-full p-2 pt-8">
				{svgs.map((items) => (
					<button className = "flex justify-center" key={items.id} dangerouslySetInnerHTML={{__html: items.svg_path}} />
				))}
			</div>
		</>
	);
}

export default Sidebar;
