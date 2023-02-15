import React from "react";
import sidebar_logo from "./sidebar_logo";
import svg_info from "./svg_info";


function createLogo(logo_obj){
    return(
        <sidebar_logo
            key = {logo_obj.id}
            svg_path = {logo_obj.svg_path}
        />
    );
}


function sidebar(){
    return(
        <div>
            {svg_info.map(createLogo)}
        </div>
    );
}

export default sidebar;