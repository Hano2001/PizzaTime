import styled from "styled-components";
function ButtonColor(prop){
  if(prop.function === "upgrade"){
    return prop.disabled ? "grey" : "orange"
  }
  if(prop.function === "reset"){
    return "red";
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
export { Button };
