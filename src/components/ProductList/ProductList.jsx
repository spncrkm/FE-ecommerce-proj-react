import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Cart from '../Cart/Cart';
// import { ShopContext } from '../../context/shop-context';




function ProductList() {
    const [getProducts, setGetProducts] = useState([])
    const [selectedProductId, setProductId] = useState(null);
    const [cartItem, setCartItem] = useState([])
    // const { addToCart, cartItems } = useContext(ShopContext);
    const navigate = useNavigate();

        useEffect( () => {

        async function fetchProducts() { 
            try {
            const response = await axios.get('http://127.0.0.1:5000/products')
            setGetProducts(response.data);
            } catch (error) {
                console.error(error)
            }
        }
        fetchProducts();
    }, []);


        const handleProductId = (id) => {
            setProductId(id)
        }

        async function handleDeleteProduct(id) {
            try {
                const response = await axios.delete(`http://127.0.0.1:5000/products/${id}`)
                console.log(response)
                setGetProducts(getProducts.filter(product => product.product_id !== id ));
            } catch(error) {
                console.log(error)
            }
        }

        const handleAdd = (product) => {
            setCartItem([...cartItem, product])
        }

        const handleDeleteItem = (id) => {
            console.log(id)
            const filteredCartItem = cartItem.filter((item) => {
                console.log(item)
                return item.product_id !== id
            })
            setCartItem(filteredCartItem)
        }
        
    return (
        <>
        <h1>Products</h1>
        <div className='d-flex'>
            {getProducts.map( (product) => (
            <Card id='product-card' key={product.product_id} style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>${product.price}</Card.Text>
                </Card.Body>
                <Card.Body onClick={ () => handleProductId(product.product_id)} className='rounded mb-2' id='body-2'>
                    <Button onClick={ () => handleAdd(product)} variant='success'>Add To Cart</Button>
                    <Link to={`/edit-product/${product.product_id}`} state={product}>Edit</Link>
                    {/* <Button onClick={ () => navigate(`/edit-product/${product.product_id}`)} variant='outline-info' size='sm'>Edit</Button> */}
                    <Button onClick={ () => handleDeleteProduct(product.product_id)} id='delete-btn' size='sm'>Delete</Button>
                </Card.Body>
            </Card>
        ))}
        </div>
        <div>
        <Cart items={cartItem} handleDeleteItem={handleDeleteItem}/>
        </div>
        </>
    )
}

export default ProductList
