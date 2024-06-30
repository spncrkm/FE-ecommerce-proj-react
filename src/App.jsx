import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CustomerForm from './components/CustomerForm/CustomerForm';
import CustomerList from './components/CustomerList/CustomerList';
import HomePage from './components/HomePage/HomePage';
import NotFound from './components/NotFound/NotFound';
import NavBar from './components/NavBar/NavBar';
import './App.css'
import ProductList from './components/ProductList/ProductList';
import ProductForm from './components/ProductForm/ProductForm';
import OrderList from './components/OrderList/OrderList'
import EditProductForm from './components/EditProductForm/EditProductForm';
import EditCustomerForm from './components/EditCustomerForm/EditCustomerForm';

// import { ShopContextProvider } from './context/shop-context';

function App() {
  

  return (
    <div id='app-container'>
      {/* <ShopContextProvider> */}
      <NavBar />
      <Routes>
        <Route path='/' element={ <HomePage />} />
        <Route path='*' element={ <NotFound />} />
        <Route path='/customers' element={ <CustomerList />} />
        <Route path='/add-customer' element={ <CustomerForm />} />
        <Route path='/edit-customers/:id' element={ <EditCustomerForm />} />
        <Route path='/products' element={ <ProductList />} />
        <Route path='/edit-product/:id' element={ <EditProductForm />} />
        <Route path='/add-products' element={ <ProductForm />} />
        <Route path='/orders' element={ <OrderList />} />
        
      </Routes>
      {/* </ShopContextProvider> */}
    </div>
  )
}

export default App