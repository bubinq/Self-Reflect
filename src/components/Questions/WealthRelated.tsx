import React, {
  useContext,
} from "react";
import { UserInputContext } from "../../contexts/UserInput";
import { Wealth } from "../../interfaces/wealth";
import { SkillDedication } from "./SkillDedication";

export const WealthRelated = ({ quest }: { quest: Wealth | any }) => {
  const { inputValues, setInputValues } = useContext(UserInputContext);

  console.log(inputValues.hasFinancialPlan);
  const hasFP = inputValues.hasFinancialPlan;

  const questVal =
    quest.id === 1
      ? "financialStatus"
      : quest.id === 2
      ? "hasFinancialPlan"
      : "mostValuedAssets";

  function handleValueChange(ev: React.ChangeEvent<HTMLInputElement>) {
    setInputValues((oldVals: any) => ({
      ...oldVals,
      [questVal]: ev.target.value,
    }));
  }

  function handleFProgress(ev: React.ChangeEvent<HTMLInputElement>) {
    setInputValues((oldVals: any) => ({
      ...oldVals,
      financialProgress: ev.target.value,
    }));
  }

  function handleYesOrNo(ev: React.MouseEvent<HTMLButtonElement>) {
    if (ev.currentTarget.value == "No") {
      setInputValues((oldVals: any) => ({
        ...oldVals,
        hasFinancialPlan: "negative",
      }));
    } else if (ev.currentTarget.value == "Yes") {
      setInputValues((oldVals: any) => ({
        ...oldVals,
        hasFinancialPlan: "positive",
      }));
    }
  }

  function goBack() {
    setInputValues((oldVals: any) => ({
      ...oldVals,
      hasFinancialPlan: "neutral",
    }));
  }

  return (
    <div className="questionsWrapper">
      <h3 className="modalHeading">
        {hasFP === "positive" && quest.id === 2 ? quest.followUpYes : quest.question}
      </h3>
      {((hasFP === "positive" || hasFP === "negative") && quest.id === 2) && (<button className="goBack" onClick={goBack}></button>)}
      {questVal === "financialStatus" ? (
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
      ) : questVal === "hasFinancialPlan" ? (
        <div className="yesNo">
          {hasFP === "negative" && (
            <>
              <span className="guides">
                {quest.followUpNo} <br></br>
                <a href="https://www.thebalancemoney.com/best-personal-finance-apps-4170650">
                  Best Personal Finance Apps
                </a>
              </span>
            </>
          )}
          {hasFP === "positive" && (
            <div className="range">
              <div className="emojis">😓</div>
              <input
                onChange={handleFProgress}
                className="rangeInput"
                type="range"
                min="1"
                max="10"
                step="1"
                value={inputValues.financialProgress}
              />
              <span>{inputValues.financialProgress}</span>
              <div className="emojis">😍</div>
            </div>
          )}
          {(hasFP === "neutral") && (
            <>
              {" "}
              <input
                //@ts-ignore
                onClick={handleYesOrNo}
                className="yesNoBtn"
                type="button"
                defaultValue={"Yes"}
              />
              <input
                //@ts-ignore
                onClick={handleYesOrNo}
                className="yesNoBtn"
                type="button"
                defaultValue={"No"}
              />
            </>
          )}
        </div>
      ) : (
        <SkillDedication></SkillDedication>
      )}
    </div>
  );
};
