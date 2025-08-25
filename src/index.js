import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
import GlobalStyle from "./global.style";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

<<<<<<< HEAD
axios.defaults.baseURL = "https://candymanager.onrender.com";
=======
axios.defaults.baseURL = "https://crm-doce.onrender.com";
>>>>>>> 09a64cffe044837d85c71b128c64295de68b70d6
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
