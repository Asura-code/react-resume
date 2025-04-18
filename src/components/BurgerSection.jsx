import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { act } from "react";

export default function BurgerSection({ active, onChange }) {
  const items = [
    {
      key: "sub1",
      label: "menu",
      icon: <AppstoreOutlined />,
      children: [
        {
          key: "g1",
          type: "group",
          children: [
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
              label: "Manga Player",
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
    <Menu
      onClick={onClick}
      style={{
        width: 150,
      }}
      defaultSelectedKeys={[active]}
      mode="inline"
      items={items}
      theme="light"
      triggerSubMenuAction="click"
    />
  );
}
