import React from "react";
import { Button, message } from "antd";

const Message = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const info = () => {
    messageApi.info("Hello, Ant Design!");
  };

  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={info}>
        Display normal message
      </Button>
    </>
  );
};

export default Message;
