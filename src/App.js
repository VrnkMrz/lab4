import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DecisionApp from "./jsx/page/DecisionApp";
import EvacuationApp from "./jsx/page/EvacuationApp";
import NavBar from "./jsx/Navbar"; // Assuming NavBar is at the root of the src directory

export default function App() {
  return (
    <BrowserRouter>
      <NavBar /> {/* Include the NavBar so it's visible on all routes */}
      <Routes>
        <Route path="/" element={<DecisionApp />} />
        <Route path="/evacuation" element={<EvacuationApp />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
