import React from "react";

function Input(props){
    return(
        <input type = {props.type} placeholder = {props.placeholder} value = {props.value} className="pl-4 pt-[1rem] pb-[1rem] text-xl rounded-2xl" />
    );
}

export default Input;