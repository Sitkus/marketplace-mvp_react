import { Link } from 'react-router-dom';
import 'assets/scss/components/HomePage.scss';

function HomePage() {
    return (
        <article className="home-page">
            <h2 className="home-page__title">Welcome to our shop!</h2>

            <p className="home-page__paragraph">
                You are probably interested in{' '}
                <Link className="home-page__link" to="products/a">
                    A
                </Link>
                .
            </p>

            <p className="home-page__paragraph">
                Check out the newest product{' '}
                <Link className="home-page__link" to="products/b">
                    B
                </Link>
                !
            </p>
        </article>
    );
}

export default HomePage;
