import React, { useReducer } from 'react'
import Reducer from './Reducer'
export const context=React.createContext()

export const Context=(props)=>{
    const [state,dispatch]=useReducer(Reducer,{name:"Aris"})
    return(
        <context.Provider value={{state,dispatch}}>{props.children}</context.Provider>
    )
}

