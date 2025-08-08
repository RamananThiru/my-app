import react from "react";
import { Form, Card, Input, Button } from "antd";
import "./SignUp.css";

type FieldType = {
    username ?: string;
    password ?: string;
    confirmPassword ?: string;
}

// set user name and password to local storage
const onFinish = (values: FieldType) => {
    console.log("Success:", values);
}

// handle form submission failure


// post the mvp features , api call to validate user for existing account


const SignUp = () => {
    return (
        <div className="sign-up-card">
            Hello
        </div>
    )
}

export default SignUp;

