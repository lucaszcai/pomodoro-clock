import React from "react";
import "./Clock.css";

function Clock(props) {
  let secondRatio = props.sec / 60;
  let minuteRatio = props.min / 60;
  let hourRatio = props.hour / 12;

  console.log(props.color);

  if (props.color === "blue") {
    document.documentElement.style.setProperty("--hue-color", 240);
  } else if (props.color === "green") {
    document.documentElement.style.setProperty("--hue-color", 154);
  } else if (props.color === "orange") {
    document.documentElement.style.setProperty("--hue-color", 25);
  }

  return (
    <div class="clock__container">
      <div class="clock__circle">
        <span class="clock__twelve"></span>
        <span class="clock__three"></span>
        <span class="clock__six"></span>
        <span class="clock__nine"></span>

        <div class="clock__rounder"></div>
        <div
          class="clock__hour"
          id="clock-hour"
          style={{ transform: `rotate(${hourRatio * 360}deg)` }}
        ></div>
        <div
          class="clock__minutes"
          id="clock-minutes"
          style={{
            transform: `rotate(${minuteRatio * 360}deg)`,
          }}
        ></div>
        <div
          class="clock__seconds"
          id="clock-seconds"
          style={{
            transform: `rotate(${secondRatio * 360}deg)`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default Clock;
