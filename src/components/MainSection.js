import React, { useState, useEffect} from "react";

import dollarIcon from "../assets/images/icon-dollar.svg";
import personIcon from "../assets/images/icon-person.svg";
import Logo from "../assets/images/logo.svg"

import "./MainSection.scss";
const MainSection = () => {
  const tips = ["5%", "10%", "15%", "20%", "50%"];

  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState();
  const [tipPerPerson, setTipPerPerson] = useState();
  const [totalAmountPerPerson, setTotalAmountPerPerson] = useState();
  const [totalTip, setTotalTip] = useState();
  let [customTip, setCustomTip] = useState();


 
  const tipHandler = (tip) => {

  
    const modifiedTip = parseFloat(tip) / 100;
    setTip(modifiedTip);
  };

  const resetHandler = () => {
    setBill(0);
    setTip(0);
    setNumberOfPeople(0);
    setTipPerPerson(0);
    setCustomTip(0);
  };

  const calcTip = () => {
    if (customTip) {
      customTip = customTip / 100;
      let a = (bill * customTip).toFixed(2);

      setTotalTip(a);
    } else {
      setTotalTip((bill * tip).toFixed(2));
    }

    const totalBill = parseFloat(bill) + parseFloat(totalTip);

    setTipPerPerson((totalTip / numberOfPeople).toFixed(2));
    setTotalAmountPerPerson((totalBill / numberOfPeople).toFixed(2));
  };

  useEffect(() => {
    calcTip();
  }, [numberOfPeople, bill, customTip, tip, totalAmountPerPerson, totalTip]);

  return (
    <main className="main">
        <img className="main__logo" src={Logo} alt={Logo}></img>

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
              {tips.map((tip, index) => (
                <button
                  className="select-tip--unmodified"
                  onClick={() => tipHandler(tip)}
                >
                  {tip}
                </button>
              ))}
              <input
                type="number"
                className="select-tip--custom"
                value={customTip}
                onChange={(e) => setCustomTip(e.target.value)}
                placeholder="Custom"
              ></input>
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
          <div>
            <div className="container__right-section-content">
              <small className="container__right-section-header">
                Tip Amount <br /> <span>/ person</span>
              </small>
              <span className="container__right-section-number">
                Rs.{isNaN(tipPerPerson) ? 0 : tipPerPerson}
              </span>
            </div>
            <div className="container__right-section-content">
              <small className="container__right-section-header">
                Total <br /> <span>/ person</span>
              </small>
              <span className="container__right-section-number">
                Rs.{isNaN(totalAmountPerPerson) ? 0 : totalAmountPerPerson}
              </span>
            </div>
          </div>
          <button
            className="container__right-section-reset"
            onClick={resetHandler}
          >
            Reset
          </button>
        </div>
      </div>
    </main>
  );
};

export default MainSection;
