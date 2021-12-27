import React, {useContext, useState, useEffect} from "react"
import { StateContext } from "../stateContext/stateContext";
import Styles from "./useDashboard.module.css"
import SingleRoom from "../singleRoom/singleRoom"
import ListChoice from "../listChoice/listChoice"


function DashBoard(){

    const {user, setUser, roomState, setRoomState, dash, setDash} = useContext(StateContext)






    return (
        <div className={Styles.container} > 
            <div className={Styles.banner}>
                <h2>USER:</h2>
                <h3 className={Styles.option} onMouseDown={()=>{setDash(<ListChoice/>)}} value="">{dash}</h3>
            </div>
            <div className={Styles.box}>
                {roomState.map((e, i)=>user===0?<SingleRoom key={i} fish={i}/>:e[2]===user?<SingleRoom key={i} fish={i}/>:"")}
            </div>
        </div>
    )
}

export default DashBoard
