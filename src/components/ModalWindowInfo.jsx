import { Button, ConfigProvider, Modal } from "antd";
import { useState } from "react";
import styled from "styled-components";

const PStyle = styled.p`
  @import url("https://fonts.googleapis.com/css?family=Source+Code+Pro");
  p {
    white-space: nowrap;
    overflow: hidden;
    font-family: "Source Code Pro", monospace;

    color: #0b8926;
  }

  /* Animation */
  p {
    animation: animated-text 2s steps(29, end) 1s 1 normal both,
      animated-cursor 600ms steps(29, end) infinite;
  }

  /* text animation */

  @keyframes animated-text {
    from {
      width: 0;
    }
    to {
      width: 217px;
    }
  }

  /* cursor animations */

  @keyframes animated-cursor {
    from {
      border-right-color: transparent;
    }
    to {
      border-right-color: transparent;
    }
  }
`;

export default function ModalWindowInfo() {
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
      <ConfigProvider
        theme={{
          components: {
            Modal: {
              contentBg: "black",
              titleColor: "#0b8926",
              titleFontSize: "black",
              titleLineHeight: 0,
              colorText: "#0b8926",
              colorIcon: "#0b8926",
              colorIconHover: "red",
            },
            Button: {
              defaultColor: "white",
              defaultBg: "#0b8926",
              defaultHoverBg: "#08691d;",
              defaultBorderColor: "#0b8926",
              defaultHoverBorderColor: "#09661d",
              defaultHoverColor: "#bdbdbd",
            },
          },
        }}
      >
        {/* <Button
          onClick={showModal}
          style={{
            display: "inline-block",
            // backgroundColor: "#0b8926",
            fontSize: "1rem",
            fontWeight: "400",
            height: "calc(2.25rem + 2px)",
          }}
        >
          instruction
        </Button> */}

        <img
          src="voprosik.png"
          alt="jkjdnn"
          style={{ height: "calc(2.25rem + 2px)", cursor: "pointer" }}
          onClick={showModal}
        />

        <Modal
          footer={""}
          title="How to use it"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          contentBg={"#0b8926"}
          style={{ color: "#0b8926" }}
        >
          <p>
            1. There are several different players working for you, and you can
            select any of them from the right menu. If one doesn't work, try the
            other.
          </p>

          <p>
            2. In the upper-left menu, you can select the season, episode, and
            voice acting. if the player returns an error, click button "update"
            or reload the page.
          </p>
          <p>
            3. The preferred search parameters are the imdb and kinopoisk IDs.
            The name search also works, but not as well as we would like.
          </p>
          <PStyle>
            <p>Enjoy your viewing. Bankai!! </p>
          </PStyle>
        </Modal>
      </ConfigProvider>
    </>
  );
}
