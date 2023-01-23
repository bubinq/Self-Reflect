import { Wealth } from "../../interfaces/wealth";
import { SkillDedication } from "./SkillDedication";
import { userInput } from "../../interfaces/userInput";
import { useSelector, useDispatch } from "react-redux";
import {
  setFinancialProgress,
  setFinancialStatus,
  setHasFinancialPlan,
} from "../../redux/userInput";

export const WealthRelated = ({ quest }: { quest: Wealth | any }) => {
  const { financialStatus, hasFinancialPlan, financialProgress } = useSelector(
    (state: userInput) => state.userInput
  );
  const dispatch = useDispatch();

  const questVal = quest.id === 1 ? financialStatus : hasFinancialPlan;

  function handleValueChange(ev: React.ChangeEvent<HTMLInputElement>) {
    dispatch(setFinancialStatus(ev.target.value));
  }

  function handleFProgress(ev: React.ChangeEvent<HTMLInputElement>) {
    dispatch(setFinancialProgress(ev.target.value));
  }

  function handleYesOrNo(ev: React.MouseEvent<HTMLButtonElement>) {
    if (ev.currentTarget.value == "No") {
      dispatch(setHasFinancialPlan("negative"));
    } else if (ev.currentTarget.value == "Yes") {
      dispatch(setHasFinancialPlan("positive"));
    }
  }

  function goBack() {
    dispatch(setHasFinancialPlan("neutral"));
  }

  return (
    <div className="questionsWrapper">
      <h3 className="modalHeading">
        {hasFinancialPlan === "positive" && quest.id === 2
          ? quest.followUpYes
          : quest.question}
      </h3>
      {(hasFinancialPlan === "positive" || hasFinancialPlan === "negative") &&
        quest.id === 2 && <button className="goBack" onClick={goBack}></button>}
      {quest.id === 1 ? (
        <div className="range">
          <div className="emojis">😓</div>
          <input
            onChange={handleValueChange}
            className="rangeInput"
            type="range"
            min="1"
            max="10"
            step="1"
            value={questVal}
          />
          <span>{questVal}</span>
          <div className="emojis">😍</div>
        </div>
      ) : quest.id === 2 ? (
        <div className="yesNo">
          {hasFinancialPlan === "negative" && (
            <>
              <span className="guides">
                {quest.followUpNo} <br></br>
                <a href="https://www.thebalancemoney.com/best-personal-finance-apps-4170650">
                  Best Personal Finance Apps
                </a>
              </span>
            </>
          )}
          {hasFinancialPlan === "positive" && (
            <div className="range">
              <div className="emojis">😓</div>
              <input
                onChange={handleFProgress}
                className="rangeInput"
                type="range"
                min="1"
                max="10"
                step="1"
                value={financialProgress}
              />
              <span>{financialProgress}</span>
              <div className="emojis">😍</div>
            </div>
          )}
          {hasFinancialPlan === "neutral" && (
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
