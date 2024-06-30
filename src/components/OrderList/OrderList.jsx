import { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card"
// import Button from "react-bootstrap/Button"



function OrderList() {
    const [orders, setOrders] = useState([]);
    const [customers, setCustomers] = useState([])
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get(
                    "http://127.0.0.1:5000/orders"
                );
                setOrders(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        
    

    const getCustomer = async () => {
        try {
        const customerData = await axios.get('http://127.0.0.1:5000/customers')
            setCustomers(customerData.data)
        } catch (error) {
            console.log(error);
        }
    };

    const getProducts = async () => {
        try {
            const productData = await axios.get('http://127.0.0.1:5000/products')
            setProducts(productData.data)
        } catch (error) {
            console.log(error);
        }
    }
    getProducts();
    fetchOrders();
    getCustomer();
}, []);

    const getCustomerName = (customerId) => {
        const customer = customers.find(customer => customer.customer_id === customerId);
        return customer ? customer.name : "Unknown Customer";
    }

    const getProductName = (productId) => {
        const product = products.find(product => product.product_ids === productId);
        return product ? product.name : "Unknown Product"
    }



    return (
        <div>
            <h3>Orders</h3>
            {orders.map((order) => (
                <Card key={order.order_id} style={{ width: '14rem' }}>
                    <Card.Body>
                        <Card.Title>Order ID: {order.order_id}</Card.Title>
                        <Card.Text>
                            Date: {order.date}
                        </Card.Text>
                        <Card.Text>
                            Customer: {getCustomerName(order.customer_id)}
                        </Card.Text>
                        <Card.Text>
                            {getProductName(order.product_ids)}
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}

export default OrderList;
