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
text-align: center;
`

const Container = styled.div`
margin: 20px;
display: flex;
flex-direction: row;
justify-content: space-between;
@media (max-width:1000px) {
  flex-direction:column;
  align-items: center;
  justify-content: space-around;
  
}

`
export { Button,MainDiv,Footer,Counter,Container };
