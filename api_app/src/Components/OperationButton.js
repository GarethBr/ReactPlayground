import React from "react"
import { ACTIONS } from "../Pages/CalPage"

export default function OperationButton({dispatch, operation}){
    return <button onClick={() => dispatch({type: ACTIONS.CHOOSE_OPERATION, payload: {operation}})}>{operation}</button>
}