import "./Header.scss";
import usericon from "../../assets/icons/person.svg";
import search from "../../assets/icons/search.svg";
import globe from "../../assets/icons/globe.svg";
import down from "../../assets/icons/down.svg";
import right from "../../assets/icons/right.svg";
import hamburger from "../../assets/icons/hamburger.svg";
import aclogo from "../../assets/images/aclogo.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="flex flex--left">
        <img
          className="header__image header__image--menu"
          src={hamburger}
          alt="menu"
        />
        <img className="" src={aclogo} alt="air canada logo" />
      </div>
      <div></div>
      <div className="header__container">
        <div className="flex flex--left">
          <div className="flex">
            <span className="header__span1 header__right">Search</span>

            <img className="header__image" src={search} alt="user" />
          </div>
          <div className="flex">
            <span className="header__span1">Accessibility</span>
            <img className="header__image" src={right} alt="more" />
          </div>
          <div className="flex">
            <img className="header__image--1" src={globe} alt="globe" />

            <span className="header__span1">English</span>
            <img className="header__image" src={down} alt="more" />
          </div>
        </div>
        <div className="flex border-header">
          <img className="header__image" src={usericon} alt="user" />
          <span className="header__span2">Michael</span>
          <span className="header__span2">1 008 613 pts</span>
        </div>
      </div>
    </header>
  );
}
