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
    rc.path("M 342 319 a 1 1 0 0 0 -191 -2 A 1 1 0 0 0 342 319 Z M 254 222 L 255 201 C 272 192 288 185 255 190 C 253 168 246 183 246 188 C 246 191 217 170 239 192 L 245 199 L 248 221 M 278 227 L 288 202 C 257 172 288 193 291 197 C 299 185 302 179 302 200 C 327 203 346 206 303 207 L 295 210 L 284 231 M 310 246 L 328 226 C 333.6667 220 312 191 337 217 C 350 198 351 215 343 223 C 370 233 364 232 356 234 L 334 234 L 315 250 M 332 274 L 355 253 C 364 220 357 235 367 244 C 376 241 384 230 373 252 C 384 261 391 275 366 262 L 359 261 L 334 279 M 226 224 L 220 202 C 221 192 249 168 216 190 C 217 193 201 162 209 193 C 207 195 169 179 206 201 L 212 205 L 220 226 M 198 236 L 187 214 C 186.3333 210.3333 212 171 183 205 C 182 205 163 183 176 211 C 166 212 148 215 174 217 L 180 217 L 193 238 M 174 255 L 157 235 C 160 230 165 190 151 229 C 145 229 128 212 143 234 C 135 237 111 244 144 240 L 152 245 L 171 261", {
      fill: "rgb(255, 234, 0)",
      fillWeight: 0.5,
    });
  }, []);
  return (
    <div className="contentWrapper">
      <div className="relationshipWrapper">
        <h3 className="modalHeading">
          Relationships
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
