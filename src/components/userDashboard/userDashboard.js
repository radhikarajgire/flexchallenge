import React, {useContext, useState, useEffect} from "react"
import { StateContext } from "../stateContext/stateContext";
import Styles from "./useDashboard.module.css"
import SingleRoom from "../singleRoom/singleRoom"
import ListChoice from "../listChoice/listChoice"
import InputBox from "../inputBox/inputBox";


function DashBoard(){

    const {user, setUser, roomState, setRoomState, dash, setDash} = useContext(StateContext)
    const [localDash, setLocalDash]=useState()
    const [inputBox, setInputBox] = useState("")




    return (
        <div className={Styles.container} > 
            <div className={Styles.banner}>
                <h2>USER:</h2>
                <h4 className={Styles.option} onMouseEnter={()=>{setLocalDash(dash); setDash(<ListChoice/>)}} onMouseLeave ={()=>setDash(user!==0?localDash:"USER ADMIN")} value="">{dash}</h4>
                {user===0?<button className={Styles.button} onClick={()=>setInputBox(<InputBox/>)} >NEW USER</button>:""}
                <div>
                    {inputBox}
                </div>
            </div>
            <div className={Styles.box}>
                {roomState.map((e, i)=>user===0?<SingleRoom key={i} fish={i}/>:e[2]===user?<SingleRoom key={i} fish={i}/>:"")}
            </div>
        </div>
    )
}

export default DashBoard
