import { useState } from "react";
import logo from "/icon.svg";
import styled from "styled-components";
import "./Header.css";

const HeaderStyle = styled.header`
  height: 50px;
  display: flex;
  padding: 0 2rem;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background: transparent;
`;

function Header() {
  // const [now, setNow] = useState(new Date());
  // setInterval(() => setNow(new Date()));
  return (
    <HeaderStyle>
      <img src={logo} alt="" style={{ width: "50px", height: "50px" }} />
      <h1>Asura</h1>
      {/* <h3>Resume</h3> */}

      {/* <span>Smth dynamic: {now.toLocaleTimeString()} </span> */}
    </HeaderStyle>
  );
}

export default Header;
