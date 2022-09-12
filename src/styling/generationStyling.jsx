import  styled  from "styled-components";

const GenerationPropsDiv = styled.div`
width: 500px;
display: grid;
background: #bf0909;
float: right;
border-radius: 8px;
border: solid #faff6c 10px;
`
const ItemDiv = styled.div`
font-family: Arial, Helvetica, sans-serif;
color: white;
background: #ff0037;
padding: 5px;
height: 25px;
margin: 15px;
width: 50%;
text-align: center;
button{
    float: left;
    width: 25%;
    height: 100%;
    }
`
export{GenerationPropsDiv, ItemDiv};