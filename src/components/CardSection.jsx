import { Card } from "antd";
const { Meta } = Card;
import styled from "styled-components";

export default function CardSection({
  imgLink,
  titleText,
  descriptionText,
  bgLink,
  bufferImg,
}) {
  const DivStyle = styled.div`
    .buffer {
      width: 100%;
      min-height: 25vh;
      background-image: url(${bufferImg});
      background-position: center;
      background-size: cover;
    }

    .parallax-container2 {
      padding: 6rem 0;
      flex-direction: row;
      flex-wrap: wrap;
      background-attachment: fixed;
      background-image: url(${bgLink});
    }
  `;
  return (
    <>
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
          </div>
        </section>
      </DivStyle>
    </>
  );
}
