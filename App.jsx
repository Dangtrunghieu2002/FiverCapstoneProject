import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useRoutesCustom from "./src/hooks/useRoutesCustom.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const NotificationContext = React.createContext();

function App() {
  const routes = useRoutesCustom();

  return (
    <>
      <NotificationContext.Provider value={{}}>
        <ToastContainer />
        <Router>
          <Routes>
            {routes} {/* Use Routes only inside Router */}
          </Routes>
        </Router>
      </NotificationContext.Provider>
    </>
  );
}

export default App;
