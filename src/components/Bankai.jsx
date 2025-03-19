import { useState } from "react";
import KinoboxPlayer from "./KinoboxPlayer/KinoboxPlayer";
import RandomAnime from "./RandomAnime";
import { Button, Modal } from "antd";
import ModalWindowInfo from "./ModalWindowInfo";
import styled from "styled-components";
import React from "react";
import CardSection from "./CardSection";

export default function Bankai() {
  function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  // let s = window.location.href;
  // let redirect = s.indexOf("lol") !== -1;
  // let res = s.indexOf("#");
  // console.log("res: " + res);
  // let result = "";
  // for (let i = res + 4; i < 2000; i++) {
  //   if (s[i] != "#") {
  //     result += s[i];
  //   } else {
  //     break;
  //   }
  // }
  // console.log("lol" + result);

  // const [message, setMessage] = useState(redirect ? result : "");
  // const [placeholder, setPlaceholder] = useState("kinopoisk/imdb id or name:");

  // const handleChange = (event) => {
  //   setMessage(event.target.value);
  // };

  // function handleChangePlaceholderFocus() {
  //   setPlaceholder("");
  // }
  // function handleChangePlaceholderBlur() {
  //   setPlaceholder("kinopoisk/imdb id or name:");
  // }

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
      {/* <div className="Bankai">
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
        <br></br> */}
      {/* <EffectsSection></EffectsSection> */}

      {/* <RandomAnime></RandomAnime> */}
      {/* 
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
      </div> */}

      <section className="parallax-container">
        <h1>Bankai</h1>
        <p>
          Browser extension for free movie viewing. You can see examples of how
          the extension works below
          <a
            target="_blank"
            href="https://chromewebstore.google.com/detail/bglaaddmckbbjbnfmcihokmpheamiakc?utm_source=item-share-cb"
          >
            and download it on chrome store.
          </a>
        </p>
      </section>

      <CardSection
        bufferImg="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Kinopoisk_colored_logo_with_black_background_%282021-present%29.svg/1200px-Kinopoisk_colored_logo_with_black_background_%282021-present%29.svg.png"
        imgLink="https://raw.githubusercontent.com/Asura-code/react-resume/refs/heads/main/public/bankai_kinopoisk.png"
        titleText="The extension works with kinopoisk"
        descriptionText={
          <a
            href="https://chromewebstore.google.com/detail/bglaaddmckbbjbnfmcihokmpheamiakc?utm_source=item-share-cb"
            target="_blank"
          >
            Bankai
          </a>
        }
        bgLink="https://wallpapers.com/images/hd/white-pc-lu0qo2pvklxn65ts.jpg"
      ></CardSection>

      <CardSection
        bufferImg="https://i0.wp.com/jcatalan55.es/wp-content/uploads/2015/10/imdb-baner-scaled.jpeg?fit=2560%2C722&ssl=1"
        imgLink="https://github.com/Asura-code/react-resume/blob/main/public/bankai_imdb.png?raw=true"
        titleText="The extension works with imdb"
        descriptionText={
          <a
            href="https://chromewebstore.google.com/detail/bglaaddmckbbjbnfmcihokmpheamiakc?utm_source=item-share-cb"
            target="_blank"
          >
            Bankai
          </a>
        }
        bgLink="https://get.wallhere.com/photo/drawing-white-monochrome-minimalism-lightbulb-text-logo-graphic-design-circle-brand-shape-line-number-screenshot-computer-wallpaper-font-211291.jpg"
      ></CardSection>

      <CardSection
        bufferImg="https://sun1-26.userapi.com/impf/QENMKNdQT5-2iIbgJcfoezd15PfYqqrb0enXUw/wxEEwH21IXU.jpg?size=1920x768&quality=95&crop=132,0,1325,529&sign=d79b3bae6dc45d6a7fe2c051e015d44d&type=cover_group"
        imgLink="https://github.com/Asura-code/react-resume/blob/main/public/bankai_shikimori.png?raw=true"
        titleText="The extension works with shikimori"
        descriptionText={
          <a
            href="https://chromewebstore.google.com/detail/bglaaddmckbbjbnfmcihokmpheamiakc?utm_source=item-share-cb"
            target="_blank"
          >
            Bankai
          </a>
        }
        bgLink="https://get.wallhere.com/photo/white-black-monochrome-logo-circle-Ubuntu-gray-fog-hand-shape-line-darkness-os-wing-screenshot-pc-atmospheric-phenomenon-computer-wallpaper-atmosphere-of-earth-black-and-white-monochrome-photography-705854.jpg"
      ></CardSection>
    </>
  );
}
