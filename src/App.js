import React, { Component } from "react";
import "./Main.css";
import Search from "./component/Search";
import Info from "./component/Info";
import Spiner from "./component/Spiner";

export default class App extends Component {
  state = {
    isLoaded: false,
  };

  getWeather = () => {
    let temperature = document.querySelector(".temp");
    let img = document.querySelector("img");
    let main = document.querySelector(".main");
    let apiKey = `312f06842eb606941f7986372bbfad20`;
    this.setState({ isLoaded: true });

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${
        document.querySelector("input").value
      }&units=metric&appid=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        let a = [];
        a.push(data);

        a.map((e) => {
          temperature.innerHTML = parseInt(e.main.temp) + "&#8451";
          let weather = e.weather;

          weather.map((w) => {
            img.setAttribute(
              "src",
              "http://openweathermap.org/img/wn/" + w.icon + "@2x.png"
            );
            main.innerText = w.description;
            this.setState({ isLoaded: false });
          });
        });
      })

      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="app">
        <Search getWeather={this.getWeather} />
        {this.state.isLoaded ? <Spiner /> : null}
        <Info />
      </div>
    );
  }
}
