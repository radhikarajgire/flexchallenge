import React, {useContext, useState, useEffect} from "react"
import ListChoice from "../listChoice/listChoice";
import { StateContext } from "../stateContext/stateContext";
import Styles from "./editorSurface.module.css"

function EditorSurface({task:odd}){

    const {user, setUser, roomState, setRoomState, dash, setDash, usrList, overInfo} = useContext(StateContext)
    console.log(odd)

return(
    <div className={Styles.container}>
        {<h4 key={odd}>{overInfo[odd+1]}</h4>}
        {odd!==6?<select name={"users"} id={0}>
            {usrList.map((e,i)=><option key={i} value={e}>USER {e}</option>)}
        </select>:""}
        {odd!==3?<select name={"rooms"} id={1}>
            {roomState.map((e,i)=><option key={i} value={e[0]}>{e[0]}</option>)}
        </select>:""}
        <button className={Styles.button}>ACTIVATE</button>

    </div>

)

}

export default EditorSurface