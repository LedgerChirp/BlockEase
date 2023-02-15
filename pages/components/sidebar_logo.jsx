import React from "react";  

function sidebar_logo(props){
    return(
        <button>
            {props.svg_path}
        </button>
    );
}

export default sidebar_logo;