import { Outlet } from "react-router-dom";
import Topbar from "../components/shared/Topbar";


const RootLayout = () => {
  return (
    <div className="">
      <Topbar />
      {/* <LeftSidebar /> */}

      <section className="">
        <Outlet />
      </section>

      {/* <Bottombar /> */}
    </div>
  );
};

export default RootLayout;
