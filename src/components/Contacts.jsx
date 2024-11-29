import Button from "./Button/Button";
import { contacts } from "../data";
import { useState } from "react";

export default function Contacts() {
  const [content, setContent] = useState(null);
  function handleClick(type) {
    setContent(type);
  }

  return (
    <section>
      <h3>Contacts:</h3>
      <Button
        isActive={content == "github"}
        onClicked={() => handleClick("github")}
      >
        github
      </Button>
      <Button
        isActive={content == "telegram"}
        onClicked={() => handleClick("telegram")}
      >
        telegram
      </Button>
      <p>
        {!content ? (
          "Press da button"
        ) : (
          <a href={contacts[content]} target="_blank">
            {contacts[content]}
          </a>
        )}
      </p>
    </section>
  );
}
