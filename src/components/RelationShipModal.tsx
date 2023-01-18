import { DisplayOptions } from "./DisplayOptions";
import { useEffect } from "react";
import rough from "roughjs"

export const RelationShipModal = () => {
  useEffect(() => {
    const canvas: HTMLCanvasElement | any = document.getElementById('canvas');
    let rc = rough.canvas(canvas);
    rc.rectangle(77, 20, 350, 200, { bowing: 2.4, roughness: 1.2 });
  }, [])
  return (
    <div className="contentWrapper">
      <div className="openingWrapper">
        <h3 className="modalHeading">Sharing love with close ones Relationships</h3>
        <canvas id="canvas" width={"500px"} height={"500px"}></canvas>
        <DisplayOptions></DisplayOptions>
      </div>
    </div>
  );
};
