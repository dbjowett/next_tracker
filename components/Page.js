import { createGlobalStyle } from "styled-components"
import Header from "./Header"

const GlobalStyles = createGlobalStyle`
html,
body {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  color: black;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

*, *:before, *:after {
  box-sizing: inherit;
}
`;

export default function Page({children}){
    return (
    <div>
        <GlobalStyles/>
        <Header/>
        {children}
    </div>
    )
}