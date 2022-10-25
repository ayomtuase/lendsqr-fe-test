import { ReactComponent as SearchIcon } from "../assets/search.svg";
import { ReactComponent as BellIcon } from "../assets/bell.svg";
import { ReactComponent as Avatar } from "../assets/avatar.svg";
import { ReactComponent as ChevronDownIcon } from "../assets/chevron-down.svg";
import { ReactComponent as BriefcaseIcon } from "../assets/briefcase.svg";
import { ReactComponent as ChevronDownLineIcon } from "../assets/chevron-down-line.svg";
import { ReactComponent as DashboardIcon } from "../assets/dashboard.svg";
import { ReactComponent as UsersIcon } from "../assets/users.svg";
import { ReactComponent as GuarantorIcon } from "../assets/guarantors.svg";
import { ReactComponent as LoansIcon } from "../assets/loans.svg";
import { ReactComponent as DecisionModelIcon } from "../assets/decision-model.svg";
import { ReactComponent as SavingsIcon } from "../assets/savings.svg";
import { ReactComponent as LoanRequestsIcon } from "../assets/loan-request.svg";
import { ReactComponent as WhitelistIcon } from "../assets/whitelist.svg";
import { ReactComponent as KarmaIcon } from "../assets/karma.svg";
import { ReactComponent as OrganizationIcon } from "../assets/organization.svg";
import { ReactComponent as LoanProductsIcon } from "../assets/loan-products.svg";
import { ReactComponent as SavingsProductsIcon } from "../assets/savings-products.svg";
import { ReactComponent as FeesAndChargesIcon } from "../assets/fees-and-charges.svg";
import { ReactComponent as TransactionsIcon } from "../assets/transactions.svg";
import { ReactComponent as ServicesIcon } from "../assets/services.svg";
import { ReactComponent as ServiceAccountIcon } from "../assets/service-account.svg";
import { ReactComponent as SettlementsIcon } from "../assets/settlements.svg";
import { ReactComponent as ReportsIcon } from "../assets/reports.svg";
import { ReactComponent as PreferencesIcon } from "../assets/preferences.svg";
import { ReactComponent as FeesAndPricingIcon } from "../assets/fees-and-pricing.svg";
import { ReactComponent as AuditLogsIcon } from "../assets/audit-logs.svg";
import { ReactComponent as SystemsMessagesIcon } from "../assets/systems-messages.svg";
import { ReactComponent as LogOutIcon } from "../assets/log-out.svg";
import closeIcon from "../assets/close.svg";
import { useNavigate } from "react-router-dom";

interface MobileNavProps {
  showMobileNav: boolean;
  setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNav = ({ showMobileNav, setShowMobileNav }: MobileNavProps) => {
  const navigate = useNavigate();
  return (
    <div
      className="mobile-nav"
      style={{ transform: showMobileNav ? "none" : "translateX(315px)"}}
    >
      <img
        src={closeIcon}
        alt="Close"
        className="mobile-nav__close-icon"
        onClick={() => setShowMobileNav(false)}
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
        <div
          className="nav-item selected"
          style={{ marginTop: "15px", cursor: "pointer" }}
          onClick={() => navigate("/dashboard")}
        >
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
            title: "Loan Requests",
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
          <div
            key={navItem.title}
            className="nav-item"
            style={{ marginTop: "15px" }}
          >
            {navItem.icon}
            <span>{navItem.title}</span>
          </div>
        ))}
        <p className="nav-group-title">BUSINESSES</p>
        {[
          {
            icon: <OrganizationIcon />,
            title: "Organization",
          },
          {
            icon: <LoanProductsIcon />,
            title: "Loan Products",
          },
          {
            icon: <SavingsProductsIcon />,
            title: "Savings Products",
          },
          {
            icon: <SavingsIcon />,
            title: "Savings",
          },
          {
            icon: <FeesAndChargesIcon />,
            title: "Fees and Charges",
          },
          {
            icon: <TransactionsIcon />,
            title: "Transactions",
          },

          {
            icon: <ServicesIcon />,
            title: "Services",
          },
          {
            icon: <ServiceAccountIcon />,
            title: "Service Account",
          },
          {
            icon: <SettlementsIcon />,
            title: "Settlements",
          },
          {
            icon: <ReportsIcon />,
            title: "Reports",
          },
        ].map((navItem) => (
          <div
            key={navItem.title}
            className="nav-item"
            style={{ marginTop: "15px" }}
          >
            {navItem.icon}
            <span>{navItem.title}</span>
          </div>
        ))}

        <p className="nav-group-title">SETTINGS</p>
        {[
          {
            icon: <PreferencesIcon />,
            title: "Preferences",
          },
          {
            icon: <FeesAndPricingIcon />,
            title: "Fees and Pricing",
          },
          {
            icon: <AuditLogsIcon />,
            title: "Audit Logs",
          },

          {
            icon: <SystemsMessagesIcon />,
            title: "Systems Messages",
          },
          {
            icon: <LogOutIcon />,
            title: "Log Out",
          },
        ].map((navItem) => (
          <div
            key={navItem.title}
            className="nav-item"
            style={{ marginTop: "15px" }}
          >
            {navItem.icon}
            <span>{navItem.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
