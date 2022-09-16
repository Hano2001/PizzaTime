import React, { useState } from "react";
import { useContext } from "react";
import { CounterContext } from "../contexts/CounterContext";
import { upgradesData_Generation } from "../data/upgradesData";
import { Button } from "../styling/generalStyling";
import {
  UpgradeInfoDiv,
  UpgradeMainDiv,
  UpgradesContainer,
} from "../styling/upgradesStyling";
export default function Upgrades() {
  const { generateData, setGenerateData } = useContext(CounterContext);
  const [upgradeInfo, setUpgradeInfo] = useState("");

  function upgradePurchase(generateIndex, upgradeIndex) {
    upgradesData_Generation[upgradeIndex].purchased = true;
    let generateArray = [...generateData];
    generateArray[generateIndex].generate =
      generateArray[generateIndex].generate * 2;
  }
  return (
    <>
      <UpgradeMainDiv>
        <UpgradesContainer>
          <h2>Upgrades</h2>
          {upgradesData_Generation.filter(upgrade => upgrade.purchased === false).map((item, arrayIndex) => {
            return (
              <>
                <p
                  onMouseOver={() => setUpgradeInfo(item.description)}
                  onMouseLeave={() => setUpgradeInfo("")}
                >
                  {item.name}
                </p>
                <Button
                  onClick={() => upgradePurchase(item.index, arrayIndex)}
                  // disabled={ge < item.price ? true : false}
                  function="upgrade"
                >
                  Buy Upgrade
                </Button>
              </>
            );
          })}
        </UpgradesContainer>
        <button onClick={() => console.log(upgradesData_Generation)}>TEST</button>
        <UpgradeInfoDiv>
          <strong>{upgradeInfo}</strong>
        </UpgradeInfoDiv>
      </UpgradeMainDiv>
    </>
  );
}
