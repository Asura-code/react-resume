import { useState } from "react";
import KinoboxPlayer from "./KinoboxPlayer/KinoboxPlayer";
import RandomAnime from "./RandomAnime";

export default function Bankai() {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  function find(lol) {
    setMessage(lol);
  }

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
          />
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
