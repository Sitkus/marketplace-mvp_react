import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
    const cartItems = useSelector(state => state.cart);
    const totalCartItemsQuantity = cartItems.reduce((previousValue, cartItem) => {
        return previousValue + cartItem.quantity;
    }, 0);

    return (
        <header>
            <h1>90s shop</h1>

            <nav>
                <ul style={{ listStyleType: 'none', display: 'flex' }}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    |
                    <li>
                        <Link to="cart">Cart ({totalCartItemsQuantity})</Link>
                    </li>
                </ul>
            </nav>
            <hr />
        </header>
    );
}

export default Header;
