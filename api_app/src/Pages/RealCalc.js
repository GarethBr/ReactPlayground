import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
//Material UI imports
import {
    Box,
    Button,
    TextField,
} from '@mui/material';



export const FormPage = () => {
    let navigate = useNavigate();
    
const [calc, setCalc] = useState("");
const [result, setResult] = useState("");

const ops = ['/','*','+','-','.'];

const updateCalc = value => {
    if(
        ops.includes(value) && calc == '' || 
        ops.includes(value) && ops.includes(calc.slice(-1))
    ){
        return;
    }
    setCalc(calc + value);

    if(!ops.includes(value)){
        setResult(eval(calc+value).toString());
    }
} 

const calulate = () =>{
    setCalc(eval(calc).toString());
}

const delDigit = () =>{
    if (calc == ''){
        return;
    }
    const value = calc.slice(0,-1);
    setCalc(value);
}


    return(
        <div className='tbc'>
        <div className='calculator'>
            <div className='display'>
                {result ? <span>({result}) </span> : ''}
                {calc || "0"}
            </div>
            <div className='operators'>
                <button onClick={() => updateCalc('/')}>/</button>
                <button onClick={() => updateCalc('*')}>*</button>
                <button onClick={() => updateCalc('+')}>+</button>
                <button onClick={() => updateCalc('-')}>-</button>
                <button onClick={delDigit}>DEL</button>
            </div>
            <div className='digits'>
                <button onClick={() => updateCalc('0')}>0</button>
                <button onClick={() => updateCalc('1')}>1</button>
                <button onClick={() => updateCalc('2')}>2</button>
                <button onClick={() => updateCalc('3')}>3</button>
                <button onClick={() => updateCalc('4')}>4</button>
                <button onClick={() => updateCalc('5')}>5</button>
                <button onClick={() => updateCalc('6')}>6</button>
                <button onClick={() => updateCalc('7')}>7</button>
                <button onClick={() => updateCalc('8')}>8</button>
                <button onClick={() => updateCalc('9')}>9</button>
                <button onClick={() => updateCalc('.')}>.</button>

                <button onClick={calulate}>=</button>
            </div>
        </div>
        </div>
    )

}

export default FormPage;