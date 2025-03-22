import { ConfigProvider, Tabs } from "antd";
import { useState } from "react";

export default function NewTabSection({ active, onChange2, onChange3 }) {
  const wp =
    "https://i.pinimg.com/originals/65/56/ca/6556ca0886a22948573c1845169e7a21.gif";
  let wallpaper = active == "bankai" ? wp : "";

  const items = [
    {
      key: "main",
      label: "Main",
    },
    {
      key: "bankai",
      label: "Bankai",
    },
    {
      key: "effect",
      label: "Fun with api",
    },
  ];
  const onClick = (key) => {
    onChange2(key);
    onChange3(key == "bankai" ? wp : "");
  };

  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Tabs: {
              inkBarColor: "red",
              colorText: "rgb(128,0,128)",
              colorBorderSecondary: "black",
              itemSelectedColor: "rgb(203, 5, 203)",
            },
          },
        }}
      >
        <Tabs defaultActiveKey={active} items={items} onTabClick={onClick} />
      </ConfigProvider>
    </>
  );
}
