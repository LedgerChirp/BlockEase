import React from "react";

function CInput(props){
    return(
        <div className="flex flex-row space-x-16">
            <input type = "number" placeholder="Enter Something" className="bg-[#DCEAF8] border-b-[1px] border-[#BABABA] p-2 w-48" />
            <button className="text-xl font-semibold border-b-[1px] border-[#BABABA]">{props.currency}</button>
        </div>
    );
}

export default CInput;