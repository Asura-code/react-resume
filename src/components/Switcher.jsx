import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { act } from "react";

export default function Switcher({ active, onChange }) {
  const items = [
    {
      key: "sub1",
      label: "Главы",
      icon: <AppstoreOutlined />,
      children: [
        {
          key: "g1",
          type: "group",
          children: [
            {
              key: "1",
              label: "Глава 1",
            },
            {
              key: "2",
              label: "Глава 2",
            },
          ],
        },
      ],
    },

    {
      type: "divider",
    },
  ];
  const onClick = (e) => {
    onChange(e.key);
  };

  return (
    <>
      <Menu
        onClick={onClick}
        style={{
          width: 140,
        }}
        defaultSelectedKeys={[active]}
        mode="inline"
        items={items}
        theme="dark"
        triggerSubMenuAction="click"
      />
    </>
  );
}
