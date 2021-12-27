import React, {useContext, useState, useEffect} from "react"
import { StateContext } from "../stateContext/stateContext";
import Styles from "./listChoice.module.css"

function ListChoice(){
    const {user, setUser, roomState, setRoomState, dash, setDash} = useContext(StateContext)
    const [fishChip, setFishChip] = useState([])

    useEffect(()=>{
        let admin=["ADMIN"]
        let newarray = roomState.map(e=>e[2])
        let uniqueinput = [...new Set(newarray)]
        let newuniqueinput = uniqueinput.sort((a,b)=>a-b)
        newuniqueinput=admin.concat(newuniqueinput)
        setFishChip(newuniqueinput)
    },[])


return(
    <div className={Styles.container} style={{height: 35*fishChip.length}}>    
        {fishChip.map((e,i)=> <h4 onClick={()=>{setUser(i===0?0:e); setDash("USER "+e)}} className={Styles.option} key={i} value={e}>USER {e}</h4>)}
    </div>



)


}

export default ListChoice

