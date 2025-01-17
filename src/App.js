import { Route, Routes } from "react-router-dom";
import Cadatro from "./pages/cadastro";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/cadastro" element={<Cadatro />} />
      </Routes>
    </>
  );
};

export default App;
