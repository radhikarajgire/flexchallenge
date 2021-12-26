import React, {createContext, useState} from "react"

export const StateContext = createContext({})

export default function StateContextProvider({children}){

    const [user, setUser] = useState(["user1","user2","user3"])
    const [roomState, setRoomState] = useState([["room1", 1, 3, "green"],["room2", 0, 5, "blue"],["room3", 1, 4, "red"],["room4", 0, 10, "white"],["room5", 1, 10, "white"],["room6", 0, 10, "blue"]])

return (
    <StateContext.Provider
    value={{
        user, setUser, roomState, setRoomState

    }}>
    {children}
    </StateContext.Provider>
)    
}
