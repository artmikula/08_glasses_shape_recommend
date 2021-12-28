import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar({ user, setUser, setUserAdded, login }) {
  const navigate = useNavigate();
  const logout = () => {
    setUser({ username: null });
    setUserAdded("");
    navigate("/");
  };

  const previousView = () => {
    if (user.username) {
      navigate("/view1");
    }
  };

  return (
    <nav>
      <div id="topRight">
        <div className="hamburger" onClick={() => previousView()}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <h1>정앤정 학습장 내 산만도 측정</h1>
      </div>
      {user.username ? (
        <button className="button2" onClick={() => logout()}>
          로그 아웃
        </button>
      ) : (
        <div></div>
      )}
    </nav>
  );
}

export default Navbar;
