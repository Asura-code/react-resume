import Header from "./components/header/Header";
import Whoami from "./components/Whoami";
import Contacts from "./components/Contacts";
import TabsSection from "./components/TabsSection";
import { useState, useEffect } from "react";
import Footer from "./components/footer/Footer";
import AboutSection from "./components/AboutSection";
import KinoboxPlayer from "./components/KinoboxPlayer/KinoboxPlayer";
import EffectsSection from "./components/EffectsSection";
import "./index.css";
import RandomAnime from "./components/RandomAnime";
import News from "./components/News";
import DescriptionComponent from "./components/DescriptionComponent";
import SegmentSection from "./components/BurgerSection";
import BurgerSection from "./components/BurgerSection";
import MangaPlayer from "./components/MangaPlayer/MangaPlayer";
import { Switch } from "antd";
import Switcher from "./components/Switcher";
import styled from "styled-components";
import useInput from "./hooks/useInput";
import Bankai from "./components/Bankai";
import NewTabSection from "./components/NewTabSection";
import CoruselSection from "./components/CoruselSection";
import Ext from "./components/Ext";

export default function App() {
  let s = window.location.href;
  let res = s.indexOf("lol") !== -1;
  console.log(s);
  let input = useInput();

  const [tab, setTab] = useState(!res ? "main" : "bankai");
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const wp = "purple";

  function handleOnHeaderClick() {
    setTab("main");
    setWallpaper(wp);
  }

  let [isPc, setIsPC] = useState();
  let [wallpaper, setWallpaper] = useState(!res ? "" : wp);

  const DivStyle = styled.div`
    background-image: ${wallpaper};
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
  `;

  const MainStyle = styled.div`
    a {
      display: inline-block;
    }
    img {
      vertical-align: middle;
    }
    /* .isntPC{
  visibility: hidden;
} */
    @media only screen and (max-width: 767px) {
      .kinobox_player {
        width: 100%;
        height: 100%;
      }
    }

    /* .isPC{
  visibility: visible;
}


@media only screen and (max-width: 600px) {
  .isPC{
    visibility: hidden;

  }
  .isntPC{
    visibility: visible; */
    /* }

} */

    a,
    u {
      text-decoration: none;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: "Roboto", sans-serif;
      background-color: #f9f9f9;
      /* background-image: url("/fon.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover; */
    }

    .text-field__input::placeholder {
      color: #0b8926;
    }

    .text-field {
      margin-bottom: 1rem;
    }

    .text-field__label {
      display: block;
      margin-bottom: 0.25rem;
    }

    .letsDoHover:hover {
      color: red;
    }

    .text-field__input {
      display: inline-block;
      width: 89%;
      height: calc(2.25rem + 2px);
      padding: 0.375rem 0.75rem;
      font-family: inherit;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      /* color: #212529; */
      /* background-color: #dda120; */

      color: #0b8926;
      background-color: #0e0900;

      background-clip: padding-box;
      border: 1px solid #888a88;
      border-radius: 0.25rem;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }

    .Main {
      max-width: 850px;
      margin: 0 auto;
    }

    .Bankai {
      /* max-width: 1200px; */
      max-width: 850px;
      margin: 0 auto;
    }

    .Tabs {
      max-width: 850px;
      margin: 0 auto;
    }

    h3 {
      margin-bottom: 1rem;
    }

    section ul {
      list-style: none;
    }

    section ul li {
      border: 1px solid #ccc;
      border-radius: 10px;
      padding: 1rem;
      margin-bottom: 1rem;
    }

    .content,
    p {
      padding: 1rem 0;
    }

    .centered {
      text-align: center;
    }

    .border {
      border-top: 3px solid rgb(17, 65, 2);
      border-right: 3px solid #0b8926;
      border-bottom: 3px solid #0b8926;
      border-left: 3px solid rgb(17, 65, 2);
    }

    /* .kinobox_player{
  width: 100%;
} */

    .control {
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 0.5rem 1rem;
      width: 100%;
      /* margin-top: 1rem; */
      margin-bottom: 1rem;
    }

    /* https://codepen.io/DuskoStamenic/pen/ZEvBKdw */
    @import "https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap";

    :root {
      --color: rgb(94, 212, 189);
    }

    body {
      margin: 0;
      font-family: Poppins, sans-serif;
    }

    @keyframes typing {
      from {
        width: 0ch;
      }
    }

    .parallax-container {
      display: flex;
      min-height: 100vh;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      /*  this is where the magic happens:  */
      background-attachment: fixed;

      background-image: url(https://i.pinimg.com/originals/65/56/ca/6556ca0886a22948573c1845169e7a21.gif);
      background-position: center;
      background-size: cover;
      color: var(--color);
      row-gap: 4rem;

      text-align: center;
    }

    /* .buffer {
  width: 100%;
  min-height: 40vh;
  background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Kinopoisk_colored_logo_with_black_background_%282021-present%29.svg/1200px-Kinopoisk_colored_logo_with_black_background_%282021-present%29.svg.png);
  background-position: center;
  background-size: cover;
} */

    /* .parallax-container2 {
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 6rem 0;
  background-image: url(https://static.rozetked.me/imager/main/images/uploads/PPQd6mLMsuKI.webp);
  gap: 1.6em;
} */

    h1 {
      font-size: 3rem;
      font-weight: 700;
    }

    p {
      padding: 1em;
      line-height: 1.5;
    }

    h3 {
      margin-top: 1em;
      font-size: 1.6rem;
      font-weight: 700;
    }

    .card {
      display: flex;
      max-width: 1400px;
      flex-direction: column;
      align-items: center;
      border-radius: 1.5em;

      background-color: transparent;
      box-shadow: 0 29px 38px -15px rgb(0 0 0 / 43%);
    }

    .card-img {
      width: 100%;
      height: 200px;
      border-radius: 0.3em;
      background-position: center;
      background-size: cover;
    }

    .card:nth-of-type(1) .card-img {
      background-image: url(https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80);
    }

    .card:nth-of-type(2) .card-img {
      background-image: url(https://images.unsplash.com/photo-1522163182402-834f871fd851?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1606&q=80);
    }

    .card:nth-of-type(3) .card-img {
      background-image: url(https://images.unsplash.com/photo-1628746404106-4d3843b231b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2F2aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60);
    }

    .card:nth-of-type(4) .card-img {
      background-image: url(https://images.unsplash.com/photo-1496429862132-5ab36b6ae330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=80);
    }
  `;

  // const onChange = (checked) => {
  //   alert(`switch to ${checked}`);
  // };
  function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  return (
    <>
      <DivStyle>
        <main>
          {/* {isMobileDevice() ? (
            <>
              <BurgerSection
                active={tab}
                onChange={(currentTab) => setTab(currentTab)}
              ></BurgerSection>
              <br></br>
            </>
          ) : (
            <div className="Tabs"> */}
          {/* <TabsSection
                active={tab}
                onChange={(currentTab) => setTab(currentTab)}
                onChangeWallpaper={(currWallpaper) =>
                  setWallpaper(currWallpaper)
                }
              /> */}
          {/* <NewTabSection
                onChange2={(currentTab) => setTab(currentTab)}
              ></NewTabSection> */}
          {/* <Tabs
                defaultActiveKey={tab}
                items={items}
                onTabClick={onChangeTab}
              /> */}

          {/* <NewTabSection
                active={tab}
                onChange2={(c) => setTab(c)}
                onChange3={(c) => setWallpaper(c)}
              ></NewTabSection>
            </div> */}
          {/* )} */}
          <MainStyle>
            {tab == "main" && (
              <>
                <div className="Main">
                  <div className="Tabs">
                    <NewTabSection
                      active={tab}
                      onChange2={(c) => setTab(c)}
                      onChange3={(c) => setWallpaper(c)}
                    ></NewTabSection>
                  </div>
                  <CoruselSection></CoruselSection>
                  <Whoami />
                  <Contacts />
                </div>
              </>
            )}
          </MainStyle>

          {tab == "bankai" && (
            <>
              <MainStyle>
                <div className="Tabs">
                  <NewTabSection
                    active={tab}
                    onChange2={(c) => setTab(c)}
                    onChange3={(c) => setWallpaper(c)}
                  ></NewTabSection>
                </div>
              </MainStyle>
              {/* <Bankai></Bankai> */}
              <Ext></Ext>
            </>
          )}

          {tab == "effect" && (
            <>
              <MainStyle>
                <div className="Bankai">
                  <div className="Tabs">
                    <NewTabSection
                      active={tab}
                      onChange2={(c) => setTab(c)}
                      onChange3={(c) => setWallpaper(c)}
                    ></NewTabSection>
                  </div>

                  <EffectsSection />
                  <News></News>
                  <RandomAnime></RandomAnime>
                </div>
              </MainStyle>

              {/* <MangaPlayer></MangaPlayer> */}
            </>
          )}
        </main>
      </DivStyle>
    </>
  );
}
