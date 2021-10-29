import Link from 'next/link';
import styled from 'styled-components'

export default function NavBar(){
 
const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    color: white;
    background-color: black;
    min-height: 10vh;
    min-width: 100%;
`; 
 
return (
     <Nav>
         <Link href='/about'>About</Link>
         <Link href='/my_packages'>My Packages</Link>
         <Link href='/contact'>Contact</Link>
     </Nav>
 )
}