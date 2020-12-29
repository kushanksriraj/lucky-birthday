import React, { useState } from "react";
import "./styles.css";

var dobSum = 0;
var luckyNo = 0;

export default function App() {
  const [outputStr, setOutputStr] = useState("");

  function getDOB(event) {
    var dob = event.target.value;
    dob = dob.replaceAll("-", "");
    dob = Number(dob);

    var sum = 0;
    var digit = 0;

    while (dob > 0) {
      digit = dob % 10;
      sum = sum + digit;
      dob = Math.floor(dob / 10);
    }
    dobSum = sum;
  }

  function setLno(event) {
    var lucky = Number(event.target.value);
    luckyNo = lucky;
  }

  function clickEventHandler() {
    // console.log(`dobSum = ${dobSum}, luckNo = ${luckyNo}`);

    if (dobSum % luckyNo === 0) {
      setOutputStr("Your birthday is lucky! 🦄");
    } else {
      setOutputStr("Your birthday is not lucky! 😕");
    }
  }

  return (
    <div className="App">
      <header>
        <h2>Enter your date of birth: </h2>
      </header>

      <main>
        <input type="date" onChange={getDOB} />
        <h2>Enter your lucky number :</h2>
        <input type="number" onChange={setLno} className="luckyNumber" />
        <button onClick={clickEventHandler}>Do some magic</button>
        <div className="output"><h2>{outputStr}</h2></div>

        <div className="bdayImage">
          <img src="birthday.svg" alt="birthday"/>
        </div>

      </main>

      <footer>
        <div className="privacy">
          <strong>Privacy notice</strong> : We don't store your date of birth.
          All the computation is done here in the browser only.
        </div>
        <div className="social">
          <div className="footer-header"> Get in touch </div>
          <ul>
            <li>
              <a href="https://github.com/kushanksriraj" target="_blank">
                GitHub
              </a>
            </li>

            <li>
              <a href="https://twitter.com/kushanksriraj" target="_blank">
                Twitter
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/kushank-sriraj"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>

            <li>
              <a href="https://kushanksriraj.netlify.app" target="_blank">
                Portfolio
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
