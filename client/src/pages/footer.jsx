import React from 'react';
import logoLove from '../img/love.svg'
import '../style/footer.css'

const Footer = ()=> {
    return (
<footer className="footer" id='contact'>
    <div className="footer__content">
        <div className="footer__logo">
            <img src={logoLove} alt="Логотип LoveLife" />
        </div>
        <div className="footer__info">
            <p>ОГРНИП: 318774600222608</p>
            <p>ИНН: 503008943503</p>
        </div>
        <div className="footer__policy">
            <button className="footer__policy-button">Политика конфиденциальности</button>
        </div>
    </div>
</footer>
    );
  }
  
  export default Footer;