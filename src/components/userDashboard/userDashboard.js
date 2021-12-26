import React, {useContext} from "react"
import { StateContext } from "../stateContext/stateContext";
import Styles from "./useDashboard.module.css"
import SingleRoom from "../singleRoom/singleRoom"


function DashBoard(){


const {user, setUser, roomState, setRoomState} = useContext(StateContext)

    return (
        <div className={Styles.container}> 
            <div className={Styles.banner}>
                <h1>{"USER: "}</h1>
                <button></button>
            </div>
            <div className={Styles.box}>
                {roomState.map((e, i)=><SingleRoom fish={i}/>)}
            </div>
        </div>
    )
}

export default DashBoard
