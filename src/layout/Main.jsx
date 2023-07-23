import { Outlet } from "react-router-dom";
import Footer from "../components/Share/Footer/Footer";
import Navbar from "../components/Share/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="md:min-h-[calc(100vh-310px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
