import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import { Space } from "antd";
import { useState } from "react";
import Switcher from "../Switcher";

export default function MangaPlayer() {
  let [page, setPage] = useState(1);
  let [glava, setGlava] = useState(1);
  let glavaLen = { 1: 3, 2: 2 };
  function goNext() {
    setPage(page + 1);
  }

  function lesGo(value) {
    {
      value ? setPage(page + 1) : setPage(page - 1), console.log(page + 1);
    }
  }

  function goPrev() {
    setPage(page - 1);
  }

  function change(currenGlava) {
    setGlava(currenGlava);
    setPage(1);
  }

  function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  return (
    <>
      <Switcher active={glava} onChange={change}></Switcher>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          style={page > 1 ? { pointerEvents: "" } : { pointerEvents: "none" }}
        >
          <Space>
            <LeftOutlined
              onClick={() => lesGo(false)}
              style={{ height: "100vh" }}
            />
          </Space>
        </button>
        <img
          src={
            "public/images/glava" + String(glava) + "/" + String(page) + ".jfif"
          }
          alt="lol"
          style={
            isMobileDevice()
              ? { width: "100%", height: "100vh" }
              : { width: "70vh", height: "100vh" }
          }
        />
        <button
          style={
            page < glavaLen[glava]
              ? { pointerEvents: "" }
              : { pointerEvents: "none" }
          }
        >
          <Space>
            <RightOutlined
              onClick={() => lesGo(true)}
              style={{ height: "100vh" }}
            />
          </Space>
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Page: {page} / {glavaLen[glava]}
      </div>
    </>
  );
}
