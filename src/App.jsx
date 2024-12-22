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

function App() {
  const [tab, setTab] = useState("main");
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  let [isPc, setIsPC] = useState();

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
      <Header />
      <main>
        {isMobileDevice() ? (
          <>
            <BurgerSection
              active={tab}
              onChange={(currentTab) => setTab(currentTab)}
            ></BurgerSection>
            <br></br>
          </>
        ) : (
          <TabsSection
            active={tab}
            onChange={(currentTab) => setTab(currentTab)}
          />
        )}

        {tab == "main" && (
          <>
            <Whoami />
            <AboutSection></AboutSection>
            <Contacts />
          </>
        )}

        {tab == "bankai" && (
          <>
            <div>
              <span>Write kinopoisk/imdb id or name: </span>
              <input
                type="text"
                id="message"
                name="message"
                onChange={handleChange}
                value={message}
              />
            </div>
            <br></br>
            <div className="border">
              <KinoboxPlayer kpId={message} />
            </div>
            <br></br>
            <RandomAnime></RandomAnime>
          </>
        )}

        {tab == "effect" && (
          <>
            {/* <EffectsSection />
            <News></News> */}

            <MangaPlayer></MangaPlayer>
          </>
        )}
      </main>
    </>
  );
}

export default App;
