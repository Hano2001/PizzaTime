import  styled  from "styled-components";

const GenerationImage = styled.img`
height: 100%;
`
const GenerationMainContainer = styled.div`
width: 500px;
background: #a91a1a;
border-radius: 8px;
border: solid #faff6c 10px;
`
const ItemContainer = styled.div`
font-family: Arial, Helvetica, sans-serif;
display: flex;
flex-direction: row;
justify-content: space-between;
color: white;
background: #ff0037;
padding: 5px;
height: 55px;
margin: 15px;
width: 80%;
text-align: center;
button{
    float: left;
    width: 25%;
    height: 100%;
    }
`
export{GenerationMainContainer, ItemContainer, GenerationImage};