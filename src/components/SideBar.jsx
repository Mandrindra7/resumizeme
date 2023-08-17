import { filters, lastSearch } from "../data/data.js";

import { useEffect, useState } from "react";

import "../assets/css/sidebar.scss";

import Resumizeme from "../assets/icon/Resumizeme.svg";
import template from "../assets/icon/icontemplate.svg";
import search from "../assets/icon/search.svg";
import star from "../assets/icon/star.png";
import clock from "../assets/icon/clock.svg";
import board from "../assets/icon/board.svg";
import add from "../assets/icon/add.svg";
import dividers from "../assets/icon/dividers.png";
import padlock from "../assets/icon/padlock.jpeg";
import setting from "../assets/icon/settings.svg";
import carla from "../assets/icon/img.png";

const SideBar = () => {
  const [lastSearchs, setLastSearchs] = useState([]);

  useEffect(() => {
    setLastSearchs(lastSearch);
  });

  return (
    <div className="sidebar">
      <img className="logo" src={Resumizeme} />
      <div className="content">
        <img src={template} alt="template" />
        <span>My templates</span>
      </div>
      <div className="search">
        <img src={search} alt="search" />
        <span>search</span>
      </div>
      <div className="filter">
        {filters.length &&
          filters.map((filter) => (
            <li className="item" key={filter.id}>
              <img className="star" src={star} alt="star" />
              <span>{filter.name}</span>
            </li>
          ))}
        {lastSearchs.length &&
          lastSearchs.map((lastSearch) => (
            <li className="item" key={lastSearch.id}>
              <img className="clock" src={clock} alt="clock" />
              <span>{lastSearch.name}</span>
            </li>
          ))}
      </div>
      <div className="board">
        <div className="box">
          <img src={board} alt="board" />
          <span>My boards</span>
        </div>

        <img style={{paddingRight : '16px'}} src={add} alt="add" />
      </div>
      <div className="list-board">
        {[1, 2, 3].map((item) => (
          <li className="item" key={item}>
            <img className="divider" src={dividers} alt="dividers" />
            <span>Board {item}</span>
          </li>
        ))}
        {[1, 2, 3].map((item) => (
          <li className="item" key={item}>
            <img className="divider" src={padlock} alt="padlock" />
            <span>Board agent {item}</span>
          </li>
        ))}
      </div>
      <div className="settings">
        <div className="profile">
          <img src={carla} alt="carla" />
          <span>Carla</span>
        </div>

        <img src={setting} alt="setting" />
      </div>
    </div>
  );
};

export default SideBar;
