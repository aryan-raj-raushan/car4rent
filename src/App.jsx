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
import FlightInfo from "./pages/flightInfo/FlightInfo";
import store from "./redux/store";
import { Provider } from "react-redux";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Provider store={store}>
      <MyState>
        <CarProvider>
          <Navbar />
          <Sidebar>
            <Routes>
              <Route index path="/" element={<Home />} />
              <Route path="flight" element={<FlightSearch />} />
              <Route path="flightInfo/*" element={<FlightInfo />} />
              <Route path="fleet" element={<Fleet />} />
              <Route path="fleet/:id" element={<FleetInfo />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="signup" element={<SignUpPage />} />
            </Routes>
            <Footer />
          </Sidebar>
          <ToastContainer />
          <ScrollToTop />
        </CarProvider>
      </MyState>
    </Provider>
  );
};

export default App;