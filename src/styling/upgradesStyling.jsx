import  styled  from "styled-components";
const UpgradeMainDiv = styled.div`
position: absolute;
z-index: 1;
float: left;
`
const UpgradesContainer = styled.div`

width: 250px;
height: fit-content;

background-color: wheat;

`
const UpgradeInfoDiv = styled.div`
z-index: 2;
float: left;
background-color: aliceblue;
margin: 5px;
width: fit-content;
height: fit-content ;
bottom: 25%;
text-align: center;
`
export{UpgradesContainer, UpgradeInfoDiv,UpgradeMainDiv};