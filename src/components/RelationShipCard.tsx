import { DisplayOptions } from "./DisplayOptions";
import { useEffect } from "react";
import { RelationshipsRelated } from "./Questions/RelationshipsRelated";
import { relationshipsConfig } from "../configs/RelationshipsConfig";
import { useSelector } from "react-redux";
import rough from "roughjs";
import { userInput } from "../interfaces/userInput";

export const RelationShipCard = () => {
  const form = useSelector((state: userInput) => state.userInput);
  console.log(form);
  useEffect(() => {
    const canvas: HTMLCanvasElement | any = document.getElementById("canvas");
    let rc = rough.canvas(canvas);
    rc.rectangle(62, 5, 380, 450, { bowing: 2.4, roughness: 1.2 });
  }, []);
  return (
    <div className="contentWrapper">
      <div className="relationshipWrapper">
        <h3 className="modalHeading">
          Sharing love with close ones Relationships
        </h3>
        <canvas id="canvas" width={"500px"} height={"500px"}></canvas>
        <DisplayOptions isOpening={false}></DisplayOptions>
      </div>
      <div className="relationshipsWrapper">
        {relationshipsConfig.map((question) => (
          <RelationshipsRelated
            key={question.id}
            quest={question}
          ></RelationshipsRelated>
        ))}
        {/* <div className="submitBtnWrapper">
          <button className="submitInfo">Submit</button>
        </div> */}
      </div>
    </div>
  );
};
