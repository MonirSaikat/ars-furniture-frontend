import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import { FcGoogle } from 'react-icons/fc';
import { CiFacebook } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth';
import Card from '../components/Card';

const LoginPage = () => {
  const { loginWithGoogle, loginWithFacebook, loginUser } =
    useAuth();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    // if(loggedIn) navigate(-1);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(data.email, data.password);
    setData({ email: "", password: "" });
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
          <h2 className="text-2xl text-center mb-4">
            Please Login
          </h2>

          <form action="" onSubmit={handleSubmit}>
            <Input
              name="email"
              value={data.email}
              onChange={handleChange}
              type="email"
              placeholder="Enter your email"
              required
            />
            <Input
              type="password"
              value={data.password}
              className="mt-4"
              name="password"
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
            <Button primary className="mt-4 w-full">
              Login
            </Button>
            <p className="mt-2">
              Not a user ?{" "}
              <Link
                className="text-blue-600 hover:underline"
                to="/register"
              >
                Register
              </Link>{" "}
            </p>
            <Button
              type="button"
              secondary
              className="mt-4 w-full"
              onClick={loginWithGoogle}
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
}

export default LoginPage;
