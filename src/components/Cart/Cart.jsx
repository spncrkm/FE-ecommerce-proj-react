import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";

const Cart = ({ items, handleDeleteItem }) => {
  const todayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const dd = String(today.getDate()).padStart(2, "0");

    const formattedDate = `${yyyy}-${mm}-${dd}`;
    return formattedDate;
  };

  const handleSubmit = () => {
    const customer_id = parseInt(prompt("Please enter customer id"));
    const ids = items.map((item) => item.product_id);

    const data = {
      customer_id: customer_id,
      date: todayDate(),
      product_ids: ids,
    };

    try {
      axios.post("http://127.0.0.1:5000/orders", data);
    } catch (error) {
      console.log(error);
    }
  };

  let sum = 0;
  const calcTotal = () => {
    items.forEach((item) => {
      sum += item.price;
    });
    return sum;
  };

  return (
    <>
    <div className="d-flex justify-content-center">
        <h1>Cart</h1>
      </div>
    <div className="cart-items">
      
      {items.map((product) => (
        <Card
          id="cart-card"
          key={product.product_id}
          style={{ width: "18rem" }}
        >
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>${product.price}</Card.Text>
          </Card.Body>
          <Button onClick={() => handleDeleteItem(product.product_id)}>
            Delete
          </Button>
        </Card>
      ))}
    </div>
    <div className="d-flex justify-content-center" id="cart-total">
      Cart Total: ${calcTotal()}
    </div>
    <div className="justify-content-center d-flex mt-4">
      <Button onClick={handleSubmit}>Submit Order</Button>
      </div>
    </>
  );
};

export default Cart;
