import { useParams } from 'react-router-dom';

function ProductPage() {
    const { name } = useParams();

    function addToCart() {
        console.log('Added to the cart')
        return true
    }

    return (
          <div>
                <h1>Product {name.toUpperCase()}</h1>
                <p>Price: {30} USD</p>

                <button onClick={addToCart}>
                  Add to cart
                </button>

                <div><img src={'../'} width="640" /></div>

          </div>

    );
}

export default ProductPage;
