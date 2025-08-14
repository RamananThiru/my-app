import { Form, Input, Button, message } from "antd";
import AuthCard from "./AuthCard";

type FieldType = {
  username?: string;
  password?: string;
  confirmPassword?: string;
};

// set user name and password to local storage
const onFinish = (values: FieldType) => {
  console.log("Success:", values);

  // validate if password and confirm password match

  if (values.password !== values.confirmPassword) {
    console.log("Passwords do not match");
    message.error("Passwords do not match");
    return;
  }
  // save user data to local storage

  localStorage.setItem(
    "User",
    JSON.stringify({
      username: values.username,
      password: values.password,
    })
  );

  console.log("User data saved to local storage");
};


// post the mvp features , api call to validate user for existing account

const SignUp = () => {
  return (
    <AuthCard title="Sign Up">
      <Form
        onFinish={onFinish}
        autoComplete="off"
        initialValues={{ remember: true }}
        name="signup"
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

        <Form.Item
          name="confirmPassword"
          rules={[
            { required: true, message: "Please confirm your password!" },
          ]}
        >
          <Input.Password placeholder="Confirm Password" />
        </Form.Item>

        <div className="already-account-text">
          Already have an account?{" "}
          <a href="/login" className="login-link">
            Login Now
          </a>
        </div>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create Account
          </Button>
        </Form.Item>
      </Form>
    </AuthCard>
  );
};

export default SignUp;
