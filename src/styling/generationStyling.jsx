import  styled  from "styled-components";

const GenerationMainContainer = styled.div`
width: 500px;
background: #bf0909;
border-radius: 8px;
border: solid #faff6c 10px;
`
const ItemContainer = styled.div`
font-family: Arial, Helvetica, sans-serif;
color: white;
background: #ff0037;
padding: 5px;
height: 55px;
margin: 15px;
width: 75%;
text-align: center;
button{
    float: left;
    width: 25%;
    height: 100%;
    }
`
export{GenerationMainContainer, ItemContainer};