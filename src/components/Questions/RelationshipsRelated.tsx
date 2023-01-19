import { useContext } from "react";
import { UserInputContext } from "../../contexts/UserInput";
import { Relationships } from "../../interfaces/relationship";

export const RelationshipsRelated = ({ quest }: { quest: Relationships }) => {
  const { inputValues, setInputValues } = useContext(UserInputContext);

  const questVal =
    quest.id === 1
      ? "socialLifeQuality"
      : quest.id === 2
      ? "socialSkills"
      : "goingOut";

  function handleValueChange(ev: React.ChangeEvent<HTMLInputElement>) {
    setInputValues((oldVals: any) => ({
      ...oldVals,
      [questVal]: ev.target.value,
    }));
  }
  return (
    <div className="questionsWrapper">
      <h3 className="modalHeading">{quest.question}</h3>
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
