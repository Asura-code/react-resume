import { useState } from "react";
import KinoboxPlayer from "./KinoboxPlayer/KinoboxPlayer";
import RandomAnime from "./RandomAnime";
import { Button, Modal } from "antd";
import ModalWindowInfo from "./ModalWindowInfo";
import styled from "styled-components";

export default function Bankai() {
  function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }
  let s = window.location.href;
  let redirect = s.indexOf("lol") !== -1;
  let res = s.indexOf("#");
  console.log("res: " + res);
  let result = "";
  for (let i = res + 4; i < 2000; i++) {
    if (s[i] != "#") {
      result += s[i];
    } else {
      break;
    }
  }
  console.log("lol" + result);

  const [message, setMessage] = useState(redirect ? result : "");
  const [placeholder, setPlaceholder] = useState("kinopoisk/imdb id or name:");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  function handleChangePlaceholderFocus() {
    setPlaceholder("");
  }
  function handleChangePlaceholderBlur() {
    setPlaceholder("kinopoisk/imdb id or name:");
  }

  // модалка - перенести в отдельный компонент как не будет заебно
  //   const [isModalOpen, setIsModalOpen] = useState(false);
  //   const showModal = () => {
  //     setIsModalOpen(true);
  //   };
  //   const handleOk = () => {
  //     setIsModalOpen(false);
  //   };
  //   const handleCancel = () => {
  //     setIsModalOpen(false);
  //   };

  return (
    <>
      <div className="Bankai">
        <div className="text-field">
          <label className="text-field__label">
            <strong>
              {" "}
              <p> Write kinopoisk/imdb id or name ↓</p>{" "}
            </strong>
          </label>
          <input
            onChange={handleChange}
            onFocus={handleChangePlaceholderFocus}
            onBlur={handleChangePlaceholderBlur}
            value={message}
            className="text-field__input"
            placeholder={placeholder}
            autocomplete="off"
          />{" "}
          <div style={{ display: "inline-block", paddingLeft: "50px" }}>
            <ModalWindowInfo></ModalWindowInfo>
          </div>
        </div>

        <br></br>
        {message || isMobileDevice() ? (
          <div className="border">
            <KinoboxPlayer kpId={message} />
          </div>
        ) : (
          <div className="border">
            <img src="tenor.gif" style={{ width: "845px", height: "475px" }} />
          </div>
        )}
        <br></br>
        {/* <EffectsSection></EffectsSection> */}

        {/* <RandomAnime></RandomAnime> */}

        <br></br>

        <div style={{ visibility: "hidden" }}>
          <h1>Костыль</h1>
          <h1>Костыль</h1>
          <h1>Костыль</h1>
          <h1>Костыль</h1>
          <h1>Костыль</h1>
          <h1>Костыль</h1>
          <h1>Костыль</h1>
          <h1>Костыль</h1>
        </div>
      </div>
    </>
  );
}
