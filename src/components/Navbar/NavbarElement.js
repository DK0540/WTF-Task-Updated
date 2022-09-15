import styled from "styled-components";
import { NavLink as Link} from "react-router-dom";
import{FaBars} from "react-icons/fa";

export const Nav = styled.nav`
background: #000;
height:80px;
display: Flex;
justify-content: space-between;
padding: 0.5rem FaCalculator((100vw - 1000px) / 2);
z-index: 10;
`
//padding: 0.5rem FaCalculator((100vw - 1000px) / 2);



export const NavLink = styled(Link)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding:0 1rem;
height: 100%;
cursor: pointer;

&.active {
    color:#15cdfc;

}
`
export const Bars = styled(FaBars)`
display: none;
color:#fff;

 @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    rigth: 0;
    transfer: translate(-100, 75%);
    font-size: 1.8rem;
    cursor:pointer;
 }
`
export const NavMenu = styled.div`
display: flex;
align-items:center;
margin-right: -24px;

@media screen and (max-width: 768px) {
    display: none;
}
`
export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 80px;

@media screen and (max-width: 768px){
    display: none
}
`

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #e91818;
padding: 10px 22px;
color: rgba(236, 230, 230, 0.589);
font-size: 20px;
border: none;
outline: none
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
    transition: all 0.2s ease-in-out;
   
    color: rgb(255, 255, 255);
    
}
`