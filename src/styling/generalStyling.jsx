import styled from "styled-components";
function ButtonColor(prop){
  if(prop.function === "buy"){
    return prop.disabled ? "grey" : "orange"
  }
  if(prop.function === "reset"){
    return "red";
  }
  if(prop.function === "upgrade"){
    return prop.disabled ? "grey" : "green"
  }
  else{
    return "yellow"
  }
}
const Button = styled.button`
  background-color: ${props => ButtonColor(props)};
  border-radius: 5px;
  color: black;
  font-family: sans-serif;
  font-weight: bolder;
  padding: 5px;
`;
const MainDiv = styled.div`
text-align: center;
position: fixed;
width: 100%;
height: 100%;
bottom: 0%;
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(249,79,233,1) 35%);
z-index: -1;
`
const Footer = styled.footer`
a{
  text-decoration: none;
  color: white;
  :hover{
    color: black;
    bottom: 0%;
    padding: 5px;
    background: white;
  }
}
width: 100%;
position: absolute;
bottom: 0%;
height: 45px;
background-color: black;
`
const Counter = styled.div`
height: 150px;
background: salmon;
width: 150px;
`

const Container = styled.div`
margin: 20px;
display: flex;
flex-direction: row;
justify-content: space-between ;

`
export { Button,MainDiv,Footer,Counter,Container };
