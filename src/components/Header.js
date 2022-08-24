import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
    const cartItemsCount = useSelector(state => state.cart).length;

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
                        <Link to="cart">Cart ({cartItemsCount})</Link>
                    </li>
                </ul>
            </nav>
            <hr />
        </header>
    );
}

export default Header;
