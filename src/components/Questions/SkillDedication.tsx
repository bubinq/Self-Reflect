import React, { useState } from "react";
import { DedicationConfig } from "../../configs/DedicationConfig";
import { useSelector, useDispatch } from "react-redux"
import { userInput } from "../../interfaces/userInput";
import { setSkillDedication } from "../../redux/userInput";

export const SkillDedication = () => {
  const [isOther, setIsOther] = useState(false);
  const [_, setTimeDedicated] = useState({ hours: "0", minutes: "15" });

  const { skillDedication } = useSelector((state: userInput) => state.userInput);
  const dispatcher = useDispatch();


  function chooseDuration(id: number, duration: string) {
    if (id === 6) {
      setIsOther(true);
    } else {
      dispatcher(setSkillDedication(duration))
    }
  }

  function goBack() {
    setIsOther(false);
    dispatcher(setSkillDedication("15 minutes"));
  }

  function timeDedicatedHandler(ev: React.ChangeEvent<HTMLInputElement>) {
    if (ev.target.id === "hours") {
      if (Number(ev.target.value) > 23) {
        return;
      } else {
        setTimeDedicated(oldVal => ({ ...oldVal, hours: ev.target.value }))
      }
    } else if (ev.target.id === "minutes") {
      if (Number(ev.target.value) > 59) {
        return;
      } else {
        setTimeDedicated(oldVal => ({ ...oldVal, minutes: ev.target.value }))
      }
    }
  }

  return (
    <div
      className="dedicationWrapper"
      style={{ display: isOther ? "flex" : "grid" }}
    >
      {isOther ? (
        <div className="otherWrapper">
          <button className="goBack" onClick={goBack}></button>
          <div className="wrapHrs">
            <label htmlFor="hours">Hours</label>
            <input
              onChange={timeDedicatedHandler}
              id="hours"
              type={"number"}
              min={"0"}
              max={"23"}
              step={"1"}
            ></input>
          </div>
          <div className="wrapMin">
            <label htmlFor="minutes">Minutes</label>
            <input
              onChange={timeDedicatedHandler}
              id="minutes"
              type={"number"}
              min={"0"}
              max={"59"}
              step={"1"}
            ></input>
          </div>
        </div>
      ) : (
        <div className="dedicationWrapper">
          {DedicationConfig.map((dedication) => (
            <div
              onClick={() => chooseDuration(dedication.id, dedication.duration)}
              key={dedication.id}
              className={
                skillDedication === dedication.duration
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
