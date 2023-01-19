import { DisplayOptions } from "./DisplayOptions";
import { DisplayTime } from "./DisplayTime";
import { useEffect } from "react";
import rough from "roughjs"

export const OpeningModal = () => {
  useEffect(() => {
    const canvas: HTMLCanvasElement | any = document.getElementById('openingCanvas');
    let rc = rough.canvas(canvas);
    rc.rectangle(62, 10, 380, 380, { bowing: 2.4, roughness: 1.2 });
  }, [])
  return (
    <div className="contentWrapper">
      <div className="openingWrapper">
        <h3>Hi from Opening</h3>
        <canvas id="openingCanvas" width={"500px"} height={"500px"}></canvas>
        <DisplayTime></DisplayTime>
        <DisplayOptions></DisplayOptions>
      </div>
    </div>

  );
};
