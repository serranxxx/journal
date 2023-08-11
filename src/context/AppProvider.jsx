import React, { useReducer } from 'react'
import { AppReducer } from './appReducer'
import { types } from './types'
import { appContext } from './appContext'

const init = () => {

    return {
        example: true
    }
}

export const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, {}, init)

    const setExample = (example = true) => {
        const Example = example
        const action = {
            type: types.EXAMPLE_TYPE,
            payload: Example
        }
        // localStorage.setItem('items', JSON.stringify(allItems))
        dispatch(action)
    }
    return (
        <appContext.Provider value={{
            ...state,
            setExample
        }} >
            { children }
        </appContext.Provider>
    )
}
