/* eslint-disable */
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

//  useState를 활용하여 3개의 블로그 목록을 만들기 Part 1
function App() {
  let post = "강남 고기 맛집";

  let [title, setTitle] = useState(" dev blog ");

  let [a, b] = useState([" 강  남 맛집 ", "신도림 맛집", "영등포 맛집"]);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{title}</h4>
      </div>

      <div className="list">
        <h4>{a[0]}</h4>
        <p>-</p>
      </div>

      <div className="list">
        <h4>{a[1]}</h4>
        <p>-</p>
      </div>

      <div className="list">
        <h4>{[2]}</h4>
        <p>-</p>
      </div>
    </div>
  );
}

export default App;
