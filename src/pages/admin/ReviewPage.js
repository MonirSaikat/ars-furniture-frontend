import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { addReivewByUser } from "../../services/review-service";

const ReviewPage = () => {
  const [data, setData] = useState({ message: "", rating: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      text: data.message,
      rating: data.rating,
    };

    addReivewByUser(formData).then((data) => {
      // console.log(data);
    });

    setData({
      message: "",
      rating: "",
    });
  };

  const handleChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Card>
      <h1 className="text-4xl mb-3 text-center">Add a review</h1>
      <form onSubmit={handleSubmit}>
        <Input
          required
          value={data.message}
          onChange={handleChange}
          name="message"
          textarea
          placeholder="Enter your message"
        />

        <Input
          name="rating"
          required
          value={data.rating}
          onChange={handleChange}
          type="number"
          placeholder="1-5"
          max="5"
          min="1"
          step="0.1"
        />

        <Button primary className="mt-3">
          Submit
        </Button>
      </form>
    </Card>
  );
};

export default ReviewPage;
