import React, {useContext, useState, useEffect} from "react"
import ListChoice from "../listChoice/listChoice";
import { StateContext } from "../stateContext/stateContext";
import Styles from "./editorSurface.module.css"

function EditorSurface({task:odd}){

    const {user, setUser, roomState, setRoomState, dash, setDash} = useContext(StateContext)
    console.log(odd)

return(
    <div className={Styles.container}>
        {(()=>{switch (odd) {
            case 1: return <h4 key={1}>NEW USER</h4>;
            break;
            case 2: return <h4 key={2}>DELETE USER</h4>;
            break; 
            case 3: return <h4 key={3}>EDIT USER</h4>;
            break; 
            case 4: return <h4 key={4}>NEW ROOM</h4>;
            break; 
            case 5: return <h4 key={5}>DELETE ROOM</h4>;
            break; 
            case 6: return <h4 key={6}>EDIT ROOM</h4>;
            break; 
            }})()
            }
        {odd===1||odd===2||odd===3||odd===4||odd===6?<select name={"users"} id={0}>
            {roomState.map(e=><option value={e[2]}>USER {e[2]}</option>)}
        </select>:""}
        {odd===1||odd===3||odd===4||odd===5||odd===6?<select name={"rooms"} id={1}>
            {roomState.map(e=><option value={e[0]}>{e[0]}</option>)}
        </select>:""}
        <button className={Styles.button}>ACTIVATE</button>

    </div>

)

}

export default EditorSurface