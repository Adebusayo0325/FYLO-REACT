import "./style.css";
import React from "react";
import ReactDOM from "react-dom/client";

import Storage from  "./Storage.jsx";

/// import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Storage />
  </React.StrictMode>,
)
