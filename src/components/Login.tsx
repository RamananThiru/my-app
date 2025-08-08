import React from "react";
import type { FormProps } from "antd";
import { Form, Input, Button, Card, Checkbox } from "antd";
import AuthSVG from "./AuthSVG";
import "./Login.css";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish = (values: FieldType) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: Error) => {
  console.log("Failed:", errorInfo);
};

const Login: React.FC = () => {
    console.log("Login component rendered");
    return (
    <div className="App">
      <Card title="Login" className="login-card">
        <AuthSVG className="login-icon" />
        <Form
          name="basic"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <div className="signup-text">
            Don't have an account?{" "}
            <a href="/signup" className="signup-link">
              Sign Up Now
            </a>
          </div>

          <Form.Item
            name="remember"
            valuePropName="checked"
            className="remember-item"
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
