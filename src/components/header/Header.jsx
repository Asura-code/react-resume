import { useState } from "react";
import logo from "/icon.svg";
import styled from "styled-components";

const HeaderStyle = styled.header`
  height: 50px;
  width: 50px;
  display: flex;
  padding: 0 2rem;
  align-items: center;
  background: transparent;
`;

function Header() {
  return (
    <HeaderStyle>
      <img
        src={logo}
        alt=""
        style={{ width: "50px", height: "50px", cursor: "pointer" }}
      />
      <h1 style={{ cursor: "pointer" }}>Asura</h1>
    </HeaderStyle>
  );
}

export default Header;
