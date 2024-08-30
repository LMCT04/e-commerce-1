import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Landing, Home } from "./views";

function App() {
  const location = useLocation();

  const showHeader = location.pathname === "/";

  return (
    <div className="App">
      <Header>{showHeader ? <Header.Dumb /> : <Header.Smart />}</Header>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
