import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../assets/styles/reset.css";
import "../assets/styles/global.css";
import "../assets/styles/variables.css";

function App() {
  return (
    <>
      <Header />
        <div>
          <Outlet />
        </div>
      <Footer />
    </>
  );
}

export default App;
