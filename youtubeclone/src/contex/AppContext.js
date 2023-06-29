import React, { useReducer, useState } from 'react'
import { createContext } from 'react'
import {INITIAL_STATE, reducers} from './AppReducers'
export const AppProvider = createContext()


const AppContext = (props) => {
    const [state , dispatch] = useReducer(reducers,INITIAL_STATE)
    const [modSearch , setModSearch] = useState('Home')
    return (
    <AppProvider.Provider value={{state , dispatch , modSearch , setModSearch }}>
          {props.children}
    </AppProvider.Provider>
  )
}

export default AppContext