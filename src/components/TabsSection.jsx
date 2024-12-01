import Button from "./Button/Button";

export default function TabsSection({ active, onChange }) {
  return (
    <section style={{ marginBottom: "1rem" }}>
      <Button isActive={active == "main"} onClicked={() => onChange("main")}>
        Main
      </Button>
      {/* <Button isActive={active == "about"} onClicked={() => onChange("about")}>
        About
      </Button> */}
      <Button
        isActive={active == "bankai"}
        onClicked={() => onChange("bankai")}
      >
        Bankai
      </Button>
      <Button
        isActive={active == "effect"}
        onClicked={() => onChange("effect")}
      >
        useEffect
      </Button>
    </section>
  );
}
