import React from "react";
import { assets } from "./../../assets/assets";
import "./AppDownload.css";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        Для лучшего опыта загрузите <br /> приложение Tomato
      </p>

      <div className="app-download-platform">
        <img src={assets.play_store} alt="Google Play Store" />
        <img src={assets.app_store} alt="Apple App Store" />
      </div>
    </div>
  );
};

export default AppDownload;
