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

  function handleOnHeaderClick() {
    setTab("main");
    setWallpaper("");
  }

  let [isPc, setIsPC] = useState();
  let [wallpaper, setWallpaper] = useState(!res ? "" : "4.jpg");

  const DivStyle = styled.div`
    background-image: url(${wallpaper});
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
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
        <div onClick={() => handleOnHeaderClick()}>
          <Header />
        </div>

        <main>
          <div className="Tabs">
            <NewTabSection
              active={tab}
              onChange2={(c) => setTab(c)}
              onChange3={(c) => setWallpaper(c)}
            ></NewTabSection>
          </div>

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

          {tab == "main" && (
            <>
              <div className="Main">
                <CoruselSection></CoruselSection>
                <Whoami />
                <Contacts />
              </div>
            </>
          )}

          {tab == "bankai" && <Bankai></Bankai>}

          {tab == "effect" && (
            <>
              <div className="Bankai">
                <EffectsSection />
                <News></News>
                <RandomAnime></RandomAnime>
              </div>

              {/* <MangaPlayer></MangaPlayer> */}
            </>
          )}
        </main>
      </DivStyle>
    </>
  );
}
