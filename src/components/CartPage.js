import { useSelector } from 'react-redux';

function CartPage() {
    const cartItems = useSelector(state => state.cart);

    return cartItems.length ? (
        <div>
            Are you ready to purchase these?
            <ul>
                {cartItems.map((cartItem, index) => (
                    <li key={`${cartItem.name}-${index}`}>{cartItem.name}</li>
                ))}
            </ul>
        </div>
    ) : (
        <div>Your cart is empty... :(</div>
    );
}

export default CartPage;
