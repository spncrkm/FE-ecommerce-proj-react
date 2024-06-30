import { useState, useEffect } from 'react'; 
import { Link, useNavigate } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import axios from 'axios';



function CustomerList() {
    const navigate = useNavigate();
    const [ customers, setCustomers ] = useState([]);
    const [ selectedCustomerId, setCustomerId] = useState(null);
        
        useEffect( () => {
        
        console.log('Component is Mounted')
        
        async function fetchCustomers(){
            try {
                const response = await axios.get('http://127.0.0.1:5000/customers')
                setCustomers(response.data); 
            } catch (error){
                console.log(error)
            }
        }

        fetchCustomers();

        }, []); 
        
        useEffect( () => {
        if (selectedCustomerId !== null){
            alert(`New customer selected: ID ${selectedCustomerId}`)
        }
        }, [selectedCustomerId]);
        
        function handleCustomerId(id){
        setCustomerId(id);
        }
        
        async function handleDeleteCustomer(id){
            try {
                const response = await axios.delete(`http://127.0.0.1:5000/customers/${id}`)
                console.log(response)
                setCustomers(customers.filter(customer => customer.customer_id !== id ));
            } catch(error) {
                console.log(error)
            }
        }
        
        return (
            <Container className='border border-white rounded p-4 w-75'>
                <h3>Customers</h3>
                <ListGroup>
                    {customers.map( (customer) => (
                        <Container key={customer.customer_id} className='mb-3'>
                            <ListGroup.Item onClick={ () => handleCustomerId(customer.customer_id)} className='rounded border mb-2'>{customer.name}</ListGroup.Item>
                            <Link to={`/edit-customers/${customer.customer_id}`} state={customer}>Edit</Link>
                            {/* <Button onClick={ () => navigate(`/edit-customers/${customer.customer_id}`)} variant='outline-info' size='sm'>Edit</Button> */}
                            <Button onClick={ () => handleDeleteCustomer(customer.customer_id)} variant='outline-danger' size='sm' className='ms-2'>Delete</Button>
                        </Container>
                    ))}
                </ListGroup>
            </Container>
        )
    
    }

export default CustomerList

