import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import About from "./pages/About/About";
import Noel from "./pages/Noel/Noel";
import Day from "./components/Day";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/day/:id" element={<Day />} />
        <Route path="/Noel" element={<Noel />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
