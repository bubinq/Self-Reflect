import { useContext, useState } from "react";
import { UserInputContext } from "../../contexts/UserInput";
import { GoingOutConfig } from "./GoingOutConfig";

export const GoingOut = () => {
  const { inputValues, setInputValues } = useContext(UserInputContext);
  const [isOther, setIsOther] = useState(false);

  function chooseFrequency(id: number, frequency: string) {
    if (id === 6) {
      setIsOther(true);
    } else {
      setInputValues((oldInputs: any) => ({
        ...oldInputs,
        goingOut: frequency,
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
          {GoingOutConfig.map((frequency) => (
            <div
              onClick={() => chooseFrequency(frequency.id, frequency.freq)}
              key={frequency.id}
              className={
                inputValues.goingOut === frequency.freq
                  ? "btnTime isSelected"
                  : "btnTime"
              }
            >
              {frequency.freq}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
