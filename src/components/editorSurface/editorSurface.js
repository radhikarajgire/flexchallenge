import React, {useContext, useState, useEffect} from "react"
import ListChoice from "../listChoice/listChoice";
import { StateContext } from "../stateContext/stateContext";
import Styles from "./editorSurface.module.css"

function EditorSurface({task:odd}){

    const {user, setUser, roomState, setRoomState, dash, setDash, usrList, setUsrList, overInfo, setDisp} = useContext(StateContext)
    const [usrChoice,setUsrChoice] = useState("")
    const [roomChoice,setRoomChoice] = useState("")
    const [finChoice,setFinChoice] = useState("")
    const [newUsrChoice,setNewUsrChoice]=useState("")
    const [show, setShow]=useState("")

    useEffect(()=>{
        setFinChoice("Choose User"+usrChoice+newUsrChoice+" "+roomChoice)

    }, [usrChoice, roomChoice, newUsrChoice])

return(
    <div className={Styles.container}>
        {<h4 key={odd}>{overInfo[odd+1]}</h4>}
            <form>
                {odd==1?<input type={"number"} min={"1"} max={"99"} onInput={(g)=>
                    {   let bill = g.target.value
                        if(bill>99) bill=99
                        else if (bill<0) bill=1
                        else setShow(bill)
                        if(usrList.includes(parseInt(bill))) setNewUsrChoice("")
                        else setNewUsrChoice(show)} } 
                        value={show} placeholder={"New User Number"}/>:""}
                {odd!==6&&odd!==1?<select name={"users"} id={0} multiple>
                    {usrList.map((e,i)=>{
                    if(i!=0){
                        return <option onMouseDown={(f)=>{setUsrChoice(f.target.value)}} key={i} value={e}>USER {e}</option>}})}
                </select>:""}
                {odd!==3?<select name={"rooms"} id={1} multiple>
                    {roomState.map((e,i)=><option onMouseDown={(f)=>{setRoomChoice(f.target.value)}} key={i} value={e[0]}>{e[0]}</option>)}
                </select>:""}
                <input type={"submit"} value={finChoice} onClick={(en)=>{en.preventDefault(); 
                //setUsrList(usrList.filter(word=>word!=usrChoice)); 
                if(odd==3){
                    setDisp("")
                    setRoomState(roomState.map(worde=>{
                        if(worde[2].includes(parseInt(usrChoice))){
                        return [worde[0], worde[1], worde[2].filter(a=>a!=usrChoice), worde[3]]
                        } else return worde
                    }))}
                else if (odd==6) {
                    setDisp("")
                    setRoomState(roomState.filter(a=>a[0]!=roomChoice))}
                else if (odd==1){
                    if(newUsrChoice!="") {
                        setDisp("")
                        setRoomState(roomState.map(ee=>{
                        if(ee.includes(roomChoice)) return [ee[0],ee[1], [...ee[2],parseInt(newUsrChoice)].sort((a,b)=>a-b),ee[3]]
                        else return ee
                    }))}}
                    }}/>
            </form>
            <button onClick={()=>setDisp("")}>{"EXIT"}</button>
    </div> 

)

}

export default EditorSurface