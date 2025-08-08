import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import "./AuthForm.css";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

interface LoginFormProps {
  onFinish: (values: FieldType) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onFinish }) => {
  return (
    <Form
      name="login"
      className="auth-form"
      layout="vertical"
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input placeholder="Enter your username" />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password placeholder="Enter your password" />
      </Form.Item>

      <Form.Item<FieldType>
        name="remember"
        valuePropName="checked"
        initialValue={true}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Sign In
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
