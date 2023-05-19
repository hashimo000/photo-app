import React from "react";

export const Dogphoto=(props)=>{
    return(
        <div>
            <img src={props.dog} alt="犬の画像"></img>
        </div>

    );
};
export default Dogphoto;