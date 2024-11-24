import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Day from "./pages/Day";
import Noel from "./pages/Noel";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/day/:id" element={<Day />} />
        <Route path="/Noel" element={<Noel />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
