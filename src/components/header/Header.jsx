import { useState } from "react";
import logo from "/vite.svg";
import styled from "styled-components";
import "./Header.css";

const HeaderStyle = styled.header`
  height: 50px;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background: #fafafa;
`;

function Header() {
  const [now, setNow] = useState(new Date());
  setInterval(() => setNow(new Date()));
  return (
    <HeaderStyle>
      <h1>Asura</h1>
      {/* <img src={logo} alt="" /> */}
      {/* <h3>Resume</h3> */}

      <span>Smth dynamic: {now.toLocaleTimeString()} </span>
    </HeaderStyle>
  );
}

export default Header;
