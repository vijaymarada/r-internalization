import React from "react";
import { useTranslation } from "react-i18next";
import { i18n } from './translations/i18n';
import { useState } from 'react'

function App() {
  const { t } = useTranslation();
  const [language, setLanguage] = useState('en');
  const [username, setUserName] = useState('');

  const usernameRef = React.createRef();

  const handleOnclick = (e) => {
    e.preventDefault();
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  }

  const clickButton = (event) => {
    event.preventDefault();
    setUserName()
  }
  return (
    <div>
      <div style={{ textAlign: language === "arab" ? "right" : "left" }}>
        <p>
          {t("welcome")}
        </p>
        <p>
          {t("date_format_one", { date: new Date() })}
        </p>
        <p>
          {t("date_format_two", { date: new Date() })}
        </p><br />
        <button value='arab' onClick={handleOnclick}>
          Arabic
        </button>
        <button value='en' onClick={handleOnclick}>
          English
        </button>
        <button value='es' onClick={handleOnclick}>
          Spanish
        </button>
        <button value='zh' onClick={handleOnclick}>
          Chinese
        </button>
        <br />
        <br />  <br />

        <label>{t("languageselectmessage")} </label>

        <select onChange={handleOnclick}>
          <option value='en'>English</option>
          <option value='es'>Spanish</option>
          <option value='zh'>Chinese</option>
          <option value='arab'>Arab</option>
          <option></option>
        </select>
        <br />
        <form>
          <label> {t("usernameMsg")}</label>
          <input type='text' name='title' ref={usernameRef}></input>
          <br />
          <button onClick={clickButton}>{t("clickMsg")}</button>
        </form>
        <br />
        {username === '' ? <div></div> : <div>{t("welcomeMsg")} {username}</div>}



      </div>
    </div>
  );
}

export default App;
