import React from 'react';
import './../style/header.css'
import logolove from './../img/love.svg';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
        return <p>Нет данных о пользователе. Пожалуйста, войдите.</p>;
    }
    return (
        <header className="header">
            <div className="logo">
                <img src={logolove} alt="Логотип LoveLife" />
            </div>
            {/* Навигация */}
            <nav className="navbar">
                <a onClick={() => navigate("/")} className="navbar__link">О компании</a>
                <a onClick={() => navigate("/")} className="navbar__link" >Главная</a>
                <a onClick={() => navigate("/catalog")} className="navbar__link">Каталог</a>
                <a href='#sos' className="navbar__link">Написать нам</a>
                <a href='#contact' className="navbar__link">Контакты</a>
                <a onClick={() => navigate("/login")} className="navbar__link">Войти</a>
            </nav>
        </header>
    )
}


export default Header;