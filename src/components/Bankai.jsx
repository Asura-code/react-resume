import { useState } from "react";
import KinoboxPlayer from "./KinoboxPlayer/KinoboxPlayer";
import RandomAnime from "./RandomAnime";
import { Button, Modal } from "antd";
import ModalWindowInfo from "./ModalWindowInfo";

export default function Bankai() {
  function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  // модалка - перенести в отдельный компонент как не будет заебно
  //   const [isModalOpen, setIsModalOpen] = useState(false);
  //   const showModal = () => {
  //     setIsModalOpen(true);
  //   };
  //   const handleOk = () => {
  //     setIsModalOpen(false);
  //   };
  //   const handleCancel = () => {
  //     setIsModalOpen(false);
  //   };

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
          <ModalWindowInfo></ModalWindowInfo>
        </div>

        <br></br>
        {message || isMobileDevice() ? (
          <div className="border">
            <KinoboxPlayer kpId={message} />
          </div>
        ) : (
          <div className="border">
            <img src="tenor.gif" style={{ width: "845px", height: "475px" }} />
          </div>
        )}
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
