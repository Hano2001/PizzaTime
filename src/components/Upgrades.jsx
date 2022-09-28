import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { CounterContext } from "../contexts/CounterContext";
import { upgradesData_Generation } from "../data/upgradesData";
import { Button } from "../styling/generalStyling";
import {
  UpgradeInfoContainer,
  UpgradeItem,
  UpgradeMainContainer,
  UpgradesContainer,
} from "../styling/upgradesStyling";
export default function Upgrades() {
  const { generateData, setGenerateData } = useContext(CounterContext);
  const [upgradeInfo, setUpgradeInfo] = useState("");
  const [generationUpgrades, setGenerationUpgrades] = useState(
    upgradesData_Generation
  );
  const [upgradeStoreList, setUpgradeStoreList] = useState(
    generationUpgrades.filter((upgrade) => upgrade.purchased === false)
  );

  useEffect(() => {
    setUpgradeStoreList(
      upgradesData_Generation.filter((upgrade) => upgrade.purchased === false)
    );
  }, [generationUpgrades]);

  function upgradePurchase(generateIndex, upgradeId) {
    let upgradesArray = [...generationUpgrades];
    upgradesArray[upgradeId].purchased = true;
    generateData[generateIndex].generate =
      generateData[generateIndex].generate * 2;
    setGenerationUpgrades(upgradesArray);
  }
  if(upgradeStoreList.length === 0){
    return (
        <>
        <UpgradeMainContainer>
            <UpgradesContainer>
                <h2>Upgrades</h2>
                <strong>You bought all upgrades! Yaaay!</strong>
            </UpgradesContainer>
        </UpgradeMainContainer>
        </>
    )
  }
  return (
    <>
      <UpgradeMainContainer>
        <UpgradesContainer>
          <h2>Upgrades</h2>
          {upgradeStoreList.map((item) => {
            return (
              <div key={item.id}>
                <UpgradeItem>
                  <p
                    onMouseOver={() => setUpgradeInfo(item.description)}
                    onMouseLeave={() => setUpgradeInfo("")}
                  >
                    {item.name}
                  </p>
                  <Button
                    onClick={() => upgradePurchase(item.index, item.id)}
                    // disabled={ge < item.price ? true : false}
                    function="upgrade"
                  >
                    Buy Upgrade
                  </Button>
                </UpgradeItem>
              </div>
            );
          })}
          <UpgradeInfoContainer>
            <strong>{upgradeInfo}</strong>
          </UpgradeInfoContainer>
        </UpgradesContainer>
      </UpgradeMainContainer>
    </>
  );
}
