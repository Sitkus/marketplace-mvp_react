import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../store';

function CartPage() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart);

    function removeCartItem(index) {
        dispatch(removeItem({ index }));
    }

    return cartItems.length ? (
        <div>
            Are you ready to purchase these?
            <ul>
                {cartItems.map((cartItem, index) => (
                    <li key={`${cartItem.name}-${index}`}>
                        {cartItem.name}
                        <button onClick={() => removeCartItem(index)}>Delete item</button>
                    </li>
                ))}
            </ul>
        </div>
    ) : (
        <div>Your cart is empty... :(</div>
    );
}

export default CartPage;
