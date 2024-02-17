import "./NavBar.css"
import React  from "react"
import { cartCount } from "./MultipleCards"
import styled, { keyframes } from "styled-components"

// here we are using "styled-components"  to style elements in react 

let Nav = styled.div`
background-color: rgb(94, 195, 223);
color: black;
font-family: 'Courier New', Courier, monospace;
height: 3rem;
display: flex;
justify-content:space-between;
align-items: center;
padding-left: 20px;
padding-right: 20px;`


let BtnAnim = keyframes`
0% { background-color:yellow }
100% { background-color:red }
`
let Btn = styled.button`
width: 70px;
height: 35px;
text-align: center;
font-weight: 800;
font-size: 15px;
border-radius: 5px;
border: solid black 1px;
background-color:yellow;
animation-name: ${BtnAnim};   
animation-duration: 4s;
animation-iteration-count: infinite;
animation-direction:alternate;
animation-timing-function:linear;
`


 class NavBar extends React.Component{
    render(){
        return(<Nav>
        <h1 id="flexName">Movie Flex</h1>

        <Btn>Cart {cartCount}</Btn>

        </Nav>)
    }
}

export default NavBar;