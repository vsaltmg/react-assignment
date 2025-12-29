
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Expenses from "./pages/Expenses";
import Weather from "./pages/Weather";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Layout/Navbar";
import './index.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
