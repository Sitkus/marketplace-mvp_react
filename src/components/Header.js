import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import 'assets/scss/components/Header.scss';

function Header() {
    const cartItems = useSelector(state => state.cart);
    const totalCartItemsQuantity = cartItems.reduce((previousValue, cartItem) => {
        return previousValue + cartItem.quantity;
    }, 0);

    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <NavLink to="/">90's shop</NavLink>
                </h1>

                <nav className="header__nav">
                    <ul className="nav-wrapper">
                        <li className="nav-wrapper__item">
                            <NavLink className="nav-wrapper__link" to="/">
                                Home
                            </NavLink>
                        </li>
                        |
                        <li className="nav-wrapper__item">
                            <NavLink className="nav-wrapper__link" to="cart">
                                Cart (
                                <span className={totalCartItemsQuantity ? 'nav-wrapper__link--green' : ''}>
                                    {totalCartItemsQuantity}
                                </span>
                                )
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
