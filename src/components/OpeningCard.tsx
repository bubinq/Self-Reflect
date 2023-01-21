import { DisplayOptions } from "./DisplayOptions";
import { DisplayTime } from "./DisplayTime";
import { useEffect } from "react";
import rough from "roughjs"

export const OpeningCard = () => {
  useEffect(() => {
    const canvas: HTMLCanvasElement | any = document.getElementById('openingCanvas');
    let rc = rough.canvas(canvas);
    rc.rectangle(63, 10, 380, 450, { bowing: 2.4, roughness: 1.2 });
    rc.path('M 100 330 q 150 -110 300 0 M 114 301 L 113 321 L 141 315 L 93 338 M 93 338 L 114 301 M 389 301 L 404 338 M 365 311 L 403 338 M 386 319 L 389 301 M 386 320 L 365 311');
  }, [])
  return (
    <div className="contentWrapper">
      <div className="openingWrapper">
        <DisplayTime></DisplayTime>
        <div className="welcomingPrompt">
          <h3 className="modalHeading">Pick</h3>
          <svg className="leftArrText" viewBox="0 0 400 400">
            <path id="curve" d="M 18 115 c 32 -44 108 -79 162 -76 c 12 -2 15 3 37 11" />
            <text className="leftArrText" width="200">
              <textPath xlinkHref="#curve">
                Have an account?
              </textPath>
            </text>
          </svg>
          <svg className="rightArrText" viewBox="0 0 400 400">
            <path id="curve2" d="M 246 52 c 68 18 81 18 114 34 c 20 16 43 34 69 69" />
            <text className="rightArrText" width="200">
              <textPath xlinkHref="#curve2">
                Just arrived?
              </textPath>
            </text>
          </svg>
        </div>
        <canvas id="openingCanvas" width={"500px"} height={"500px"}></canvas>
        <DisplayOptions isOpening={true}></DisplayOptions>
      </div>
    </div>

  );
};
