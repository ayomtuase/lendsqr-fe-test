import React from "react";
import { ReactComponent as Logo } from "../assets/lendsqr-logo.svg";
import { ReactComponent as SearchIcon } from "../assets/search.svg";
import { ReactComponent as BellIcon } from "../assets/bell.svg";
import avatar from "../assets/avatar.svg";
import { ReactComponent as ChevronDownIcon } from "../assets/chevron-down.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";

const TopBar = ({
  setShowMobileNav,
  showMobileNav,
}: {
  showMobileNav: boolean;
  setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
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
          <img
            src={avatar}
            style={{ height: "48px", width: "48px", borderRadius: "50%" }}
            alt=""
          />
          <span>Adedeji</span>
          <ChevronDownIcon />
        </div>
        <MenuIcon
          className="top-nav__container__menu-icon"
          onClick={() => setShowMobileNav(true)}
        />
        <div
          className="mobile-nav-shadow"
          onClick={() => setShowMobileNav(false)}
          style={{ display: showMobileNav ? "block" : "none" }}
        ></div>
      </div>
    </div>
  );
};

export default TopBar;
