import React from "react";
import { Carousel, ConfigProvider } from "antd";
import AboutSection from "./AboutSection";
import styled from "styled-components";

const DivStyle = styled.div`
  button.slick-arrow.slick-next {
    color: black;
  }
  button.slick-arrow.slick-next:before {
    color: black;
  }
  button {
    colr: "red";
  }

  button.slick-arrow.prev-next {
    color: black;
  }
  button.slick-arrow.slick-prev:after {
    color: black;
  }
`;
const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "white",
};
export default function CoruselSection() {
  return (
    <>
      <ConfigProvider
        style={contentStyle}
        theme={{
          components: {
            Carousel: {
              colorBgContainer: "black",
              colorBgElevated: "red",
              colorIcon: "red",
              colorText: "black",
              arrowOffset: 1,
            },
          },
        }}
      >
        <DivStyle>
          <Carousel
            arrows
            infinite={true}
            autoplay
            speed={1000}
            autoplaySpeed={10000}
          >
            <div>
              <AboutSection
                style={contentStyle}
                project={"Bankai Kino"}
              ></AboutSection>
            </div>
            <div>
              <AboutSection
                style={contentStyle}
                project={"Bankai"}
              ></AboutSection>
            </div>
          </Carousel>
        </DivStyle>
      </ConfigProvider>
    </>
  );
}
