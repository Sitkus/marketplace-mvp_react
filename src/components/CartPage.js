import { useSelector, useDispatch } from 'react-redux';
import { removeItem, incrementItemQuantity, decrementItemQuantity, clearCartItems } from '../store';
import 'assets/scss/components/CartPage.scss';

function CartPage() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart);
    const totalAmount = cartItems.reduce((previousValue, item) => {
        previousValue += getCartItemTotalPrice(item);
        return previousValue;
    }, 0);

    function removeCartItem({ name, index }) {
        if (window.confirm(`Are you sure you want to delete item: ${name}?`)) {
            dispatch(removeItem({ index }));
            alert(`Item by the name of: ${name} was deleted, come back anytime!`);
        }
    }

    function incrementCartItemQuantity(index) {
        dispatch(incrementItemQuantity({ index }));
    }

    function decrementCartItemQuantity(item, index) {
        if (item.quantity === 1) {
            removeCartItem(item);
        } else {
            dispatch(decrementItemQuantity({ index }));
        }
    }

    function getCartItemTotalPrice(item) {
        return item.price * item.quantity;
    }

    function buyNow() {
        alert('You have successfully purchased your items, thank you!');
        dispatch(clearCartItems());
    }

    return cartItems.length ? (
        <div className="cart-page">
            <h2 className="cart-page__title">Are you ready to purchase these?</h2>

            <ul className="cart-page__list">
                {cartItems.map((cartItem, index) => (
                    <li key={`${cartItem.name}-${index}`} className="cart-item">
                        <div className="cart-item__description">
                            <strong className="cart-item__title">
                                {cartItem.name} ({cartItem.quantity})
                            </strong>

                            <span>{getCartItemTotalPrice(cartItem)} USD</span>
                        </div>

                        <div className="cart-item__buttons-wrapper">
                            <button className="cart-item__button" onClick={() => incrementCartItemQuantity(index)}>
                                +
                            </button>

                            <button
                                className="cart-item__button"
                                onClick={() => decrementCartItemQuantity(cartItem, index)}
                            >
                                -
                            </button>

                            <button
                                className="cart-item__button"
                                onClick={() => removeCartItem({ name: cartItem.name, index })}
                            >
                                Delete item
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            <div className="total-amount">
                <p className="total-amount__title">Total amount: </p>
                <p className="total-amount__price">{totalAmount} USD</p>
            </div>

            <div className="buy-now">
                <button className="buy-now__button" onClick={() => buyNow()}>Buy Now</button>
            </div>
        </div>
    ) : (
        <div className="cart-page cart-page--empty">Your cart is empty... :(</div>
    );
}

export default CartPage;
