import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1>
                90s shop
            </h1>

            <nav>
                <ul style={{ listStyleType: 'none', display: 'flex' }}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    |
                    <li>
                        <Link to="cart">Cart ({0})</Link>
                    </li>
                </ul>
            </nav>
            <hr />
        </header>
    );
}

export default Header;
