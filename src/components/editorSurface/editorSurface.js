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
    const [newRoomChoice,setNewRoomChoice]=useState("")
    const [show, setShow]=useState("")
   

    useEffect(()=>{
        let geoff = "Choose User"+usrChoice+newUsrChoice+" "+roomChoice+newRoomChoice
        setFinChoice(geoff)
       

    }, [usrChoice, roomChoice, newUsrChoice, newRoomChoice])

return(
    <div className={Styles.container}>
        {<h4 key={odd}>{overInfo[odd+1]}</h4>}
            <form>
                {odd==1?<input type={"number"} min={"1"} max={"99"} onChange={(g)=>
                    {   let bill = g.target.value
                        if(bill>99) bill=99
                        else if (bill<0) bill=1
                        else setShow(bill)
                        if(usrList.includes(parseInt(bill))) setNewUsrChoice("")
                        else setNewUsrChoice(bill)} } 
                        value={show} placeholder={"New User Number"}/>:""}
                {odd!==5&&odd!==1&&odd!==4?<select name={"users"} id={0} multiple>
                    {usrList.map((e,i)=>{
                    if(i!=0){
                        return <option onMouseDown={(f)=>{setUsrChoice(f.target.value)}} key={i} value={e}>USER {e}</option>}})}
                </select>:""}
                {odd!==3&&odd!==4?<select name={"rooms"} id={1} multiple>
                    {roomState.map((e,i)=><option onMouseDown={(f)=>{setRoomChoice(f.target.value)}} key={i} value={e[0]}>{e[0]}</option>)}
                </select>:""}
                {odd==4?<input type={"number"} min={"1"} max={"99"} onChange={(g)=>
                    {   let bill = g.target.value
                        if(bill>99) bill=99
                        else if (bill<0) bill=1
                        else setShow(bill)
                        if(usrList.includes(parseInt(bill))) setNewRoomChoice("")
                        else setNewRoomChoice("room"+bill)} } 
                        value={show} placeholder={"New User Number"}/>:""}
                {
                    <input type={"button"} value={finChoice} onClick={(en)=>{en.preventDefault(); 
                //setUsrList(usrList.filter(word=>word!=usrChoice)); 
                console.log(finChoice)
                if(odd==3){
                    setDisp("")
                    setRoomState(roomState.map(worde=>{
                        if(worde[2].includes(parseInt(usrChoice))){
                        return [worde[0], worde[1], worde[2].filter(a=>a!=usrChoice), worde[3]]
                        } else return worde
                    }))}
                else if (odd==5) {
                    setDisp("")
                    setRoomState(roomState.filter(a=>a[0]!=roomChoice))}
                else if (odd==1){
                    if(newUsrChoice!="") {
                        setDisp("")
                        setRoomState(roomState.map(ee=>{
                        if(ee.includes(roomChoice)&&!ee[2].includes(parseInt(newUsrChoice))) return [ee[0],ee[1], [...ee[2],parseInt(newUsrChoice)].sort((a,b)=>a-b),ee[3]]
                        else return ee
                    }))}}
                else if (odd==2){
                    setDisp("")
                    setRoomState(roomState.map(ee=>{
                        if(ee.includes(roomChoice)&&!ee[2].includes(parseInt(usrChoice))) return [ee[0],ee[1], [...ee[2],parseInt(usrChoice)].sort((a,b)=>a-b),ee[3]]
                        else return ee
                    }))}
                else if (odd==4){
                    if(newRoomChoice!="") {
                        setDisp("")
                        setRoomState([...roomState, [newRoomChoice,0,[],"blue"]])
                    }}
                    }}/>}
            </form>
            <button onClick={()=>setDisp("")}>{"EXIT"}</button>
    </div> 

)

}

export default EditorSurface