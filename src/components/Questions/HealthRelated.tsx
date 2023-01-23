import { useSelector, useDispatch } from "react-redux";
import { userInput } from "../../interfaces/userInput";
import { setMentalForm, setMood, setPhysicalForm, setSleepQuality } from "../../redux/userInput";

export const HealthRelated = ({
  quest,
  idx,
}: {
  quest: string;
  idx: number;
}) => {
  const { sleepQuality, mood, physicalForm, mentalForm } = useSelector(
    (state: userInput) => state.userInput
  );
  const dispatch = useDispatch();

  const questVal =
    idx === 1
      ? sleepQuality
      : idx === 2
      ? mood
      : idx === 3
      ? physicalForm
      : mentalForm;

  function handleValueChange(ev: React.ChangeEvent<HTMLInputElement>) {
    switch (idx) {
      case 1:
        dispatch(setSleepQuality(ev.target.value));
        break;
      case 2:
        dispatch(setMood(ev.target.value));
        break;
      case 3:
        dispatch(setPhysicalForm(ev.target.value));
        break;
      case 4:
        dispatch(setMentalForm(ev.target.value));
        break;
      default:
        dispatch(setSleepQuality(ev.target.value));
        break;
    }
    
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
          value={questVal}
        />
        <span>{questVal}</span>
        <div className="emojis">😍</div>
      </div>
    </div>
  );
};
