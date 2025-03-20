import { ConfigProvider, Tabs } from "antd";
import { useState } from "react";

export default function NewTabSection({ active, onChange2, onChange3 }) {
  let wallpaper =
    active == "bankai"
      ? "https://sun9-27.userapi.com/impf/g9veFBrarGdoQCfLzOgzVE5zRMyHvAF8v77wmQ/dHjBQG76Qjo.jpg?size=1920x768&quality=95&crop=0,115,2560,1022&sign=6d6f7f97bb168c46e069b7d9e17a508e&type=cover_group"
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
        ? "https://sun9-27.userapi.com/impf/g9veFBrarGdoQCfLzOgzVE5zRMyHvAF8v77wmQ/dHjBQG76Qjo.jpg?size=1920x768&quality=95&crop=0,115,2560,1022&sign=6d6f7f97bb168c46e069b7d9e17a508e&type=cover_group"
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
