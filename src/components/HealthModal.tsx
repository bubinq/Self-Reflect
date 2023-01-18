import { DisplayOptions } from "./DisplayOptions";
import { useEffect } from "react";
import rough from "roughjs"

export const HealthModal = () => {

  useEffect(() => {
    const canvas: HTMLCanvasElement | any = document.getElementById('canvas');
    let rc = rough.canvas(canvas);
    rc.rectangle(77, 5, 350, 220, { bowing: 2.4, roughness: 1.2 });
    rc.rectangle(77, 260, 350, 200, { bowing: 2.4, roughness: 1.2 });
    rc.rectangle(77, 350, 350, 200, { bowing: 2.4, roughness: 1.2 });
    rc.rectangle(77, 260, 350, 200, { bowing: 2.4, roughness: 1.2 });
  }, [])

  return (
    <div className="contentWrapper">
      <div className="openingWrapper">
        <h3 className="modalHeading">Starting with the foundation Health</h3>
        <canvas id="canvas" width={"500px"} height={"500px"}></canvas>
        <DisplayOptions></DisplayOptions>
      </div>
    </div>
  );
};
