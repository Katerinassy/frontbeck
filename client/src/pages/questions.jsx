import React from 'react';
import '../style/questions.css'
import card7 from '../img/card7.svg'
const Question = () => {
    return (
      <div className="questions">
        
        <div className="question-block" id='sos' >
          <div className="question-block__image">
            <img src={card7} alt="Изображение" />
          </div>
          <div className="question-block__form">
            <h2 className="question-block__title">Хотите задать вопрос?</h2>
            <p className="question-block__subtitle">Напишите нам</p>
            <form action="#" method="POST">
              <div className="form-group">
                <input type="text" id="name" name="name" placeholder="Введите имя" required />
              </div>
              <div className="form-group">
                <input type="email" id="email" name="email" placeholder="Введите почту" required />
              </div>
              <button type="submit" className="submit-button">Написать</button>
            </form>
          </div>
        </div>
        
      </div>
    );
  }
  
  export default Question;