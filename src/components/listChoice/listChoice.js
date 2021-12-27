import React, {useContext, useState, useEffect} from "react"
import { StateContext } from "../stateContext/stateContext";
import Styles from "./listChoice.module.css"

function ListChoice(){
    const {user, setUser, roomState, setRoomState, dash, setDash} = useContext(StateContext)
    const [fishChip, setFishChip] = useState([])

    useEffect(()=>{
        let newarray = roomState.map(e=>e[2])
        let uniqueinput = [...new Set(newarray)]
        let newuniqueinput = uniqueinput.sort((a,b)=>a-b)
        setFishChip(newuniqueinput)
    },[])


return(
    <div className={Styles.container} style={{height: 47*fishChip.length}}>
        
        <h4 onClick={(h)=>{setUser(0); setDash("USER ADMIN")}} className={Styles.option} value={0}>ADMIN</h4>    
        {fishChip.map((e,i)=> <h4 onClick={()=>{setUser(e); setDash("USER "+e)}} className={Styles.option} key={i} value={e}>USER {e}</h4>)}

    </div>



)


}

export default ListChoice

