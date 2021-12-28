import React from "react";
import cam_view from "../images/camera_view.png";
import { useNavigate } from "react-router-dom";

export default function View1() {
  let navigate = useNavigate();

  return (
    <div className="viewCont">
      <div className="viewSide">
        <select name="classrooms" id="classrooms">
          <option value="classroom1">제 1 학습장</option>
          <option value="classroom2">제 2 학습장</option>
          <option value="classroom3">제 3 학습장</option>
          <option value="classroom4">제 4 학습장</option>
        </select>
      </div>
      <div className="viewMain">
        <div className="viewTitle">
          <h3>학습장 CCTV 영상 및 소음 환경 실시간 분석</h3>
        </div>
        <div className="viewCam">
          <img src={cam_view} id="cam_view" alt={"cam_view"} />
        </div>
        <div className="viewData">
          {/* <p>Current Noise Level: {noise - level - data} db</p> */}
        </div>
        <div className="viewButton">
          <button className="button2" onClick={() => navigate("/view2")}>
            산만도 분석
          </button>
        </div>
      </div>
    </div>
  );
}
