import { useState, useEffect } from "react";
import "./Form.css";

function Form({ title, buttonText, onTransferData }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [formValid, setFormValid] = useState(false);

  const handleChangeName = (e) => {
    setName(e.target.value);
    if (!e.target.value) {
      setNameError("Поле не может быть пустым");
    } else {
      setNameError("");
      setName(e.target.value);
    }
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!e.target.value) {
      setEmailError("Поле не может быть пустым");
    } else if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Введите корректный e-mail");
    } else {
      setEmailError("");
      setEmail(e.target.value);
    }
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    if (!e.target.value) {
      setPasswordError("Поле не может быть пустым");
    } else if (e.target.value.length < 4) {
      setPasswordError("Пароль не должен быть менее 4 символов");
    } else {
      setPasswordError("");
      setPassword(e.target.value);
    }
  };

  const handleChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    if (!e.target.value) {
      setConfirmPasswordError("Поле не может быть пустым");
    } else if (e.target.value.length < 4) {
      setConfirmPasswordError("Пароль не должен быть менее 4 символов");
    } else if (e.target.value !== password) {
      setConfirmPasswordError("Пароли не совпадают");
    } else {
      setConfirmPasswordError("");
      setConfirmPassword(e.target.value);
    }
  };

  const handleChangeVisibility = (inputPass) => {
    if (inputPass.getAttribute("type") === "password") {
      inputPass.setAttribute("type", "text");
    } else {
      inputPass.setAttribute("type", "password");
    }
  };

  const handleChangeVisibilityPassword = (e) => {
    let inputPass = document.getElementById("password__input");
    handleChangeVisibility(inputPass);
  };

  const handleChangeVisibilityConfirmPassword = (e) => {
    let inputPass = document.getElementById("confirmPassword__input");
    handleChangeVisibility(inputPass);
  };

  useEffect(() => {
    if (nameError || emailError || passwordError || confirmPasswordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, emailError, passwordError, confirmPasswordError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onTransferData({ email, password });
  };

  return (
    <div className="form">
      <form className="form__content" name="signup" onSubmit={handleSubmit}>
        <h2 className="form__title">{title}</h2>
        <fieldset className="form__fields">
          <div className="form__field">
            <label className="form__label">Имя</label>
            <input
              id="name__input"
              name="name"
              type="text"
              placeholder="Имя пользователя"
              className={`form__input ${nameError ? "form__input-error" : ""}`}
              onChange={handleChangeName}
              value={name}
              required
            />
            {nameError && <span className="form__error">{nameError}</span>}
          </div>
          <div className="form__field">
            <label className="form__label">Электронная почта</label>
            <input
              id="email__input"
              name="email"
              type="email"
              placeholder="Email"
              className={`form__input ${emailError ? "form__input-error" : ""}`}
              onChange={handleChangeEmail}
              value={email}
              required
            />
            {emailError && <span className="form__error">{emailError}</span>}
          </div>
          <div className="form__field">
            <label className="form__label">Пароль</label>
            <input
              id="password__input"
              type="password"
              name="password"
              placeholder="Пароль"
              className={`form__input ${
                passwordError ? "form__input-error" : ""
              }`}
              onChange={handleChangePassword}
              minLength={4}
              maxLength={20}
              value={password}
              required
            />
            <button
              type="button"
              className="form__password_hide"
              onClick={handleChangeVisibilityPassword}
            ></button>
            {passwordError && (
              <span className="form__error">{passwordError}</span>
            )}
          </div>
          <div className="form__field">
            <label className="form__label">Подтвердите пароль</label>
            <input
              id="confirmPassword__input"
              type="password"
              name="confirmPassword"
              placeholder="Повторите пароль"
              className={`form__input ${
                confirmPasswordError ? "form__input-error" : ""
              }`}
              onChange={handleChangeConfirmPassword}
              minLength={4}
              maxLength={20}
              value={confirmPassword}
              required
            />
            <button
              type="button"
              className="form__password_hide"
              onClick={handleChangeVisibilityConfirmPassword}
            ></button>
            {confirmPasswordError && (
              <span className="form__error">{confirmPasswordError}</span>
            )}
          </div>
        </fieldset>
        <button
          type="submit"
          className={`form__btn-submit ${
            formValid ? "form__btn-submit_active" : "form__btn-submit_disabled "
          }`}
          disabled={!formValid}
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
}

export default Form;
