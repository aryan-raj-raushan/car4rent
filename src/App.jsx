import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/registeration/LoginPage";
import SignUpPage from "./pages/registeration/SignUpPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MyState } from "./context/myState";
import Fleet from "./pages/fleet/Fleet";
import ScrollToTop from "./hoc/ScrollToTop";
import FleetInfo from "./components/Fleet-Info/FleetInfo";
import { CarProvider } from "./context/CarContext";
import Sidebar from "./hoc/Sidebar";
import FlightSearch from "./pages/flight/FlightSearch";

const App = () => {
  return (
    <MyState>
      <CarProvider>
        <Navbar />
        <Sidebar>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="flight" element={<FlightSearch />} />
            <Route path="fleet" element={<Fleet />} />
            <Route path="fleet/:id" element={<FleetInfo />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignUpPage />} />
          </Routes>
        </Sidebar>
        <ToastContainer />
        <ScrollToTop />
      </CarProvider>
    </MyState>
  );
};

export default App;