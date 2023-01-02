import React, {useState} from 'react';
import Card from "../../components/Card";
import Input from "../../components/Input";
import Button from "../../components/Button";
import FileUpload from '../../components/FileUpload';
import { useProduct } from '../../hooks/use-product';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddProductDetails = ({ value, setValue }) => {
  return <ReactQuill theme='snow' value={value} onChange={setValue} />
};

const AddProductPage = () => {
  const [details, setDetails] = useState('');
  const [data, setData] = useState({
    label: "",
    rating: '',
    price: '',
  });
  const [imageUrl, setImageUrl] = useState('');
  const { addProduct } = useProduct();

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSave = {...data, details, imageUrl};
    addProduct(dataToSave);
    setData({ label: '', rating: '', price: '', details: '' });
  };

  const handleChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Card>
      <h1 className="text-4xl mb-3 text-center section-title">
        Add a product
      </h1>
      <form onSubmit={handleSubmit}>
        <Input
          name="label"
          required
          onChange={handleChange}
          placeholder="Enter product title"
          className="mb-2"
          value={data.label}
        />
        <Input
          type="number"
          required
          name="price"
          onChange={handleChange}
          placeholder="Enter product price"
          className="mb-2"
          value={data.price}
        />
        <Input
          type="number"
          required
          name="rating"
          onChange={handleChange}
          placeholder="Enter product rating"
          className="mb-2"
          value={data.rating}
        />

        {/* <Input
          name="details"
          required
          onChange={handleChange}
          textarea
          placeholder="Enter product details"
          value={data.details}
        /> */}
        <AddProductDetails value={details} onChange={setDetails} />
        <FileUpload onSuccess={(url) => setImageUrl(url)} />

        <Button
          primary
          className="mt-3"
          disabled={imageUrl === ""}
        >
          Submit
        </Button>
      </form>
    </Card>
  );
}

export default AddProductPage;
