import React, { useState } from "react";
import Card from "../../components/Card";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useAuth } from "../../hooks/use-auth";

const ProfilePage = () => {
  const { user, updateUser } = useAuth();
  const [data, setData] = useState({
    name: user?.name,
    email: user?.email,
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser({ name: data.name, email: data.email, password: data.password });
  };

  const handleChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Card>
      <h2 className="text-center text-3xl mb-4">Update profile</h2>

      <form onSubmit={handleSubmit}>
        <Input
          value={data.name}
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        {/* <Input
          value={data.email}
          type="email"
          name="email"
          placeholder="Email"
          className="my-4"
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          className="mb-4"
          onChange={handleChange}
        /> */}
        <Button className="mt-4" primary>
          Update
        </Button>
      </form>
    </Card>
  );
};

export default ProfilePage;
