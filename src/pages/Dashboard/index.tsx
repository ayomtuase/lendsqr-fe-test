import { ReactComponent as Logo } from "../../assets/lendsqr-logo.svg";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import { ReactComponent as BellIcon } from "../../assets/bell.svg";
import { ReactComponent as Avatar } from "../../assets/avatar.svg";
import { ReactComponent as ChevronDownIcon } from "../../assets/chevron-down.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import { ReactComponent as BriefcaseIcon } from "../../assets/briefcase.svg";
import { ReactComponent as ChevronDownLineIcon } from "../../assets/chevron-down-line.svg";
import { ReactComponent as DashboardIcon } from "../../assets/dashboard.svg";
import { ReactComponent as UsersIcon } from "../../assets/users.svg";
import { ReactComponent as GuarantorIcon } from "../../assets/guarantors.svg";
import { ReactComponent as LoansIcon } from "../../assets/loans.svg";
import { ReactComponent as DecisionModelIcon } from "../../assets/decision-model.svg";
import { ReactComponent as SavingsIcon } from "../../assets/savings.svg";
import { ReactComponent as LoanRequestsIcon } from "../../assets/loan-request.svg";
import { ReactComponent as WhitelistIcon } from "../../assets/whitelist.svg";
import { ReactComponent as KarmaIcon } from "../../assets/karma.svg";

import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      {/* TopNav */}
      <div className="top-nav">
        <div className="top-nav__container">
          <Logo
            height="30px"
            width="144px"
            className="top-nav__container__logo"
          />
          <div className="top-nav__container__search">
            <input type="text" placeholder="Search for anything" />
            <span className="top-nav__container__search__icon">
              <SearchIcon />
            </span>
          </div>

          <div className="top-nav__container__actions">
            <span className="top-nav__container__actions__docs-link">Docs</span>
            <BellIcon className="bell" />
            <Avatar />
            <span>Adedeji</span>
            <ChevronDownIcon />
          </div>
          <MenuIcon className="top-nav__container__menu-icon" />
        </div>
      </div>

      {/* MobileNav */}
      <div></div>

      <div className="dashboard">
        {/* Sidenav */}
        <div className="side-nav">
          <div className="nav-item highlight">
            <BriefcaseIcon />
            <span> Switch Organization </span>
            <ChevronDownLineIcon />
          </div>

          <div className="nav-item" style={{ marginTop: "15px" }}>
            <DashboardIcon />
            <span> Dashboard</span>
          </div>

          <p className="nav-group-title">CUSTOMERS</p>
          <div className="nav-item selected" style={{ marginTop: "15px" }}>
            <UsersIcon />
            <span> Users</span>
          </div>
          {[
            {
              icon: <GuarantorIcon />,
              title: "Guarantors",
            },
            {
              icon: <LoansIcon />,
              title: "Loans",
            },
            {
              icon: <DecisionModelIcon />,
              title: "Decision Models",
            },
            {
              icon: <SavingsIcon />,
              title: "Savings",
            },
            {
              icon: <LoanRequestsIcon />,
              title: "LoanRequests",
            },
            {
              icon: <WhitelistIcon />,
              title: "Whitelist",
            },
            {
              icon: <KarmaIcon />,
              title: "Karma",
            },
          ].map((navItem) => (
            <div key={navItem.title} className="nav-item" style={{ marginTop: "15px" }}>
              {navItem.icon}
              <span>{navItem.title}</span>
            </div>
          ))}
        </div>

        <div className="primary-view">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
