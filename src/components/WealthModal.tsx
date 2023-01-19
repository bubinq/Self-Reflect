import { DisplayOptions } from "./DisplayOptions";
import rough from "roughjs";
import { useEffect } from "react";
import { WealthRelated } from "./Questions/WealthRelated";
import { wealthConfig } from "./Questions/WealthConfig";

export const WealthModal = () => {
  useEffect(() => {
    const canvas: HTMLCanvasElement | any = document.getElementById("canvas");
    let rc = rough.canvas(canvas);
    rc.rectangle(62, 5, 380, 450, { bowing: 2.4, roughness: 1.2 });
  }, []);
  return (
    <div className="contentWrapper">
      <div className="openingWrapper">
        <h3 className="modalHeading">Building our way up creating Wealth</h3>
        <canvas id="canvas" width={"500px"} height={"500px"}></canvas>
        <DisplayOptions></DisplayOptions>
      </div>
      <div className="wealthQuestionsWrapper">
        {wealthConfig.map((question) => (
          <WealthRelated key={question.id} quest={question}></WealthRelated>
        ))}
      </div>
    </div>
  );
};
