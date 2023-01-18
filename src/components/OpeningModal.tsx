import { DisplayOptions } from "./DisplayOptions";
import { DisplayTime } from "./DisplayTime";
import { useEffect } from "react";
import rough from "roughjs"

export const OpeningModal = () => {
  useEffect(() => {
    const canvas: HTMLCanvasElement | any = document.getElementById('canvas');
    let rc = rough.canvas(canvas);
    rc.rectangle(77, 10, 350, 320, { bowing: 2.4, roughness: 1.2 });
  }, [])
  return (
    <div className="contentWrapper">
      <div className="openingWrapper">
        <h3>Hi from Opening</h3>
        <canvas id="canvas" width={"500px"} height={"500px"}></canvas>
        <DisplayTime></DisplayTime>
        <DisplayOptions></DisplayOptions>
      </div>
    </div>

  );
};
