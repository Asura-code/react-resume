import { ways } from "../data";
import Posters from "./Posters";
import styled from "styled-components";
import SegmentSection from "./BurgerSection";

const DivStyle = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export default function Whoami() {
  return (
    <>
      <h3>Whoami</h3>

      <section>
        <ul>
          {ways.map((way) => (
            <DivStyle>
              <Posters key={way.title} {...way}></Posters>
            </DivStyle>
          ))}
        </ul>
      </section>
      {/* 
      <a href="https://wakatime.com/@7711bfae-f8eb-44a2-86e5-f1a922a4db4d">
        <img
          src="https://wakatime.com/badge/user/7711bfae-f8eb-44a2-86e5-f1a922a4db4d.svg"
          alt="Total time coded since Jun 2 2024"
        />
      </a> */}
    </>
  );
}
