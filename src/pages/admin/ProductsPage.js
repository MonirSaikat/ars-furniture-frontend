import React from 'react';
import Button from '../../components/Button';
import Table from '../../components/Table';
import Card from '../../components/Card';
import { useProduct } from '../../hooks/use-product';
import { AiOutlineDelete } from "react-icons/ai";

const ProductsPage = () => {
  const { deleteProduct, products } = useProduct();

  const config = [
    {
      label: "Title",
      render: (item) => item.label,
      sortable: true,
    },
    {
      label: "Price",
      render: (item) => item.price,
    },
    {
      label: "Rating",
      render: (item) => item.rating,
    },
    {
      label: "Image",
      render: (item) => (
        <img className="w-20" src={item.imageUrl} alt={item.label} />
      ),
    },
    {
      label: "Action",
      render: (item) => (
        <Button
          danger
          onClick={() => deleteProduct(item._id)}
        >
          <AiOutlineDelete />
        </Button>
      ),
    },
  ];

  return (
    <Card>
      <Table data={products} config={config} />
    </Card>
  );
}

export default ProductsPage;
