import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import AuthCard from "./AuthCard";

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
      <AuthCard title="Login">
        <Form
          name="login"
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
      </AuthCard>
    );
};

export default Login;
