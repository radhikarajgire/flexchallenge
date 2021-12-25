import React, {useContext, useState} from "react"
import { StateContext } from "../stateContext/stateContext";
import Styles from "./singlRoom.module.css"

function SingleRoom({fish: roomp}){
    
const {user, setUser, roomState, setRoomState} = useContext(StateContext)

return(
    <div className={Styles.box}>
        <div>
            <h1>{roomState[roomp][0]}</h1>
        </div>
    </div>
)


}

export default SingleRoom;