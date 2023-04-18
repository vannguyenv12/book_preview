import React from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import { loginUser } from "../../utils/userApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { doLoginAction } from "../../redux/account/accountSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    const { username, password } = values;
    try {
      const res = await loginUser(username, password);
      if (res?.data) {
        localStorage.setItem("access_token", res.data.access_token);
        dispatch(doLoginAction(res.data.user));
        message.success("Login user success!");
        // navigate("/");
      }
    } catch (error) {
      console.log("failed to Login user", error);
      message.error(error.message);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="register-container">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600, margin: "0 auto" }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          labelCol={{ span: 24 }}
          label="Email"
          name="username"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input type="email" />
        </Form.Item>

        <Form.Item
          labelCol={{ span: 24 }}
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
