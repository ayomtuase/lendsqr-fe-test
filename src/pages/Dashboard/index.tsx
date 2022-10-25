import { Outlet } from "react-router-dom";
import { useState } from "react";
import MobileNav from "../../components/MobileNav";
import TopBar from "../../components/TopBar";
import SideNav from "../../components/SideNav";

const Dashboard = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <>
      <MobileNav
        showMobileNav={showMobileNav}
        setShowMobileNav={setShowMobileNav}
      />

      <div className="dashboard">
        <TopBar showMobileNav={showMobileNav} setShowMobileNav={setShowMobileNav} />

        {/* Sidenav */}
        <SideNav />

        <div className="primary-view">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
