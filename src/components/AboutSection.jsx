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

export default function AboutSection() {
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
      <strong>
        <h3 style={{ marginBottom: "1rem" }}>What's going on here</h3>
      </strong>
      <DivStyle>
        <ul>
          <li>
            <p>
              I started learning react and decided to make smth like a resume as
              my first project. So here I'm just practicing different things
              that I'm learning
            </p>
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
