import Header from "./components/header/Header";
import Whoami from "./components/Whoami";
import Contacts from "./components/Contacts";
import TabsSection from "./components/TabsSection";
import SmthSection from "./components/AboutSection";
import { useState } from "react";
import Footer from "./components/footer/Footer";

function App() {
  const [tab, setTab] = useState("main");

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
            <Contacts />
          </>
        )}
        {tab == "about" && (
          <>
            <SmthSection />
          </>
        )}
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
