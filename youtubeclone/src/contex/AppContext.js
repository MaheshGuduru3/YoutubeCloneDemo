import React, { useReducer } from 'react'
import { createContext } from 'react'
import {INITIAL_STATE, reducers} from './AppReducers'
export const AppProvider = createContext()


const AppContext = (props) => {
    const [state , dispatch] = useReducer(reducers,INITIAL_STATE)
    return (
    <AppProvider.Provider value={{state , dispatch}}>
          {props.children}
    </AppProvider.Provider>
  )
}

export default AppContext