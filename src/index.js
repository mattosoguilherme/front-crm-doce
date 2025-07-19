import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
import GlobalStyle from "./global.style";

axios.defaults.baseURL = "https://crm-dtl.onrender.com";
axios.defaults.headers.post["Content-Type"] = "application/json";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <>
    <GlobalStyle />
    <App />
  </>

  // </React.StrictMode>
);

reportWebVitals();
