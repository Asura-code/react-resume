import Header from "./components/header/Header";
import Whoami from "./components/Whoami";
import Contacts from "./components/Contacts";
import TabsSection from "./components/TabsSection";
import SmthSection from "./components/AboutSection";
import { useState } from "react";
import Footer from "./components/footer/Footer";
import AboutSection from "./components/AboutSection";
import Bankai from "./components/KinoboxPlayer";
import KinoboxPlayer from "./components/KinoboxPlayer";
import EffectsSection from "./components/EffectsSection";

function App() {
  const [tab, setTab] = useState("main");
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  return (
    <>
      <Header />
      <main>
        <TabsSection
          active={tab}
          onChange={(currentTab) => setTab(currentTab)}
        />
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
            <KinoboxPlayer kpId={message} />
          </>
        )}

        {tab == "effect" && <EffectsSection />}
      </main>
    </>
  );
}

export default App;
