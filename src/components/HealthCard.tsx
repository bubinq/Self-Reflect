import { DisplayOptions } from "./DisplayOptions";
import { useEffect } from "react";
import { HealthRelated } from "./Questions/HealthRelated";
import { healthConfig } from "../configs/HealthConfig";
import rough from "roughjs";

export const HealthCard = () => {
  useEffect(() => {
    const canvas: HTMLCanvasElement | any = document.getElementById("canvas");
    let rc = rough.canvas(canvas);
    rc.path("M 251 462 q -385 -598 -8 -357 M 251 462 q 386 -604 -8 -355", {
      fill: "rgb(220,20,60)",
      fillWeight: 0.5,
    });
  }, []);

  return (
    <div className="contentWrapper">
      <div className="healthWrapper">
        <h3 className="modalHeading">Health</h3>
        <canvas id="canvas" width={"500px"} height={"500px"}></canvas>
        <DisplayOptions isOpening={false}></DisplayOptions>
      </div>
      <div className="healthQuestionsWrapper">
        {healthConfig.map((question) => (
          <HealthRelated
            key={question.id}
            quest={question.question}
            idx={question.id}
          ></HealthRelated>
        ))}
      </div>
    </div>
  );
};
