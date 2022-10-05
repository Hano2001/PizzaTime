import styled from "styled-components";
const UpgradeMainContainer = styled.div`
  z-index: 1;
  background: red;
  border-radius: 3px;
  width: fit-content;
`;
const UpgradesContainer = styled.div`
  width: 250px;
  height: fit-content;
`;
const UpgradeInfoContainer = styled.div`
  z-index: 3;
  background: aliceblue;
  border-radius: 3px;
  margin: 5px;
  width: fit-content;
  height: fit-content;
  text-align: center;
`;
const UpgradeItem = styled.div`
  border-radius: 3px;
  background: wheat;
  margin: 15px;
  font-family: fantasy;
  padding: 10px; ;
`;
export {
  UpgradesContainer,
  UpgradeInfoContainer,
  UpgradeMainContainer,
  UpgradeItem,
};
