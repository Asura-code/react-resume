import { useState } from "react";
import Button from "./Button/Button";

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
      <ul>
        <li>
          <span style={{ marginBottom: "1rem" }}>
            I started learning react and decided to make smth like a resume as
            my first project. So here I'm just practicing different things that
            I'm learning
          </span>
        </li>
      </ul>

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
