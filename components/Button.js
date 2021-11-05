import styled from "styled-components"

const ButtonStyled = styled.button`
    cursor: pointer;
    background-color: #CE4F27;
    text-transform: uppercase;
    padding: 10px 30px;
    border-radius: 20px;
    color: white;
    border: none;
`;

export default function Button({text, type}) {
    return (
        <ButtonStyled type={type}>{text}</ButtonStyled>
    )
}