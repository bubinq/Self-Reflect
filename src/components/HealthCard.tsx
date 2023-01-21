import { DisplayOptions } from "./DisplayOptions";
import { useEffect } from "react";
import { HealthRelated } from "./Questions/HealthRelated";
import { healthConfig } from "../configs/HealthConfig";
import rough from "roughjs";

export const HealthCard = () => {
  useEffect(() => {
    const canvas: HTMLCanvasElement | any = document.getElementById("canvas");
    let rc = rough.canvas(canvas);
    rc.rectangle(62, 5, 380, 450, { bowing: 2.4, roughness: 1.2 });
  }, []);

  return (
    <div className="contentWrapper">
      <div className="healthWrapper">
        <h3 className="modalHeading">Starting with the foundation Health</h3>
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
