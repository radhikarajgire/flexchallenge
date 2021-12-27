import React, {useContext, useState, useEffect} from "react"
import { StateContext } from "../stateContext/stateContext";
import Styles from "./inputBox.module.css"

function InputBox(){

return(
    <div className={Styles.container}>
        <h3>NEW USER</h3>  
        <input type={"number"} placeholder={"ROOM"}/>
        <input type={"number"} placeholder={"USER"}/>
          
    </div>
)


}

export default InputBox
