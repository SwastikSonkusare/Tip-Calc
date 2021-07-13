import React, { useState } from "react";

import dollarIcon from "../assets/images/icon-dollar.svg";
import personIcon from "../assets/images/icon-person.svg";

import "./MainSection.scss";
const MainSection = () => {
  const tips = ["5%", "10%", "15%", "20%", "50%"];

  const [bill, setBill] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(0);

  return (
    <main>
      <header>
        Spli <br /> tter
      </header>

      <div className="container">
        <div className="container__left-section">
          <div className="bill">
            <h4 className="bill__header">Bill</h4>
            <input
              className="bill__input"
              type="number"
              value={bill}
              onChange={(e) => setBill(e.target.value)}
            ></input>
            <img
              className="container__icon"
              src={dollarIcon}
              alt={dollarIcon}
            ></img>
          </div>

          <div className="select-tip">
            <h4 className="select-tip__header">Select Tip %</h4>
            <div className="select-tip-content">
              {tips.map((tip) => (
                <button className="select-tip--unmodified">{tip}</button>
              ))}
              <button className="select-tip--custom">Custom</button>
            </div>
          </div>

          <div className="number-of-people">
            <h4 className="number-of-people__header">Number of People</h4>
            <input
              className="number-of-people__input"
              value={numberOfPeople}
              onChange={(e) => setNumberOfPeople(e.target.value)}
              type="number"
            ></input>
            <img
              className="container__icon"
              src={personIcon}
              alt={personIcon}
            ></img>
          </div>
        </div>

        <div className="container__right-section">
          <div className="container__right-section-content">
            <small className="container__right-section-header">
              Tip Amount <br /> / person
            </small>
            <span className="container__right-section-number">Rs. </span>
          </div>
          <div className="container__right-section-content">
            <small className="container__right-section-header">
              Tip Amount <br /> / person
            </small>
            <span className="container__right-section-number">Rs. </span>
          </div>

          <button className="container__right-section-reset">Reset</button>
        </div>
      </div>
    </main>
  );
};

export default MainSection;
