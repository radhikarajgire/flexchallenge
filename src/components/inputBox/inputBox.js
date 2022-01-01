import React, {useContext, useState, useEffect} from "react"
import { StateContext } from "../stateContext/stateContext";
import Styles from "./inputBox.module.css"
import EditorSurface from "../editorSurface/editorSurface"

function InputBox(){
const [overLay, setOverLay] = useState([false, 0])


return(
    <div className={Styles.container}>
        <h4 className={Styles.choice} onClick={()=>setOverLay([!overLay[0], 1])}>NEW USER</h4>  
        <h4 className={Styles.choice} onClick={()=>setOverLay([!overLay[0], 2])}>DELETE USER</h4>
        <h4 className={Styles.choice} onClick={()=>setOverLay([!overLay[0], 3])}>EDIT USER</h4>
        <h4 className={Styles.choice} onClick={()=>setOverLay([!overLay[0], 4])}>NEW ROOM</h4>
        <h4 className={Styles.choice} onClick={()=>setOverLay([!overLay[0], 5])}>DELETE ROOM</h4>
        <h4 className={Styles.choice} onClick={()=>setOverLay([!overLay[0], 6])}>CHANGE ROOM</h4>
        <div className={Styles.border}>
            {overLay[0]===true?<EditorSurface task={overLay[1]}/>:""}
        </div>
       {// <input type={"number"} placeholder={"ROOM"}/>
        //<input type={"number"} placeholder={"USER"}/>
    }
          
    </div>
)


}

export default InputBox
