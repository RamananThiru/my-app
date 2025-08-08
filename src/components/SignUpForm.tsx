import React from "react";
import { Form, Input, Button, message } from "antd";
import "./AuthForm.css";

type FieldType = {
  username?: string;
  password?: string;
  confirmPassword?: string;
};

interface SignUpFormProps {
  onFinish: (values: FieldType) => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onFinish }) => {
  const handleFinish = (values: FieldType) => {
    if (values.password !== values.confirmPassword) {
      message.error("Passwords do not match!");
      return;
    }
    onFinish(values);
  };

  return (
    <Form
      name="signup"
      className="auth-form"
      layout="vertical"
      onFinish={handleFinish}
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
        label="Confirm Password"
        name="confirmPassword"
        rules={[{ required: true, message: "Please confirm your password!" }]}
      >
        <Input.Password placeholder="Confirm your password" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Sign Up
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignUpForm;
