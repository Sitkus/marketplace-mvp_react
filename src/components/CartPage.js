import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../store';
import 'assets/scss/components/CartPage.scss';

function CartPage() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart);

    function removeCartItem({ name, index }) {
        if (window.confirm(`Are you sure you want to delete item: ${name}?`)) {
            dispatch(removeItem({ index }));
            alert(`Item by the name of: ${name} was deleted, come back anytime!`);
        }
    }

    return cartItems.length ? (
        <div className="cart-page">
            <h2 className="cart-page__title">Are you ready to purchase these?</h2>

            <ul className="cart-page__list">
                {cartItems.map((cartItem, index) => (
                    <li key={`${cartItem.name}-${index}`} className="cart-item">
                        <h3 className="cart-item__title">
                            {cartItem.name} ({cartItem.quantity})
                        </h3>
                        <button
                            className="cart-item__button"
                            onClick={() => removeCartItem({ name: cartItem.name, index })}
                        >
                            Delete item
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    ) : (
        <div className="cart-page cart-page--empty">Your cart is empty... :(</div>
    );
}

export default CartPage;
