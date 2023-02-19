import React from "react";
import Convert from "../../API/ConvertButton";
import CInput from "./ConvertorInput";
function Converter(){
    return(
        <div className="flex flex-col flex-wrap bg-[#DCEAF8] rounded-3xl justify-evenly items-center">
            <CInput currency = "USD"/>
            <div className="mx-auto">
                <div dangerouslySetInnerHTML={{__html: Convert}}/>
            </div>
            <CInput currency = "ETH"/>
        </div>
    );
}

export default Converter;