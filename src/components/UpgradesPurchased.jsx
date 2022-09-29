import React from "react";
import { UpgradeItem } from "../styling/upgradesStyling";

export default function UpgradesPurchased({list}) {
  return (
    <>
      {list.map((item) => {
        return (
          <div key={item.id}>
            <UpgradeItem>
              <p>{item.name}</p>
            </UpgradeItem>
          </div>
        );
      })}
    </>
  );
}
