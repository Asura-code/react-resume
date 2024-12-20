import styled from "styled-components";
import SegmentSection from "./BurgerSection";

const DivStyle = styled.div`
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

function Posters({ title, description }) {
  return (
    <>
      <li>
        <DivStyle>
          <p>
            <strong>{title}</strong>
            {description}
          </p>
        </DivStyle>
      </li>
    </>
  );
}

export default Posters;
