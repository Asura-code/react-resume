import { useState } from "react";
import Button from "./Button/Button";
import styled from "styled-components";

const DivStyle = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  @keyframes scale {
    100% {
      transform: scale(1);
    }
  }
  .container {
    display: flex;
    align-items: center; /* Вертикальное выравнивание по центру */
  }

  .image {
    margin-right: 10px; /* Отступ между изображением и текстом */
  }

  p {
    display: inline-block;
    opacity: 0;
    filter: blur(4px);
  }

  p:nth-child(1) {
    animation: fade-in 0.8s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  @keyframes fade-in {
    100% {
      opacity: 1;
      filter: blur(0);
    }
  }
`;

export default function AboutSection({ project }) {
  const [name, setName] = useState("");
  const [reason, setReason] = useState("2");
  const [hasError, setHasError] = useState(false);
  const [dsbl, setDsbl] = useState(1);

  function handleNameChange(event) {
    setName(event.target.value);
    setHasError(event.target.value.trim().length == 0);
    setDsbl(2);
  }

  function handleReasonChange(event) {
    setReason(event.target.value);
  }

  return (
    <section>
      {project && (
        <strong>
          <h3 style={{ marginBottom: "1rem" }}>Project: {project}</h3>
        </strong>
      )}
      <DivStyle>
        <ul>
          <li>
            {project == "Bankai Kino" ? (
              <div class="container">
                <p class="text">
                  I had an online movie theater bankaikino.ru but it was blocked
                  :(. But you can{" "}
                  <a href="https://bankai.h1n.ru/" target="_blank">
                    view the visual here
                  </a>{" "}
                  and test the functionality of the player on the Bankai page.
                </p>
                <img src="tenor2.gif" class="image" />
              </div>
            ) : (
              <div class="container">
                <p class="text">
                  A browser extension that allows you to switch from the movie
                  page on kinopoisk to a free player. You can download it{" "}
                  <a
                    href="https://github.com/Asura-code/bankai/tree/main"
                    target="_blank"
                  >
                    on my github
                  </a>
                </p>
                <img
                  src="tenor3.gif"
                  class="image"
                  style={{ width: "400px", height: "225px" }}
                />
              </div>
            )}
          </li>
        </ul>
      </DivStyle>
      {/* <strong>
        <h3 style={{ marginBottom: "1rem" }}>Practice with forms</h3>
      </strong>
      <ul>
        <li>
          <form>
            <label htmlFor="name">write smth</label>
            <input
              id="name"
              type="text"
              className="control"
              value={name}
              style={{
                border: hasError ? "1px solid red" : null,
              }}
              onChange={handleNameChange}
            />

            <label htmlFor="reason">reason</label>
            <select
              className="control"
              id="reason"
              value={reason}
              onChange={handleReasonChange}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <Button
              disabled={hasError || dsbl == 1}
              isActive={!hasError || dsbl == 2}
            >
              Send
            </Button>
          </form>
        </li>
      </ul> */}
    </section>
  );
}
