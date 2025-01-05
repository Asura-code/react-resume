import Button from "./Button/Button";

// export default function TabsSection() {
//   return <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
// }

export default function TabsSection({ active, onChange, onChangeWallpaper }) {
  function onClicked1(tabIs, wallpaperIs) {
    onChange(tabIs);
    onChangeWallpaper(wallpaperIs);
  }

  let randomIs = active == "bankai" ? true : false;
  return (
    <section style={{ marginBottom: "1rem" }}>
      <Button
        isRandom={randomIs}
        isActive={active == "main"}
        onClicked={() => onClicked1("main", "")}
      >
        Main
      </Button>
      {/* <Button isActive={active == "about"} onClicked={() => onChange("about")}>
        About
      </Button> */}

      <Button
        isRandom={false}
        isActive={active == "bankai"}
        onClicked={() => onClicked1("bankai", "4.jpg")}
      >
        Bankai
      </Button>
      <Button
        isRandom={randomIs}
        isActive={active == "effect"}
        onClicked={() => onClicked1("effect", "")}
      >
        Manga Player
      </Button>
    </section>
  );
}
