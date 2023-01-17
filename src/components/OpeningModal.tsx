import { DisplayOptions } from "./DisplayOptions";
import { DisplayTime } from "./DisplayTime";

export const OpeningModal = () => {
  return (
    <div className="openingWrapper">
      <h3>Hi from Opening</h3>
      <DisplayTime></DisplayTime>
      <DisplayOptions></DisplayOptions>
    </div>
  );
};
