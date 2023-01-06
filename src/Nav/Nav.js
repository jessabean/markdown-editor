import { useEffect, useState } from "react";
import './Nav.css'
import classNames from "classnames";
import logo from './logo.svg'

function Nav({isMenuShowing, onToggleMenu}) {
  function ToggleIcon() {
    if (isMenuShowing) {
      return (
        <i className="menu-toggle__icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M2.101.686 23.314 21.9 21.9 23.314.687 2.1z"/>
            <path d="M.687 21.899 21.9.686 23.314 2.1 2.1 23.313z"/>
          </svg>
        </i>
      )
    }

    return (
      <i className="menu-toggle__icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 18">
          <path d="M0 0h30v2H0zM0 8h30v2H0zM0 16h30v2H0z"/>
        </svg>
      </i>
    )
  }

  useEffect(() => {
    console.log(isMenuShowing);
  }, [isMenuShowing])
  
  return(
    <nav className="app-nav">
      <button className={classNames("menu-toggle", {
        "menu-toggle--open": isMenuShowing,
        })}
        onClick={() => onToggleMenu(!isMenuShowing)}
      >
        <ToggleIcon />
        <span className="menu-toggle__text visually-hidden">{ isMenuShowing ? 'Close menu' : 'Show menu' }</span>
      </button>
      <div className="app-nav__title-bar">
        <img className="app-nav__logo" src={logo} alt="Markdown" />
        <div className="app-nav__document">
          <div className="document__title">
            <i className="document__icon"></i>
            <p className="document__label">Document name</p>  
            <p className="document__name">welcome.md</p>
          </div>  
          <div className="document__controls">
            <button className="document__delete">
              <span className="button-text button-text--hidden">Delete</span>
              <i className="button-icon"></i>
            </button>
            <button className="document__save">
              <span className="button-text">Save changes</span>
              <i className="button-icon"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;