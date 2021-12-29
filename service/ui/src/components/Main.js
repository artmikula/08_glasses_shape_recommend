import React, { useState } from "react";
import next_icon from "../images/next.png";
import face_shape_01 from "../images/face_shape_01.png";
import face_shape_02 from "../images/face_shape_02.png";

function Main() {
  const handleSubmission = () => {
    console.log("uploading file");
  };

  // const showResults = (arg) => {
  //   setResultData(arg);
  // };

  // const analyzeData = (arg) => {
  //   setUploaded(arg);
  // };

  const [uploaded1, setUploaded1] = useState(null);
  const [uploaded2, setUploaded2] = useState(null);
  const [resultData1, setResultData1] = useState(null);
  const [resultData2, setResultData2] = useState(null);

  return (
    <div id="mainCont2">
      <div className="mainCont3">
        <div className="left">
          <div className="innerCont">
            <div className="image"></div>
            <form id="fileForm">
              <input type="file" id="myFile" name="filename" />
              <br />
              <input type="submit" />
            </form>
          </div>
          <div className="arrow">
            <img
              src={next_icon}
              alt="next_icon"
              id="next_icon"
              onClick={() => setUploaded1(true)}
            />
            <p>화살표를 클릭하면 사진 분석이 시작됩니다</p>
          </div>
        </div>
        <div className="middle">
          <div className="innerCont">
            <div className="result">
              {uploaded1 && (
                <img
                  src={face_shape_01}
                  alt="face_shape_01"
                  className="face-images"
                  id="face_shape_01"
                />
              )}
            </div>
            <h4>얼굴 모양 유형</h4>
          </div>
          <div className="arrow">
            <img
              src={next_icon}
              alt="next_icon"
              id="next_icon"
              onClick={() => setResultData1(true)}
            />
            <p>추천 안경 분석하기</p>
          </div>
        </div>
        <div className="right">
          {uploaded1 && resultData1 && (
            <table className="table1">
              <thead>
                <tr>
                  <th>이미지</th>
                  <th>상품명</th>
                  <th>모양</th>
                  <th>타입</th>
                  <th>브랜드</th>
                  <th>색상</th>
                  <th>재질</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>
      <div className="mainCont3">
        <div className="left">
          <div className="innerCont">
            <div className="image"></div>
            <form id="fileForm">
              <input type="file" id="myFile" name="filename" />
              <br />
              <input type="submit" />
            </form>
            {/* <button onClick={handleSubmission}>Upload photo</button> */}
          </div>
          <div className="arrow">
            <img
              src={next_icon}
              alt="next_icon"
              id="next_icon"
              onClick={() => setUploaded2(true)}
            />
            <p>화살표를 클릭하면 사진 분석이 시작됩니다</p>
          </div>
        </div>
        <div className="middle">
          <div className="innerCont">
            <div className="result">
              {uploaded2 && (
                <img
                  src={face_shape_02}
                  alt="face_shape_02"
                  className="face-images"
                  id="face_shape_02"
                />
              )}
            </div>
            <h4>얼굴 모양 유형</h4>
          </div>
          <div className="arrow">
            <img
              src={next_icon}
              alt="next_icon"
              id="next_icon"
              onClick={() => setResultData2(true)}
            />
            <p>추천 안경 분석하기</p>
          </div>
        </div>
        <div className="right">
          {uploaded2 && resultData2 && (
            <table className="table1">
              <thead>
                <tr>
                  <th>이미지</th>
                  <th>상품명</th>
                  <th>모양</th>
                  <th>타입</th>
                  <th>브랜드</th>
                  <th>색상</th>
                  <th>재질</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default Main;
