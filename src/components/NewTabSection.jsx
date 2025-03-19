import { ConfigProvider, Tabs } from "antd";
import { useState } from "react";

export default function NewTabSection({ active, onChange2, onChange3 }) {
  let wallpaper =
    active == "bankai"
      ? "https://chromewebstore.google.com/detail/bglaaddmckbbjbnfmcihokmpheamiakc?utm_source=item-share-cb"
      : "";

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
    onChange3(
      key == "bankai"
        ? "https://chromewebstore.google.com/detail/bglaaddmckbbjbnfmcihokmpheamiakc?utm_source=item-share-cb"
        : ""
    );
  };

  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Tabs: {
              inkBarColor: "red",
              colorText: "black",
              colorBorderSecondary: "black",
              itemSelectedColor: "black",
            },
          },
        }}
      >
        <Tabs defaultActiveKey={active} items={items} onTabClick={onClick} />
      </ConfigProvider>
    </>
  );
}
