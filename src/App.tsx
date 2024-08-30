import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import HeaderBar from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
