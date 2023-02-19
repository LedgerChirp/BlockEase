import React from "react";
import GraphSVG from "../../API/GraphSVG";
function Graph(){
    return(
        <div className="flex flex-col bg-[#DCEAF8] rounded-3xl items-center">
        {/* bg-yellow-500 col-span-2 row-span-1 grid-col-2 grid-row-2 gap-x-6 */}
            {GraphSVG[0].svg_path}
        </div>
    );
}

export default Graph;