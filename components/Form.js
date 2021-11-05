import { useState } from "react"
import styled from "styled-components";
import Button from "./Button";
import axios from 'axios';
import useSWR from 'swr';


const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    label, input {
        margin-bottom: 10px;
    }
    input {
        width: 35%;
        border-radius: 25px;
        outline: none;
        border: 1px solid #636363;
        padding: 15px;
        margin-bottom: 25px;
    }
`;


export default function Form(){
    const [text, setText] = useState('');

    const onSubmitForm = async (event)=> {
        event.preventDefault();
        const response = await axios.get('/api/tracking', {params: { text }})
            .then((res)=>{console.log(res.data)})
            .catch((e)=>console.log(e));
        return false;
    }

    return(
        <FormStyled onSubmit={onSubmitForm} action="">
            <label htmlFor="tracking">Enter a Tracking Number</label>
            <input 
                required
                type="text" 
                name="Tracking" 
                id="tracking" 
                placeholder="Tracking number" 
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <Button text="Submit" type="submit"/>
        </FormStyled>
    )
}