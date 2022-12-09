const products = [
  {
    label: "Item one",
    id: 1,
    img: "/images/img1.jpg",
    price: 10,
    rating: 5,
  },
  {
    label: "Item two",
    id: 2,
    img: "/images/img2.jpg",
    price: 15,
    rating: 5,
  },
  {
    label: "Item three",
    id: 3,
    img: "/images/img3.jpg",
    price: 100,
    rating: 3.9,
  },
  {
    label: "Item four",
    id: 4,
    img: "/images/img4.jpg",
    price: 20,
    rating: 4.5,
  },
  {
    label: "GG-398c",
    id: 5,
    img: "/images/img5.jpg",
    price: 90,
    rating: 4.9,
  },
  {
    label: "DD04-G",
    id: 6,
    img: "/images/img6.jpg",
    price: 40,
    rating: 4.9,
  },

  {
    label: "GG-99-99",
    id: 7,
    img: "/images/img7.jpg",
    price: 40,
    rating: 4.9,
  },
];

export const getAllProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      resolve(products);
    }, 2000);
  })
};

export const getProductById = (id) => {
  const product = products.find(pdct => pdct.id === +id);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(product) {
        resolve(product);
      } else {
        reject(new Error('Product not found'));
      }
    }, 2000);
  });
};
