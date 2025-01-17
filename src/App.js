import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cadastro from "./pages/cadastro";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
