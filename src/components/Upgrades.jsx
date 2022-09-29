import React, { useState, useContext, useEffect } from "react";
import { CounterContext } from "../contexts/CounterContext";
import { upgradesData_Generation } from "../data/upgradesData";
import {
  UpgradeMainContainer,
  UpgradesContainer,
} from "../styling/upgradesStyling";
import UpgradesPurchased from "./UpgradesPurchased";
import UpgradeStore from "./UpgradeStore";
export default function Upgrades() {
  const { generationUpgrades } = useContext(CounterContext);
  const [listOption, setListOption] = useState(true);
  const [upgradeStoreList, setUpgradeStoreList] = useState(
    generationUpgrades.filter((upgrade) => upgrade.purchased === false)
  );
  const [purchased, setPurchased] = useState(
    generationUpgrades.filter((upgrade) => upgrade.purchased === true)
  );

  useEffect(() => {
    setUpgradeStoreList(
      upgradesData_Generation.filter((upgrade) => upgrade.purchased === false)
    );
    setPurchased(
      upgradesData_Generation.filter((upgrade) => upgrade.purchased === true)
    );
  }, [generationUpgrades]);
  function ReturnList() {
    return listOption ? (
      <UpgradeStore list={upgradeStoreList} />
    ) : (
      <UpgradesPurchased list={purchased} />
    );
  }

  return (
    <>
      <UpgradeMainContainer>
        <UpgradesContainer>
          <h2>Upgrades</h2>
          <button onClick={() => setListOption(true)}>Store</button>
          <button onClick={() => setListOption(false)}>Purchased</button>
          {/* <UpgradeStore list={upgradeStoreList} />
          <UpgradesPurchased list={purchased} /> */}
          <ReturnList/>
        </UpgradesContainer>
      </UpgradeMainContainer>
    </>
  );
}
