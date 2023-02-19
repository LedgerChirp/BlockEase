import React from "react";
import Input from "./Input";
import or_svg from "../../API/OR";
function SendMoney(){
    return(
        <div className="ml-8 basis-3/5 grow-[4] flex space-x-20 items-center">
            {/* <form className="flex flex-col space-y-10 bg-[#DCEAF8] px-24 pt-8 pb-16 rounded-3xl"> */}
            <div dangerouslySetInnerHTML={{__html: or_svg}} className="w-5"/>
            <form className="flex flex-col space-y-10 bg-[#DCEAF8] px-24 pt-12 pb-16 rounded-3xl grow">
            <Input type = "text" placeholder="Enter Receiver ID" />
            <Input type = "number" placeholder="Enter Amount" />
            <button className="m-auto w-[20rem] bg-black rounded-full text-white p-5 text-2xl">Pay Amount</button>
            {/* <Input className="justify-center bg-black rounded-full text-white" type = "submit" value = "Pay Amount" /> */}
            </form>
        </div>
    );
}

export default SendMoney;