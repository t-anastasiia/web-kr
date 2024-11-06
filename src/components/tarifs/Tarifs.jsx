import React from "react";
import cmsOptions from "../../json/cms.json";
import "./tarifs.css";

const Tarifs = () => {
  return (
    <div className="page">
      <h1 className="tarifs__title">Поддерживаемые CMS</h1>
      <p className="subtitle">
        Ниже приведены платформы управления (CMS), с которыми работает наша
        веб-студия.
      </p>
      <p className="subtitle">
        Пожалуйста, выберите CMS, под управлением которой работает ваш сайт.
      </p>

      <ul className="items_container">
        {cmsOptions.map((item) => (
          <li key={item.name} className="item">
            <img src={item.logo} alt={item.name} className="item__img" />
            <p>Включены работы:</p>
            <div className="item__content">
              <ul className="item__description">
                {item.includedWorks.map((work, index) => (
                  <li key={index} className="item__work">
                    <span className="checkmark">✔</span> {work}
                  </li>
                ))}
              </ul>
              <button className="button">Оставить заявку</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tarifs;
