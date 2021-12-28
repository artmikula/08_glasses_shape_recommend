import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import View1 from "./components/View1";
import View2 from "./components/View2";
import Error from "./components/Error";

function App() {
  const [error, setError] = useState(null);
  const [user, setUser] = useState({ username: null });
  const [resultData, setResultData] = useState(null);
  const [userAdded, setUserAdded] = useState(null);
  const login = false;

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar
          user={user}
          setUser={setUser}
          setUserAdded={setUserAdded}
          login={login}
        />
        <div className="mainCont">
          <Routes>
            <Route
              path="/"
              exact
              element={
                <Login
                  error={error}
                  setError={setError}
                  setUser={setUser}
                  userAdded={userAdded}
                  setUserAdded={setUserAdded}
                />
              }
            ></Route>
            <Route
              path="/signup"
              element={
                <Signup
                  error={error}
                  setError={setError}
                  userAdded={userAdded}
                  setUserAdded={setUserAdded}
                  setResultData={setResultData}
                />
              }
            ></Route>
            <Route path="/view1" element={<View1 />}></Route>
            <Route path="/view2" element={<View2 />}></Route>
            <Route path="/error" element={<Error />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
