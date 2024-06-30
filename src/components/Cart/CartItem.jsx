// import React, { useContext } from "react";
// import getProducts from "../ProductList/ProductList";
// import Button from "react-bootstrap/esm/Button";
// import { ShopContext } from "../../context/shop-context";

// const CartItem = (props) => {
//   const { getProducts } = props.data;
//   const { cartItems } = useContext(ShopContext)
//   return (
//     <div className="cartItem">
//       <Card key={product.product_id} style={{ width: "18rem" }}>
//         <Card.Img variant="top" src="" />
//         <Card.Body>
//           <Card.Title>{product.name}</Card.Title>
//           <Card.Text>${product.price}</Card.Text>
//         </Card.Body>
//         <Card.Body>
//             <Button> - </Button>
//             <input value={cartItems[getProducts.id]} />
//             <Button> + </Button>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// };

// export default CartItem;
