import styled from "styled-components";
import Link from "next/link";
import { FaPaperPlane } from 'react-icons/fa';



const NavStyled = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    min-height: 10vh;
    min-width: 100%;
    border-bottom: 1px solid white;
    border-top: 1px solid white;
    padding: 30px 0;
    margin-bottom: 100px;
    a {
        padding: 10px;
    }
    a:hover{
        color: skyblue;
    }
    a:last-of-type{
        padding-right: 60px;
    }
    h1 {
        padding-left: 5rem;
    }
    .icon{
        color:  #CE4F27;
    }
`; 

export default function Header(){
    return(
        <header>
            <NavStyled>
                <h1>
                    <FaPaperPlane className='icon'/>
                    <Link href='/'>
                        Tracker
                    </Link>
                </h1>
                <ul>
                    <Link href='/about'>About</Link>
                    <Link href='/my_packages'>My Packages</Link>
                    <Link href='/contact'>Contact</Link>
                </ul>
            </NavStyled>
        </header>
    )
}