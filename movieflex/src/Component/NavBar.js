import "./NavBar.css";
import styled from "styled-components";

// here we are using "styled-components"  to style elements in react

let Nav = styled.div`
  background-color: rgb(94, 195, 223);
  color: black;
  font-family: "Courier New", Courier, monospace;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`;

let IMG = styled.img`
  width: 35px;
  height: 35px;
  text-align: center;
`;
let Count = styled.span`
  width: 17px;
  height: 17px;
  text-align: center;
  position: absolute;
  right: 25px;
  font-weight: 900;
  font-size: 15px;
  border-radius: 50%;
  background-color: rgb(72, 255, 0);
`;

function NavBar(props) {
  return (
    <Nav>
      <h1 id="flexName">Movie Flex</h1>
      <div>
        {" "}
        <IMG src="https://cdn-icons-png.flaticon.com/128/891/891462.png" />
        <Count>{props.cartCount}</Count>
      </div>
    </Nav>
  );
}

export default NavBar;
