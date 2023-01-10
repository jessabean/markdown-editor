import { useEffect, useState } from "react";
import './Nav.css'
import classNames from "classnames";
import logo from '../images/logo.svg';
import sprite from '../images/sprite.svg'


function Nav({isMenuShowing, onToggleMenu}) {
  function ToggleIcon() {
    if (isMenuShowing) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="menu-toggle__icon" role="img">
          <path d="M2.101.686 23.314 21.9 21.9 23.314.687 2.1z"/>
          <path d="M.687 21.899 21.9.686 23.314 2.1 2.1 23.313z"/>
        </svg>
      )
    }

    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 18" className="menu-toggle__icon" role="img">
        <path d="M0 0h30v2H0zM0 8h30v2H0zM0 16h30v2H0z"/>
      </svg>
    )
  }
  
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
            <svg className="document__icon">
              <use href={sprite + '#document'} />
            </svg>
            <p className="document__label">Document Name</p>  
            <p className="document__name">welcome.md</p>
          </div>  
          <div className="document__controls">
            <button className="document__delete button button--icon">
              <svg className="button-icon">
                <use href={sprite + '#delete'} />
              </svg>
              <span className="button-text visually-hidden">Delete</span>
            </button>
            <button className="document__save button">
              <svg className="button-icon">
                <use href={sprite + '#save'} />
              </svg>
              <span className="button-text">Save changes</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;