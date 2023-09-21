import React, { useReducer, useState } from 'react';
import { useNavigate } from "react-router-dom";
import DigitButton from '../Components/DigitButton';
import OperationButton from '../Components/OperationButton';
//Material UI imports
import {
    Box,
    Button,
    TextField,
} from '@mui/material';

const [{currentOperend, previousOperend, operation}, dispatch] = useReducer(reducer, {})

export const ACTIONS ={
    ADD_DIGIT: 'add-digit',
    CHOOSE_OPERATION: 'choose-operation',
    CLEAR: 'clear',
    DELETE_DIGIT: 'delete-digit',
    EVALUATE: 'evaluate'
}

function reducer(state, {type, payload}){
    switch(type){
        case ACTIONS.ADD_DIGIT:
            return{
                ...state,
                currentOperend: `${currentOperend || '""'}${payload.digit}`
            }
    }
}
export const CalPage = () => {
    let navigate = useNavigate();
    

    

    return(
        <div className='calculator-grid'>

            <div className='output'>
                <div className='previous-operend'>{previousOperend} {operation}</div>
                <div className='current-operend'>{currentOperend}</div>
            </div>
            <button className='span-two'>AC</button>
            <button>DEL</button>



            <OperationButton operation='/' dispatch={dispatch}/>        
            <DigitButton digit='1' dispatch={dispatch}/>
            <DigitButton digit='2' dispatch={dispatch}/>
            <DigitButton digit='3' dispatch={dispatch}/>
            <OperationButton operation='*' dispatch={dispatch}/>
            <DigitButton digit='4' dispatch={dispatch}/>
            <DigitButton digit='5' dispatch={dispatch}/>
            <DigitButton digit='6' dispatch={dispatch}/>
            <OperationButton operation='+' dispatch={dispatch}/>
            <DigitButton digit='7' dispatch={dispatch}/>
            <DigitButton digit='8' dispatch={dispatch}/>
            <DigitButton digit='9' dispatch={dispatch}/>
            <OperationButton operation='-' dispatch={dispatch}/>
            <DigitButton digit='.' dispatch={dispatch}/>
            <DigitButton digit='0' dispatch={dispatch}/>
            <button className='span-two'>=</button>
            
        </div>
    )

}

export default CalPage;