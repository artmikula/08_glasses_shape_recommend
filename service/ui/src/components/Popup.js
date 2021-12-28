import React from "react";

const Popup = ({ alertMessage, handleClose }) => {
  return (
    <div className="popup-box">
      <div className="box">
        {alertMessage}
        <button className="button2" onClick={() => handleClose()}>
          OK
        </button>
      </div>
    </div>
  );
};

export default Popup;
