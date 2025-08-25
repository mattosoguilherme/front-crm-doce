import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
import GlobalStyle from "./global.style";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

axios.defaults.baseURL = "https://candymanager.onrender.com";
axios.defaults.headers.post["Content-Type"] = "application/json";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <>
    <ToastContainer position="top-right" autoClose={5000} />
    <GlobalStyle />
    <App />
  </>

  // </React.StrictMode>
);

reportWebVitals();
