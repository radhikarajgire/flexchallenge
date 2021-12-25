import React, {useContext} from "react"
import { StateContext } from "../stateContext/stateContext";
import Styles from "./useDashboard.module.css"
import SingleRoom from "../singleRoom/singleRoom"


function DashBoard(){


const {user, setUser, roomState, setRoomState} = useContext(StateContext)

    return (
        <div>
            <SingleRoom fish={2}/>
        </div>
    )
}

export default DashBoard
