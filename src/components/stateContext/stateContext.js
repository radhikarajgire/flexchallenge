import React, {createContext, useState} from "react"

export const StateContext = createContext({})

export default function StateContextProvider({children}){

    const [user, setUser] = useState()
    const [roomState, setRoomState] = useState([["room1", 1, 3, "green"],["room2", 0, 5, "blue"],["room3", 1, 4, "red"],["room4", 0, 10, "white"],["room5", 1, 10, "white"],["room6", 0, 10, "blue"],["room7", 1, 7, "yellow"]])
    const [dash, setDash] = useState("--Please Choose One--")

return (
    <StateContext.Provider
    value={{
        user, setUser, roomState, setRoomState, dash, setDash

    }}>
    {children}
    </StateContext.Provider>
)    
}
