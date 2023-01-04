import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";
import Card from "../components/Card";
import { CiFacebook } from "react-icons/ci";

const RegisterPage = () => {
  const { registerUser, loginWithGoogle, loginWithFacebook } = useAuth();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(data.name, data.email, data.password);
    setData({ name: "", email: "", password: "" });
  };

  const handleChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <div className="container mx-auto px-4 md:px-0">
        <Card className="p-4 max-w-md mx-auto my-8">
          <h2 className="text-2xl text-center mb-4">Please register</h2>

          <form onSubmit={handleSubmit} action="">
            <Input
              type="text"
              onChange={handleChange}
              name="name"
              placeholder="Enter your fullname"
              required
            />
            <Input
              className="mt-4"
              name="email"
              onChange={handleChange}
              type="email"
              placeholder="Enter your email"
              required
            />
            <Input
              type="password"
              name="password"
              onChange={handleChange}
              className="mt-4"
              placeholder="Enter your password"
              required
            />
            <Button primary className="mt-4 w-full">
              Register
            </Button>
            <p className="mt-2">
              Already an user?
              <Link className="text-blue-600 hover:underline ml-2" to="/login">
                Login
              </Link>
            </p>
            <Button
              type="button"
              secondary
              onClick={loginWithGoogle}
              className="mt-4 w-full"
            >
              <FcGoogle className="mr-3" />
              <span>Login with google</span>
            </Button>
            <Button
              type="button"
              secondary
              className="mt-4 bg-blue-900 w-full"
              onClick={loginWithFacebook}
            >
              <CiFacebook className="mr-3" />
              <span>Login with facebook</span>
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPage;
