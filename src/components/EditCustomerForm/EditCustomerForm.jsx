import { useEffect, useState } from 'react'; 
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'; 
import Modal from 'react-bootstrap/Modal'
import axios from 'axios'; 
import style from './EditCustomerForm.module.css'



function EditCustomerForm() {
    const formLocation = useLocation();
    const navigate = useNavigate();
    const { id } = useParams(); 
    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false); 
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("Success!");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: 0
    })

    useEffect(()=> {
        setFormData(formLocation.state)
    }, [])
    
    function handleChange(event){
        
        const { name, value } = event.target; 
        
        console.log(name, value)
        setFormData({ ...formData, [name]: value }) 
        console.log(formData)
    }
    
    async function handleSubmit(event){
        event.preventDefault();
        console.log(event);
        const form = event.target;

        if (form.checkValidity() === false && id === undefined) {
            event.stopPropagation(); 
            setValidated(true); 
        } else {
            if (id) {
            
            try {
                const response = await axios.put(`http://127.0.0.1:5000/customers/${id}`,
                    formData,
                    {
                    headers: {
                        "Content-Type": "application/json"
                    }
                    }
                )
            
                console.log(response)
                setMessage(`Successfully Updated Customer: ${formData.name}`)
                
                } catch(error) {
                console.log(error)
                setMessageType("Error")
                setMessage("Error Updating User to the Server. Please Try Again")
                }
            } else {
            
                    try {
                    const response = await axios.post(`http://127.0.0.1:5000/customers`,
                    formData,
                    {
                        headers: {
                        "Content-Type": "application/json"
                        }
                    }
                    )
                    
                    console.log(response)
                    setMessage(`Successfully Added Customer: ${formData.name}`)
                    
                    
                } catch(error) {
                    console.log(error)
                }
        
            }
        setShow(true);
        
    }
}

    function handleClose(){
        setShow(false);
        navigate('/customers')
    }
    
    return (
        <Container className='containerbox'>
        <div className='form-container'>
        <Form noValidate validated={validated} onSubmit={handleSubmit} className="border border-white rounded p-4">
        <h3>Edit Customers</h3>
        <FloatingLabel
            htmlFor="name"
            label="Name"
            className="mb-3 text-dark"
        >
            <Form.Control type="text" size="sm" id="name" name="name" pattern="[A-Z][a-z]*\s{0,1}([A-Z][a-z]*)*\i" placeholder="Name here" onChange={handleChange} required value={formData.name}/>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">Please Enter a Valid Name</Form.Control.Feedback>
        </FloatingLabel>
        <FloatingLabel
            htmlFor="email"
            label="Email"
            className="mb-3 text-dark"
        >
            <Form.Control type="email" id="email" name="email" pattern="[\w.]+@[\w]+[.][a-z]{2,}" placeholder="Email here" onChange={handleChange} required value={formData.email}/>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">Please Enter a Valid Email</Form.Control.Feedback>
        </FloatingLabel>
        <FloatingLabel
            htmlFor="phone"
            label="Phone"
            className="mb-3 text-dark"
        >
            <Form.Control type="text" id="phone" name="phone" pattern="[\d]{10}" placeholder="Phone here" onChange={handleChange} required value={formData.phone}/>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">Please Enter a Valid 10 Digit Phone #</Form.Control.Feedback>
        </FloatingLabel>
        
        <Button type="submit" className={`${style.button} btn btn-primary w-20`}>Submit</Button>
        </Form>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>{messageType}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{message}</Modal.Body>
        </Modal>
        </div>
        </Container>
    )
}

export default EditCustomerForm;