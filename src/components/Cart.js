import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch(clearCart);
    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="cart-container">
            <div>
                <button onClick={handleClearCart}>Clear cart</button>
            </div>
            {cartItems.length !== 0 ? cartItems.map((cartItem) => <ItemList key={cartItem?.card?.info?.id} item={cartItem}/>) : "Cart is empty, add items to the cart"}
        </div>
    )
};

export default Cart;