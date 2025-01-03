import Button from "./Button/Button";

export default function TabsSection({ active, onChange, onChangeWallpaper }) {
  function onClicked1(tabIs, wallpaperIs) {
    onChange(tabIs);
    onChangeWallpaper(wallpaperIs);
  }
  return (
    <section style={{ marginBottom: "1rem" }}>
      <Button
        isActive={active == "main"}
        onClicked={() => onClicked1("main", "")}
      >
        Main
      </Button>
      {/* <Button isActive={active == "about"} onClicked={() => onChange("about")}>
        About
      </Button> */}

      <Button
        isActive={active == "bankai"}
        onClicked={() => onClicked1("bankai", "2.jpg")}
      >
        Bankai
      </Button>
      <Button
        isActive={active == "effect"}
        onClicked={() => onClicked1("effect", "")}
      >
        Manga Player
      </Button>
    </section>
  );
}
