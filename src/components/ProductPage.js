import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, incrementItemQuantity } from '../store';
import 'assets/scss/components/ProductPage.scss';

function ProductPage() {
    const { name } = useParams();
    const dispatch = useDispatch();
    const availableProducts = useSelector(state => state.items);
    const cartItems = useSelector(state => state.cart);
    const currentProduct = availableProducts.find(product => product.name === name);

    function addProductToCart() {
        const existingItemInCartIndex = cartItems.findIndex(item => item.name === currentProduct.name && item.quantity);

        if (existingItemInCartIndex >= 0) {
            dispatch(incrementItemQuantity({ index: existingItemInCartIndex }));
        } else {
            dispatch(addItem(currentProduct));
        }
    }

    return (
        <article className="product-page">
            <section className="card">
                <div>
                    <h2 className="card__title">Product {currentProduct.name.toUpperCase()}</h2>
                    <p className="card__price">Price: {currentProduct.price} USD</p>
                </div>

                <button className="card__button" onClick={addProductToCart}>
                    Add to cart
                </button>

                <img
                    className="card__image"
                    src={currentProduct.imageSrc}
                    alt={`Example image of a product: ${currentProduct.name.toUpperCase()}`}
                />
            </section>
        </article>
    );
}

export default ProductPage;
