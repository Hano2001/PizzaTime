import React, { useState } from "react";
import { useContext } from "react";
import { CounterContext } from "../contexts/CounterContext";
import { upgradesData } from "../data/upgradesData";
import { Button } from "../styling/generalStyling";
import {
  UpgradeInfoDiv,
  UpgradeMainDiv,
  UpgradesDiv,
} from "../styling/upgradesStyling";

export default function Upgrades() {
  const {generateData} = useContext(CounterContext)
  const [upgradeInfo, setUpgradeInfo] = useState("");
  return (
    <>
      <UpgradeMainDiv>
        <UpgradesDiv>
          <h2>Upgrades</h2>
          {upgradesData.map((item) => {
            return (
              <>
                <p
                  onMouseOver={() => setUpgradeInfo(item.description)}
                  onMouseLeave={() => setUpgradeInfo("")}
                >
                  {item.name}
                </p>

                <Button onClick={() => console.log(generateData.Chef)}
                // disabled={ge < item.price ? true : false}
                function="upgrade">Buy Upgrade</Button>
              </>
            );
          })}
        </UpgradesDiv>
        <UpgradeInfoDiv>
          <strong>{upgradeInfo}</strong>
        </UpgradeInfoDiv>
      </UpgradeMainDiv>
    </>
  );
}
