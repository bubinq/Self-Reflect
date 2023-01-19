import React, { useContext } from "react";
import { UserInputContext } from "../../contexts/UserInput";

export const HealthRelated = ({
  quest,
  idx,
}: {
  quest: string;
  idx: number;
}) => {
  const { inputValues, setInputValues } = useContext(UserInputContext);

  const questVal =
    idx === 1
      ? "sleepQuality"
      : idx === 2
      ? "mood"
      : idx === 3
      ? "physicalForm"
      : "mentalForm";

  function handleValueChange(ev: React.ChangeEvent<HTMLInputElement>) {
    setInputValues((oldVals: any) => ({
      ...oldVals,
      [questVal]: ev.target.value,
    }));
  }
  return (
    <div className="questionsWrapper">
      <h3 className="modalHeading">{quest}</h3>
      <div className="range">
        <div className="emojis">😓</div>
        <input
          onChange={handleValueChange}
          className="rangeInput"
          type="range"
          min="1"
          max="10"
          step="1"
          value={inputValues[questVal]}
        />
        <span>{inputValues[questVal]}</span>
        <div className="emojis">😍</div>
      </div>
    </div>
  );
};
