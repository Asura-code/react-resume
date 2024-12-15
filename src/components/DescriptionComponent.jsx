import React, { useState } from "react";
import { Collapse, Divider, Card } from "antd";
const { Meta } = Card;
export default function App({ name, desc, poster, url }) {
  const [xd, setXd] = useState("");
  function lol() {
    setXd(name);
  }
  return (
    <Card
      hoverable
      style={{
        width: 260,
      }}
      cover={<img alt="example" src={poster} />}
    >
      {/* <Meta title={name} titlez={desc} /> */}
      <Collapse
        items={[
          {
            key: "1",
            label: name,
            children: desc,
          },
        ]}
      />
    </Card>
  );
}
