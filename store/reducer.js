import { createContext, useReducer } from 'react'
import { typeActions } from 'store/actions'

const preInitialState = {
  licensePlate: '',
  user: {}
}

const reducer = (state = preInitialState, action) => {
  switch (action.type) {
    case typeActions.SET_LICENSE_PLATE:
      return {
        ...state,
        licensePlate: action.payload.licensePlate
      }
    case typeActions.SET_USER:
      return {
        ...state,
        user: action.payload.user
      }
    default:
      return state
  }
}

export const Store = createContext()

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, preInitialState)
  const value = { state, dispatch }
  return (
    <Store.Provider value={value}>
      {children}
    </Store.Provider>
  )
}
