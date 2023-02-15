import React from "react";
import svgs from "../../API/svgs";

function Sidebar() {
	return (
		<>
			<div className="">
				{svgs.map((items) => (
					<button>{items.svg_path}</button>
				))}
			</div>
		</>
	);
}

export default Sidebar;
