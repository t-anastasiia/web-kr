import React, { useState } from "react";
import "./header.css";

const Header = ({ setActiveComponent }) => {
  const [Toggle, showMenu] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="header__container">
      <div className="header">
        <ul className="header__top">
          <li className="header__item">Поддержка сайтов</li>
          <li className="header__item">Контакты</li>
        </ul>
      </div>
      <div className="nav__container">
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className={Toggle ? "uil uil-times" : "uil uil-apps"}></i>
        </div>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list">
            <li
              className="nav__item"
              onClick={() => setActiveComponent("home")}
            >
              как это работает
            </li>
            <li
              className="nav__item"
              onClick={() => setActiveComponent("tarifs")}
            >
              тарифы
            </li>
            <li className="nav__item" onClick={() => setActiveComponent("faq")}>
              FAQ
            </li>
          </ul>
        </div>

        <div
          className="contact__item"
          onClick={() => setShowContact(!showContact)}
        >
          <i className="uil uil-phone"></i>
          <p className="contact__text">Связаться</p>
        </div>

        {showContact && (
          <div className="contact__dropdown">
            <div className="contact__option">
              <i className="uil uil-telegram"></i> Telegram
            </div>
            <div className="contact__option">
              <i className="uil uil-whatsapp"></i> WhatsApp
            </div>
            <div className="contact__option">
              <i className="uil uil-phone"></i> +79953720197
            </div>
            <div className="contact__option">
              <i className="uil uil-envelope"></i> Написать письмо
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
