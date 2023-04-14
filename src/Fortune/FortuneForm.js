import React, { useState } from "react";

import "./FortuneForm.css";

const FortuneForm = () => {
  return (
    <div className="form-container">
      <form className="fortune-form">
        <input
          className="fortune-form-input"
          type="text"
          placeholder="Determine someone's fortune"
        />
        <button className="fortune-form-submit" type="submit">
          Alakazam
        </button>
      </form>
    </div>
  );
};

export default FortuneForm;
