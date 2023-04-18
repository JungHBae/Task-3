import React from "react";
import { LargeButton, MediumButton, SmallButton } from "../GlobalStyles";

export const ButtonList = () => {
  return (
    <div>
      <div>
        <LargeButton addColor="green" addIcon="2193">
          Large Primary Button
        </LargeButton>
        <MediumButton addColor="green">Medium</MediumButton>
        <SmallButton addColor="green">Small</SmallButton>
      </div>
      <div>
        <LargeButton addColor="red" addIcon="2605">
          Large Primary Button
        </LargeButton>
        <MediumButton addColor="red">Medium</MediumButton>
        <SmallButton addColor="red">Small</SmallButton>
      </div>
    </div>
  );
};
