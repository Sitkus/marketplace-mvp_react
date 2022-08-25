import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, incrementItemQuantity } from '../store';

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
        <div>
            <h1>Product {currentProduct.name.toUpperCase()}</h1>
            <p>Price: {currentProduct.price} USD</p>

            <button onClick={addProductToCart}>Add to cart</button>

            <div>
                <img src={currentProduct.imageSrc} width="640" />
            </div>
        </div>
    );
}

export default ProductPage;
