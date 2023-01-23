
import { GoingOutConfig } from "../../configs/GoingOutConfig";
import { useSelector, useDispatch } from "react-redux";
import { userInput } from "../../interfaces/userInput";
import { setGoingOutFreq } from "../../redux/userInput";

export const GoingOut = () => {
  const {goingOut} = useSelector((state: userInput) => state.userInput);
  const dispatch = useDispatch();

  function chooseFrequency(frequency: string) {
    dispatch(setGoingOutFreq(frequency))
  }
  return (
    <div className="dedicationWrapper">
      <div className="dedicationWrapper">
        {GoingOutConfig.map((frequency) => (
          <div
            onClick={() => chooseFrequency(frequency.freq)}
            key={frequency.id}
            className={
              goingOut === frequency.freq
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
