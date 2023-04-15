import React, { useState } from "react";

import "./FortuneForm.css";
import { FORTUNE_LIST } from "./Fortune_list";

const FortuneForm = () => {
  // const [newFortune, setNewFortune] = useState("");

  // const submitHandler = (event) => {
  //   event.preventDefault();

  //   FORTUNE_LIST.push(newFortune);
  // };

  // const newFortuneHandler = (event) => {
  //   setNewFortune(event.target.value);
  // };

  return (
    <div className="form-container">
      <form className="fortune-form">
        <input
          className="fortune-form-input"
          type="text"
          placeholder="Determine someone's fortune"
          // onChange={newFortuneHandler}
        />
        <button className="fortune-form-submit" type="submit">
          <span>Send</span>
          <div className="line"></div>
        </button>
      </form>
    </div>
  );
};

export default FortuneForm;
