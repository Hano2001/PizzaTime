import React, { useState, useContext, useEffect } from "react";
import { CounterContext } from "../contexts/CounterContext";
import { Button } from "../styling/generalStyling";
import {
  UpgradeInfoContainer,
  UpgradeItem,
} from "../styling/upgradesStyling";
export default function UpgradeStore({ list }) {
  const {
    generateData,
    setGenerateData,
    generationUpgrades,
    setGenerationUpgrades,
  } = useContext(CounterContext);

  const [upgradeInfo, setUpgradeInfo] = useState("");
  function upgradePurchase(generateIndex, upgradeId) {
    let upgradesArray = [...generationUpgrades];
    upgradesArray[upgradeId].purchased = true;
    generateData[generateIndex].generate =
      generateData[generateIndex].generate * 2;
    setGenerationUpgrades(upgradesArray);
  }

  if (list.length === 0) {
    return (
      <>
            <strong>You bought all upgrades! Yaaay!</strong>
      </>
    );
  }
  return (
    <>
          {list.map((item) => {
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
                    disabled={
                      generateData[item.index].amount < item.price
                        ? true
                        : false
                    }
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
    </>
  );
}
