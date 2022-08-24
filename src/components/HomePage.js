import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <h2>Welcome to our shop!</h2>

            <p>
                You are probably interested in <Link to="products/a">A</Link>.
            </p>

            <p>
                Check out the newest product <Link to="products/b">B</Link>!
            </p>
        </div>
    );
}

export default HomePage;
