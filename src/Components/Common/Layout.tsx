import { Outlet } from "react-router-dom";
import Footer from "../Static/Footer";
import Headers from "../Static/Headers";

const Layout = () => {
  return (
    <div>
      <Headers />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
