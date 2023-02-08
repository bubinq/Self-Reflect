import { DisplayOptions } from "./DisplayOptions";
import rough from "roughjs";
import { useEffect } from "react";
import { WealthRelated } from "./Questions/WealthRelated";
import { wealthConfig } from "../configs/WealthConfig";

export const WealthCard = () => {
  useEffect(() => {
    const canvas: HTMLCanvasElement | any = document.getElementById("canvas");
    let rc = rough.canvas(canvas);
    rc.path("M 181 392 M 13 448 C 48 420 87 335 127 415 C 211 442 254 307 322 338 C 396 363 480 100 596 126 C 556 364 681 187 716 449 M 158 300 C 230 262 339 198 360 159 L 358 189 L 379 138 L 327 155 C 327 160 338 149 357 152 C 317 207 226 251 155 295", {
      fill: "rgb(0,255,127)",
      fillWeight: 0.5,
    });
  }, []);
  return (
    <div className="contentWrapper">
      <div className="wealthWrapper">
        <h3 className="modalHeading">Wealth</h3>
        <canvas id="canvas" width={"500px"} height={"500px"}></canvas>
        <DisplayOptions isOpening={false}></DisplayOptions>
      </div>
      <div className="wealthQuestionsWrapper">
        {wealthConfig.map((question) => (
          <WealthRelated key={question.id} quest={question}></WealthRelated>
        ))}
      </div>
    </div>
  );
};
