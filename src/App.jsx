import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PlanB from "./pages/ProjectPlanB";
import Nippon from "./pages/ProjectNippon";
import Neptun from "./pages/ProjectNeptun";
import Troejborg from "./pages/ProjectTroejborg";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project_0" element={<PlanB />} />
        <Route path="/project_1" element={<Nippon />} />
        <Route path="/project_2" element={<Neptun />} />
        <Route path="/project_3" element={<Troejborg />} />
      </Routes>
    </>
  );
}

export default App;
