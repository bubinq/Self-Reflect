import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  useContext,
  useState,
} from "react";
import { UserInputContext } from "../../contexts/UserInput";
import { Wealth } from "../../interfaces/wealth";

export const WealthRelated = ({ quest }: { quest: Wealth | any }) => {
  const { inputValues, setInputValues } = useContext(UserInputContext);
  const [ans, setAns] = useState({ isNo: false, isYes: false });

  console.log(ans);

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
      setAns({ isYes: false, isNo: true });
      setInputValues((oldVals: any) => ({
        ...oldVals,
        hasFinancialPlan: false,
      }));
    } else if (ev.currentTarget.value == "Yes") {
      setInputValues((oldVals: any) => ({
        ...oldVals,
        hasFinancialPlan: true,
      }));
      setAns({ isYes: true, isNo: false });
    }
  }

  function goBack() {
    setAns({ isYes: false, isNo: false });
  }

  function handleMostValuedAssets(ev: React.ChangeEvent<HTMLInputElement>) {}

  return (
    <div className="questionsWrapper">
      <h3 className="modalHeading">
        {ans.isYes ? quest.followUpYes : quest.question}
      </h3>
      {(ans.isYes || ans.isNo) && (<button className="goBack" onClick={goBack}></button>)}
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
          {ans.isNo && (
            <>
              <span className="guides">
                {quest.followUpNo} <br></br>
                <a href="https://www.thebalancemoney.com/best-personal-finance-apps-4170650">
                  Best Personal Finance Apps
                </a>
              </span>
            </>
          )}
          {ans.isYes && (
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
          {!ans.isNo && !ans.isYes && (
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
        <div className="range">
          
        </div>
      )}
    </div>
  );
};
