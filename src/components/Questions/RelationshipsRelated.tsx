import { Relationships } from "../../interfaces/relationship";
import { GoingOut } from "./GoingOut";
import { useSelector, useDispatch } from "react-redux";
import { userInput } from "../../interfaces/userInput";
import { setSocialLifeQuality, setSocialSkills } from "../../redux/userInput";

export const RelationshipsRelated = ({ quest }: { quest: Relationships }) => {
  const { socialLifeQuality, socialSkills } = useSelector(
    (state: userInput) => state.userInput
  );
  const dispatch = useDispatch();
  const questVal =
    quest.id === 1
      ? socialLifeQuality
      : socialSkills

  function handleValueChange(ev: React.ChangeEvent<HTMLInputElement>) {
    switch (quest.id) {
      case 1:
        dispatch(setSocialLifeQuality(ev.target.value));
        break;
      case 2:
        dispatch(setSocialSkills(ev.target.value));
        break;
      default:
        dispatch(setSocialLifeQuality(ev.target.value));
        break;
    }
  }
  return (
    <div className="questionsWrapper">
      <h3 className="modalHeading">{quest.question}</h3>
      {quest.id === 1 || quest.id === 2 ? (
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
      ) : (
        <GoingOut></GoingOut>
      )}
    </div>
  );
};
