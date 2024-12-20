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

function App() {
  const [tab, setTab] = useState("main");
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  let [size, setSize] = useState(90);

  // const onChange = (checked) => {
  //   alert(`switch to ${checked}`);
  // };

  return (
    <>
      <Header />
      <main>
        <div className="isntPC">
          <BurgerSection
            size1={size}
            active={tab}
            onChange={(currentTab) => setTab(currentTab)}
          ></BurgerSection>
        </div>
        <div className="isPC">
          <TabsSection
            active={tab}
            onChange={(currentTab) => setTab(currentTab)}
          />
        </div>
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
            <EffectsSection />
            <News></News>
          </>
        )}
      </main>
    </>
  );
}

export default App;
