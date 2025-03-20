import { Card } from "antd";
const { Meta } = Card;
import styled from "styled-components";

function show() {
  var reveal = document.querySelectorAll(".reveal");
  for (var i = 1; i < reveal.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveal[i].getBoundingClientRect().top;

    if (elementTop < windowHeight - 190) {
      reveal[i].classList.add("active");
    } else {
      reveal[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", show);

export default function CardSection({
  imgLink,
  titleText,
  descriptionText,
  bgLink,
  bufferImg,
  active,
}) {
  const DivStyle = styled.div`
    .buffer {
      width: 100%;
      min-height: 25vh;
      background-image: url(${bufferImg});
      background-position: center;
    }

    .parallax-container2 {
      padding: 6rem 0;
      flex-direction: row;
      flex-wrap: wrap;
      background-attachment: fixed;
      background-size: cover;
      background-image: url(${bgLink});
    }
  `;
  return (
    <>
      <h1 className="reveal" style={{ display: "none" }}>
        go
      </h1>
      <DivStyle>
        <section className="buffer"></section>
        <section className="parallax-container2">
          <div
            className="center"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <section className={active}>
              <Card
                hoverable
                style={{
                  width: 1400,
                }}
                cover={<img alt="example" src={imgLink} />}
              >
                <Meta
                  style={{
                    display: "flex",
                    textAlign: "center",
                  }}
                  title={titleText}
                  description={descriptionText}
                />
              </Card>
            </section>
          </div>
        </section>
      </DivStyle>
    </>
  );
}
