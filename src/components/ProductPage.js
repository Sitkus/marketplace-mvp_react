import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, incrementItemQuantity } from '../store';
import 'assets/scss/components/ProductPage.scss';

function ProductPage() {
    const { name } = useParams();
    const dispatch = useDispatch();

    const availableProducts = useSelector(state => state.items);
    const cartItems = useSelector(state => state.cart);
    const currentProduct = availableProducts.find(product => product.name.toLowerCase() === name.toLowerCase());

    function addProductToCart() {
        const existingItemInCartIndex = cartItems.findIndex(
            item => item.name.toLowerCase() === currentProduct.name.toLowerCase() && item.quantity
        );

        if (existingItemInCartIndex >= 0) {
            dispatch(incrementItemQuantity({ index: existingItemInCartIndex }));
            alert('Item is already in your cart! We have incremented its quantity');
        } else {
            dispatch(addItem(currentProduct));
        }
    }

    return currentProduct ? (
        <article className="product-page">
            <section className="card">
                <div className="card__title-wrapper">
                    <h2 className="card__title">Product {currentProduct.name}</h2>
                    <p className="card__price">Price: {currentProduct.price} USD</p>
                </div>

                <button className="card__button" onClick={addProductToCart}>
                    Add to cart
                </button>

                <img
                    className="card__image"
                    src={currentProduct.imageSrc}
                    alt={`Example of a product: ${currentProduct.name}`}
                />
            </section>
        </article>
    ) : (
        <div className="product-page">
            Product by the name: <strong>{name}</strong> doesn't exist, please return and try again.
        </div>
    );
}

export default ProductPage;
