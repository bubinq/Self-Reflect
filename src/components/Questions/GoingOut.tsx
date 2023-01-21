import { useContext } from "react";
import { UserInputContext } from "../../contexts/UserInput";
import { GoingOutConfig } from "../../configs/GoingOutConfig";

export const GoingOut = () => {
  const { inputValues, setInputValues } = useContext(UserInputContext);

  function chooseFrequency(frequency: string) {
    setInputValues((oldInputs: any) => ({
      ...oldInputs,
      goingOut: frequency,
    }));

  }
  return (
    <div className="dedicationWrapper">
      <div className="dedicationWrapper">
        {GoingOutConfig.map((frequency) => (
          <div
            onClick={() => chooseFrequency(frequency.freq)}
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
    </div>
  );
};
