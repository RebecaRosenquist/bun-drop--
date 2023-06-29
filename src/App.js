import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./RouteComponent/Home";
import Confirmation from "./RouteComponent/Confirmation";
import Menu from "./RouteComponent/Menu";
import Cart from "./RouteComponent/Cart";
import Payment from "./RouteComponent/Payment";
import Header from "./UIComponents/Header";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Confirmation" element={<Confirmation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
