import FirstPage from "./components/FirstPage";
import AboutUs from "./components/AboutUs";
import ContactMe from "./components/ContactMe";
import Store from "./components/Store";
import Prueba from "./components/Prueba";
import LoginPage from "./components/LoginPage";
import ShoppingCard from "./components/store/ShoppingCard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/store" element={<Store />} />
        <Route path="/prueba" element={<Prueba />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/contactMe" element={<ContactMe />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/ShoppingCard" element={<ShoppingCard />} />
      </Routes>
    </Router>
  );
}

export default App;
