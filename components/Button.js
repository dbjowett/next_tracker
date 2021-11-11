import styled from 'styled-components';

const ButtonStyled = styled.button`
  cursor: pointer;
  background-color: #ce4f27;
  text-transform: uppercase;
  padding: 10px 30px;
  border-radius: 10px;
  color: white;
  border: none;
`;

export default function Button({ text, type }) {
  return <ButtonStyled type={type}>{text}</ButtonStyled>;
}
