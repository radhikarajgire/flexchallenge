import React, {createContext, useState, useEffect} from "react"

export const StateContext = createContext({})

export default function StateContextProvider({children}){
    
    const [usrList,setUsrList]= useState()
    const [user, setUser] = useState()
    const [roomState, setRoomState] = useState([["room1", 1, [3, 5], "green"],["room2", 0, [5], "blue"],["room3", 1, [4], "red"],["room4", 0, [10], "white"],["room5", 1, [10], "white"],["room6", 0, [10], "blue"],["room7", 1, [7], "yellow"]])
    const [dash, setDash] = useState("--Please Choose One--")
    const [overInfo, setOverInfo] = useState([false, 0, 'NEW USER', 'ADD USER', 'DELETE USER', 'NEW ROOM', 'DELETE ROOM'])
    const [disp, setDisp] = useState("")

    useEffect(()=>{
        let admin=["ADMIN"]
        let newarray = roomState.map(e=>e[2])
        let newarray2 = newarray.reduce((e,i)=>e.concat(i))
        let uniqueinput = [...new Set(newarray2)]
        let newuniqueinput = uniqueinput.sort((a,b)=>a-b)
        newuniqueinput=admin.concat(newuniqueinput)
        setUsrList(newuniqueinput)
    },[roomState])

    

return (
    <StateContext.Provider
    value={{
        user, setUser, roomState, setRoomState, dash, setDash, overInfo, setOverInfo, usrList, setUsrList, disp, setDisp

    }}>
    {children}
    </StateContext.Provider>
)    
}
