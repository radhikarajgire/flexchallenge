import React, {useContext, useState, useEffect} from "react"
import ListChoice from "../listChoice/listChoice";
import { StateContext } from "../stateContext/stateContext";
import Styles from "./editorSurface.module.css"

function EditorSurface({task:odd}){

    const {user, setUser, roomState, setRoomState, dash, setDash, usrList, overInfo} = useContext(StateContext)
    const [usrChoice,setUsrChoice] = useState("Choose")
    const [roomChoice,setRoomChoice] = useState("Room")

return(
    <div className={Styles.container}>
        {<h4 key={odd}>{overInfo[odd+1]}</h4>}
            <form>
                {odd!==6?<select name={"users"} id={0} multiple>
                    {usrList.map((e,i)=>{
                    if(i!=0){
                        return <option onMouseDown={(f)=>{setUsrChoice("Choose User"+f.target.value)}} key={i} value={e}>USER {e}</option>}})}
                </select>:""}
                {odd!==3?<select name={"rooms"} id={1}>
                    {roomState.map((e,i)=><option onMouseDown={(f)=>{setRoomChoice("Choose Room"+f.target.value)}} key={i} value={e[0]}>{e[0]}</option>)}
                </select>:""}
                <input type={"submit"} value={usrChoice} onClick={(en)=>{console.log("clicked"+ en.target.value); en.preventDefault()}}/>
            </form>
    </div>

)

}

export default EditorSurface