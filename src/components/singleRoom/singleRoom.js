import React, {useContext, useState, useEffect} from "react"
import { StateContext } from "../stateContext/stateContext";
import Styles from "./singlRoom.module.css"

function SingleRoom({fish: roomp}){
    
const {user, setUser, roomState, setRoomState} = useContext(StateContext)
const [textCol, setTestCol] = useState(["black", "white"])

useEffect(()=>{
    chipsh()
},[])

let chipsh = () => {
    if(roomState[roomp][1]===1) setTestCol([roomState[roomp][3],"black"])
    else setTestCol(["black", "white"])
}


return(
    <div className={Styles.box} style={{backgroundColor: textCol[0], color: textCol[1]}} onClick={()=>{
        setRoomState((roomState), [...roomState, roomState[roomp][1]=1-roomState[roomp][1]])
       chipsh()
       console.log(roomState)
        }}>
            <h2>{roomState[roomp][0]}</h2>
            <p>{"USER: "+roomState[roomp][2]}</p>
    </div>
)


}

export default SingleRoom;