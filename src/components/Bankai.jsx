import React, { useState, useEffect } from "react";
import KinoboxPlayer from "./KinoboxPlayer/KinoboxPlayer";
import RandomAnime from "./RandomAnime";
import { Button, Modal } from "antd";
import ModalWindowInfo from "./ModalWindowInfo";
import styled from "styled-components";
import CardSection from "./CardSection";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";

export default function Bankai() {
  function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  const DivStyle = styled.div`
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: monospace;
    }

    body {
      background: #0d1b2a;
      overflow: hidden;
      display: flex;
      height: 100vh;
      align-items: center;
    }

    h1 {
      color: rgb(255, 255, 255);
      font-size: 3rem;
      width: 20ch;
      text-wrap: nowrap;
      overflow: hidden;
      animation: typing 2s steps(20);
    }

    @keyframes typing {
      from {
        width: 0ch;
      }
    }
  `;

  return (
    <>
      <section className="parallax-container">
        <DivStyle>
          <h1>Bankai</h1>
        </DivStyle>
        <ScrollAnimation animateIn="animate__animated animate__bounce">
          <p style={{ maxWidth: "52ch" }}>
            Browser extension for free movie viewing. You can see examples of
            how the extension works below{" "}
            <a
              target="_blank"
              href="https://chromewebstore.google.com/detail/bglaaddmckbbjbnfmcihokmpheamiakc?utm_source=item-share-cb"
            >
              and download it on chrome store.
            </a>
          </p>
        </ScrollAnimation>
      </section>

      <CardSection
        active={"reveal"}
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
        bgLink="https://2ch.hk/wp/src/77372/16660287613830.jpg"
      ></CardSection>

      <CardSection
        active={"reveal"}
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
        bgLink="https://avatars.mds.yandex.net/i?id=9225a2d5e0686d98886e808b80c982de_l-10465270-images-thumbs&n=13"
      ></CardSection>

      <CardSection
        active={"reveal"}
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
        bgLink="https://i.pinimg.com/originals/b0/3a/04/b03a04bdd98012e87cdb5a9673da0653.jpg"
      ></CardSection>
    </>
  );
}
