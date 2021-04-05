import React, {useReducer, createContext} from 'react'
import reducer from './reducer'

const initialState = []

const CompleteContext = createContext('')
const CompleteStore = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <CompleteContext.Provider value={{state, dispatch}}>{children}</CompleteContext.Provider>
}

export {CompleteContext, CompleteStore};