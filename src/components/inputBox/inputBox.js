import React, {useContext, useState, useEffect} from "react"
import { StateContext } from "../stateContext/stateContext";
import Styles from "./inputBox.module.css"
import EditorSurface from "../editorSurface/editorSurface"

function InputBox(){
const {overInfo, setOverInfo, disp, setDisp} = useContext(StateContext)


return(
    <div className={Styles.container}>
        {overInfo.map((e,i)=> {
            if(i>1){
                return <h4 className={Styles.choice} key={i} onClick={()=>{
                    let fish = overInfo;
                    fish[0]=!overInfo[0];
                    fish[1]=i-1; 
                    setOverInfo(fish)
                    setDisp(<EditorSurface task={i-1}/>)
                    }}>{e}</h4>
                }})}  

        <div className={Styles.border}>
            {disp}
        </div>
          
    </div>
)


}

export default InputBox
