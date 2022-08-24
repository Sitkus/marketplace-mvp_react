import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../store';

function ProductPage() {
    const { name } = useParams();
    const products = useSelector(state => state.items);
    const currentProduct = products.find(product => product.name === name);
    const dispatch = useDispatch();

    function addToCart() {
        dispatch(addItem(currentProduct));
        console.log('Added to the cart');
        return true;
    }

    return (
        <div>
            <h1>Product {currentProduct.name.toUpperCase()}</h1>
            <p>Price: {currentProduct.price} USD</p>

            <button onClick={addToCart}>Add to cart</button>

            <div>
                <img src={currentProduct.imageSrc} width="640" />
            </div>
        </div>
    );
}

export default ProductPage;
