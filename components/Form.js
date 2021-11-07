import { useState } from "react"
import styled from "styled-components";
import Button from "./Button";
import axios from 'axios';


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

    const onSubmitForm = event => {
        event.preventDefault();
        async () => {
            const {data} = await axios('/api/tracking', {params: {text}});
            console.log(data)
            return data;
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
};