import { useState } from "react";
import KinoboxPlayer from "./KinoboxPlayer/KinoboxPlayer";
import RandomAnime from "./RandomAnime";
import { Button, Modal } from "antd";

export default function Bankai() {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="Bankai">
        <div class="text-field">
          <label className="text-field__label">
            Write kinopoisk/imdb id or name:
          </label>
          <input
            onChange={handleChange}
            value={message}
            className="text-field__input"
            placeholder="kinopoisk/imdb id or name"
            autocomplete="off"
          />{" "}
          <Button
            type="primary"
            onClick={showModal}
            style={{
              display: "inline-block",
              backgroundColor: "#9a6106",
              fontSize: "1rem",
              fontWeight: "400",
              height: "calc(2.25rem + 2px)",
            }}
          >
            instruction
          </Button>
        </div>
        {/* <button onClick={() => find(message)}>press</button> */}
        <div>
          {/* <span>Write kinopoisk/imdb id or name: </span> */}
          {/* <input
                    type="text"
                    id="message"
                    name="message"
                    onChange={handleChange}
                    value={message}
                  /> */}
        </div>
        <br></br>
        <div className="border">
          <KinoboxPlayer kpId={message} />
        </div>
        <br></br>
        {/* <EffectsSection></EffectsSection> */}
        <RandomAnime></RandomAnime>
        <br></br>
        <Modal
          title="How to use it"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>
            1. There are several different players working for you, and you can
            select any of them from the right menu. If one doesn't work, try the
            other.
          </p>
          <p>
            2. In the upper-left menu, you can select the season, episode, and
            voice acting.
          </p>
          <p>
            3. The preferred search parameters are the imdb and kinopoisk IDs.
            The name search also works, but not as well as we would like.
          </p>
        </Modal>
        <div style={{ visibility: "hidden" }}>
          <h1>lkjnl</h1>
          <h1>lkjnl</h1>
          <h1>lkjnl</h1>
          <h1>lkjnl</h1>
          <h1>lkjnl</h1>
          <h1>lkjnl</h1>
          <h1>lkjnl</h1>
          <h1>lkjnl</h1>
        </div>
      </div>
    </>
  );
}
