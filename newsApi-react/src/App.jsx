import "./App.scss";
import Home from "./components/Home";
import Form from "./components/Form";
import Lista from "./components/Lista";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<Form />} />
        <Route path='/list' element={<Lista />} />
      </Routes>
    </Router>
  );
}

export default App;
