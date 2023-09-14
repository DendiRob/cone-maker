import React from "react";
import './modal.css';

const Modal = ({closeModal}) => {


    return(
        <div className="modal__overlay" onClick={() =>closeModal()}>
            <div className="modal" onClick={(e) => e.stopPropagation(e)}>
            <div>
                <span>Что-то пошло не так!</span><br />
                Все поля должны быть заполненны,<br />
                значения должны быть положительные и включать в себя только цифры
            </div>
            <button onClick={() => closeModal()}>Закрыть окно</button>
        </div>
        </div>
    )
}
export default Modal