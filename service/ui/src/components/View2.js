import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cam_view_small from "../images/cam_view_small.png";
import Chart from "./Chart";
import Popup from "./Popup";

export default function View2() {
  let navigate = useNavigate();

  const [warning, setWarning] = useState(false);

  const showWarning = () => {
    setWarning(true);
  };

  const handleClose = () => {
    setWarning(false);
  };

  const alertMessage = "제 1학습장 산만도 높음 박민연 학생 경고 조치 필요";

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
          <h3>산만도 분석</h3>
        </div>
        <div id="cont2">
          <div className="viewCam">
            <img
              src={cam_view_small}
              id="cam_view_small"
              alt={"cam_view_small"}
            />
            <div id="resultData">
              <table className="resultDataTable">
                <thead>
                  <tr>
                    <th>Results 1</th>
                    <th>Results 2</th>
                    <th>Results 3</th>
                    <th>Results 4</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>data1_1</td>
                    <td>data2_1</td>
                    <td>data3_1</td>
                    <td>data4_1</td>
                  </tr>
                  <tr>
                    <td>data1_2</td>
                    <td>data2_2</td>
                    <td>data3_2</td>
                    <td>data4_2</td>
                  </tr>
                  <tr>
                    <td>data1_3</td>
                    <td>data2_3</td>
                    <td>data3_3</td>
                    <td>data4_3</td>
                  </tr>
                  <tr>
                    <td>data1_4</td>
                    <td>data2_4</td>
                    <td>data3_4</td>
                    <td>data4_4</td>
                  </tr>
                  <tr>
                    <td>data1_5</td>
                    <td>data2_5</td>
                    <td>data3_5</td>
                    <td>data4_5</td>
                  </tr>
                  <tr>
                    <td>data1_6</td>
                    <td>data2_6</td>
                    <td>data3_6</td>
                    <td>data4_6</td>
                  </tr>
                  <tr>
                    <td>data1_7</td>
                    <td>data2_7</td>
                    <td>data3_7</td>
                    <td>data4_7</td>
                  </tr>
                  <tr>
                    <td>data1_8</td>
                    <td>data2_8</td>
                    <td>data3_8</td>
                    <td>data4_8</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="chartData">
            <div className="chartDataTitle">
              <h1>산만도 분석</h1>
            </div>
            <Chart />

            <div className="viewTitle">
              <h3>산만도 분석</h3>
            </div>

            <div className="info">
              <p>
                * 집중도 인덱스(Attentive Index) = 100 - (이동 중 객체 수 / 전체
                객체 수 x 100) * 이동중 객체 = 지난 1초간의 동선변화가 약
                100픽셀 이상 * 산만도 0-100 측정, 80이상 경고 및 퇴실 조치
              </p>
            </div>
            {/* <p>Current Noise Level: {noise - level - data} db</p> */}
          </div>
        </div>
        <div className="viewButton">
          <button className="button2" onClick={() => showWarning()}>
            저장하기
          </button>
        </div>
      </div>
      {warning && (
        <Popup alertMessage={alertMessage} handleClose={handleClose} />
      )}
    </div>
  );
}
