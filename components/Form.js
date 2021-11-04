import { useState } from "react"
import styled from "styled-components";
import Button from "./Button";


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
    const [code, setCode] = useState('');

    const onSubmitForm = (e)=> {
        e.preventdefault();
        console.log(e.target.value)
    }

    return(
        <FormStyled onSubmit={onSubmitForm} action="">
            <label htmlFor="trackinput">Enter a Tracking Number</label>
            <input type="text" name="Tracking" id="trackinput" />
            <Button text="Submit"/>
        </FormStyled>
    )
}