import React, { Component } from "react";

import "./App.css";
import Clock from "./components/Clock";
import TimeText from "./components/TimeText";
import "./switcher.scss";
import "./components/Clock.css";

class App extends React.Component {
  state = {
    sec: 0,
    min: 0,
    hour: 0,
    day: 0,
    month: 0,
    year: 0,
    color: "blue",
  };

  componentDidMount() {
    setInterval(() => {
      this.setClock();
    }, 1000);
  }

  blueSquareHandler() {
    console.log("blue square");
    this.setState({ color: "blue" });
  }
  greenSquareHandler() {
    console.log("green square");
    this.setState({ color: "green" });
  }
  orangeSquareHandler() {
    console.log("orange square");
    this.setState({ color: "orange" });
  }

  setClock = () => {
    const currentDate = new Date();

    this.setState({
      sec: currentDate.getSeconds(),
    });
    this.setState({
      min: currentDate.getMinutes(),
    });
    this.setState({
      hour: currentDate.getHours(),
    });
    this.setState({
      day: currentDate.getDate(),
    });
    this.setState({
      month: currentDate.getMonth(),
    });
    this.setState({
      year: currentDate.getFullYear(),
    });
  };

  render() {
    const { sec, min, hour, day, month, year, color } = this.state;
    return (
      <div>
        <div class="theme-options">
          <div
            className={`${this.color === "blue" ? "active" : ""}`}
            id="theme-blue"
            onClick={() => this.blueSquareHandler()}
          ></div>
          <div id="theme-green" onClick={() => this.greenSquareHandler()}></div>
          <div
            id="theme-orange"
            onClick={() => this.orangeSquareHandler()}
          ></div>
        </div>
        <Clock sec={sec} min={min} hour={hour} color={color} />
        <TimeText
          sec={sec}
          min={min}
          hour={hour}
          day={day}
          month={month}
          year={year}
        ></TimeText>
      </div>
    );
  }
}

export default App;
