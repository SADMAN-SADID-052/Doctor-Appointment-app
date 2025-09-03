
import { Outlet } from "react-router";
import Navbar from "../Componenets/Navbar";


const AuthLayout = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>

      <div className="">
        <div>
          <Outlet></Outlet>
        </div>
      </div>

      {/* <footer>
        <Footer></Footer>
      </footer> */}
    </div>
  );
};

export default AuthLayout;
