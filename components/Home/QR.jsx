import React from "react";
import QR_Svg from "../../API/QR";
function QR(){
    return(
        <>
            <div className="flex flex-col bg-[#DCEAF8] rounded-3xl justify-evenly items-center">
                <div className = "" dangerouslySetInnerHTML={{__html: QR_Svg[0].svg_path}}></div>
                <button className="">
                    <div className = "flex flex-row justify-center items-center text-xl border-solid border-[2px] border-black rounded-lg px-6 py-1">
                        <div class = "grid grid-rows-1 items-center mr-3" dangerouslySetInnerHTML={{__html: QR_Svg[1].svg_path}}></div>
                        Scan
                    </div>
                </button>
            </div>
        </>
    );
}

export default QR;