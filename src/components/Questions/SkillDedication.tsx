import { useContext, useState } from "react";
import { UserInputContext } from "../../contexts/UserInput";
import { DedicationConfig } from "./DedicationConfig";

export const SkillDedication = () => {
  const { inputValues, setInputValues } = useContext(UserInputContext);
  const [isOther, setIsOther] = useState(false);

  function chooseDuration(id: number, duration: string) {
    if (id === 6) {
      setIsOther(true);
    } else {
      setInputValues((oldInputs: any) => ({
        ...oldInputs,
        skillDedication: duration,
      }));
    }
  }
  return (
    <div className="dedicationWrapper">
      {isOther ? (
        <div>
          <input type={"number"} min={"0"} max={"23"} step={"1"}></input>
          <input type={"number"} min={"0"} max={"59"} step={"1"}></input>
        </div>
      ) : (
        <div className="dedicationWrapper">
          {DedicationConfig.map((dedication) => (
            <div
              onClick={() => chooseDuration(dedication.id, dedication.duration)}
              key={dedication.id}
              className={
                inputValues.skillDedication === dedication.duration
                  ? "btnTime isSelected"
                  : "btnTime"
              }
            >
              {dedication.duration}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
