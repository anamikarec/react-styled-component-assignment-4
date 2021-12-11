import React from "react";
import styled from "styled-components"
const Wrapper = styled.div`
position:relative;
border:1px solid red;
background:black;
width:100%;
height:65px;
`
const Logo = styled.div`
position:absolute;
left:30px;
top:10px;

@media screen and (max-width:600px){
    display:none;
    visibility:hidden;
}
`
const Div = styled.div`
position:absolute;
right:20px;
top:20px;
color:white;
font-size:18px;

@media screen and (max-width:600px){
   font-size:14px;
   top:25px;
}
`
const Navbar = () => {
return(
    <>
    <Wrapper>
    <Logo><img src="https://www.w3schools.com/images/colorpicker2000.png" width="50" /></Logo>
    <Div style={{right:"300px",background:"#01BCD4",padding:"10px",top:"13px",borderRadius:"5px"}}>TRY VEDAS</Div>
    <Div style={{right:"200px"}}>Learn</Div>
    <Div style={{right:"100px"}}>Resources</Div>
    <Div>About</Div>
    </Wrapper>
    </>
)
}

export default Navbar;