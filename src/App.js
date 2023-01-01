import { Routes, Route } from "react-router-dom";
import LayoutComponent from "./layouts/Layout";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<LayoutComponent />} />
    </Routes>
  );
}

export default App;
