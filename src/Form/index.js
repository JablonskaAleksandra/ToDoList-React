import React from "react";
import "./style.css";

const Form = () =>(
    <form className="form">
    <input className="form__input" autofocus required placeholder="Co jest do zrobienia?" />
    <button className="form__submitButton">Dodaj zadanie</button>
</form>
    );

export default Form;