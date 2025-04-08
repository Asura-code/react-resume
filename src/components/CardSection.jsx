import { Card } from "antd";
const { Meta } = Card;
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";

export default function CardSection({
  imgLink,
  titleText,
  descriptionText,
  bgLink,
  bufferImg,
  active,
}) {
  function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  const DivStyle = styled.div`
    .buffer {
      min-height: ${isMobileDevice() ? "5rem" : "15rem"};
      background-image: url(${bufferImg});
      background-position: center;
      background-size: cover;
    }

    .parallax-container2 {
      padding: 6rem 0;
      flex-direction: row;
      flex-wrap: wrap;
      background-attachment: fixed;
      background-size: cover;
      background-image: url(${bgLink});
    }

    .cardImg {
      border-radius: 1.5em;
      width: 100%;
      aspect-ratio: 16/9;
      overflow: hidden;
      display: grid;
      grid-template-areas: "stack";
      // border-radius: 0.3em;
      // background-position: center;
      // background-size: cover;
    }
    .cardImg > * {
      grid-area: stack;
    }
    .cardImg > figcaption {
      display: grid;
      align-items: end;
      padding: 1.5rem 2rem;
      background-image: linear-gradient(
        to bottom,
        rgb(33 44 55 / 0),
        rgb(33 44 55 / 0),
        rgb(0 51 102 / 0.3)
      );
    }
    .zagolovok {
      background-color: yellow;
    }
  `;

  return (
    <>
      <DivStyle>
        <section className="buffer"></section>
        <section className="parallax-container2">
          <div
            className="center"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <section className="card">
              {/* <ScrollAnimation animateIn="animate__animated animate__slideInLeft">
                <h1 style={{ zIndex: "100" }} className="zagolovok">
                  {titleText}
                </h1>
              </ScrollAnimation> */}
              <ScrollAnimation animateIn="animate__animated animate__slideInRight">
                {/* <Card
                  hoverable
                  style={{
                    width: 1400,
                  }} */}
                <figure className="cardImg">
                  <img alt="example" src={imgLink} className="cardImg" />
                  <figcaption style={{ color: "white" }}>
                    <h1>{titleText}</h1>
                  </figcaption>
                </figure>
                {/* ></Card> */}
              </ScrollAnimation>
            </section>
          </div>
        </section>
      </DivStyle>
    </>
  );
}
