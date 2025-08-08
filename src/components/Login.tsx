import React from "react";
import type { FormProps } from "antd";
import { Form, Input, Button, Card, Checkbox } from "antd";
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
        <svg
          width="60"
          height="60"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="login-icon"
        >
          <path
            d="M6 10C6 5.58172 9.58172 2 14 2C18.4183 2 22 5.58172 22 10V11C22 15.4183 18.4183 19 14 19H10C4.47715 19 0 14.5228 0 9C0 6.79086 1.79086 5 4 5H6V10Z"
            stroke="#6366f1"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="9" cy="9" r="2" fill="#6366f1" />
        </svg>
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
