import React, { useState } from 'react'
import axios from 'axios';


const OrderForm = () => {

    const [order, setOrder] = useState([]);
    const [orderFormData, setOrderFormData] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        
    
        const postOrder = async () => {
            const response = await axios.post('http://127.0.0.1:5000/orders')

    }
    }


  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Product</Form.Label>
        <Form.Control type="text" placeholder="Product name" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Place Order
      </Button>
    </Form>
  )
}

export default OrderForm
