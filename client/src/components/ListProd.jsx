import React from "react";
import CardProd from "./CardProd";

const fallbackProducts = [
  {
    _id: "1",
    name: "T-shirt Streetwear",
    price: 29.99,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqr78inhtUBlJASU4a7OjpM5VG-7-g9rUmsg&s",
  },
  {
    _id: "2",
    name: "Hoodie Oversize",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1721896870544-2052acfec8d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9vZGllJTIwb3ZlcnNpemV8ZW58MHx8MHx8fDA%3D",
  },
  {
    _id: "3",
    name: "Casquette Classic",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1656166229825-8bb5c3214111?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fENhc3F1ZXR0ZSUyMENsYXNzaWN8ZW58MHx8MHx8fDA%3D",
  },
];

const ListProd = ({ products, isProfile }) => {
  const toDisplay = products && products.length > 0 ? products : fallbackProducts;

  return (
    <div className="product-list">
      {toDisplay.map((elt) => (
        <CardProd product={elt} key={elt._id} />
      ))}
    </div>
  );
};

export default ListProd;
