import React from "react";


import { useNavigate } from "react-router-dom";

const Header2 = () => {
  const navigate = useNavigate();

  return (
      <header className="header">
          <div className="logo">
              <img src={logolove} alt="Логотип LoveLife" />
          </div>
          {/* Навигация */}
          <nav className="navbar">
              <a  onClick={() => navigate("/")} className="navbar__link">О компании</a>
              <a onClick={() => navigate("/")} className="navbar__link" >Главная</a>
              <a onClick={() => navigate("/catalog")} className="navbar__link">Каталог</a> 
              <a href='#sos' className="navbar__link">Написать нам</a>
              <a  href='#contact' className="navbar__link">Контакты</a>
              <a onClick={() => navigate("/")} className="navbar__link">Выйти</a>
              <a onClick={() => navigate("/")} className="navbar__link">Корзина</a>
          </nav>
      </header>
  )
}


export default Header2;