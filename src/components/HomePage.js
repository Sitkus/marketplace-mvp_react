import { Link } from 'react-router-dom';
import 'assets/scss/components/HomePage.scss';

function HomePage() {
    return (
        <article className="home">
            <h2 className="home__title">Welcome to our shop!</h2>

            <p className="home__paragraph">
                You are probably interested in{' '}
                <Link className="home__link" to="products/a">
                    A
                </Link>
                .
            </p>

            <p className="home__paragraph">
                Check out the newest product{' '}
                <Link className="home__link" to="products/b">
                    B
                </Link>
                !
            </p>
        </article>
    );
}

export default HomePage;
