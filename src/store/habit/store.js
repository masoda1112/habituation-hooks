import React, {useReducer, createContext} from 'react'
import reducer from './reducer'

const initialState = []

const Context = createContext('')
const Store = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <Context.Provider value={{state, dispatch}}>{children}</Context.Provider>
}

export {Context, Store};