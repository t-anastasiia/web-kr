import React from "react";
import "./home.css";
import options from "../../json/options.json";
import Video from "./VideoComponent";

const Home = () => {
  return (
    <div className="page">
      <div className="home__title">
        <h1>Поддержка вашего сайта 24/7</h1>
        <div className="accent__underline"></div>
      </div>

      <p className="subtitle">
        Предлагаем услуги по удаленной поддержке вашего сайта командой
        квалифицированных специалистов на постоянной основе. Вы просто ставите
        задачу — мы делаем все остальное.
      </p>
      <p className="subtitle">
        Работаем с частными и государственными компаниями.
      </p>

      <div className="content__container">
        <Video />

        <div className="options__container">
          <h2>Что выходит в поддержку сайта:</h2>
          <ul className="options">
            {options.map((item) => (
              <li key={item.number} className="option__item">
                <span className="option__number">{item.number}</span>
                <span className="option__title">{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
