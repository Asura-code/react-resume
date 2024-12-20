import Button from "./Button/Button";
import { contacts } from "../data";
import { useState } from "react";
import { GithubFilled, GithubOutlined } from "@ant-design/icons";

export default function Contacts() {
  const [content, setContent] = useState(null);
  function handleClick(type) {
    setContent(type);
  }

  return (
    <section>
      <h3>Contacts:</h3>
      <a href={contacts["github"]} target="_blank">
        <img
          src="https://polygon.readthedocs.io/en/latest/_images/github_logo.png"
          style={{ width: "100px", height: "50px" }}
          alt="github"
        />
      </a>

      <a href={contacts["telegram"]} target="_blank">
        <img
          src="https://static.insales-cdn.com/files/1/526/34144782/original/%D1%82%D0%B5%D0%BB%D0%B5%D0%B3%D0%B0_1711971983493-1711971987606.png"
          style={{ width: "100px", height: "50px" }}
          alt="telegram"
        />
      </a>

      {/* <Button
        isActive={content == "github"}
        onClicked={() => handleClick("github")}
      >
        
      </Button> */}
      {/* <Button
        isActive={content == "telegram"}
        onClicked={() => handleClick("telegram")}
      >
        telegram
      </Button> */}
      {/* <p>
        {!content ? (
          "Press da button"
        ) : (
          <span>
            {" "}
            Link:{" "}
            <a href={contacts[content]} target="_blank">
              {contacts[content]}
            </a>
          </span>
        )}
      </p> */}
    </section>
  );
}
