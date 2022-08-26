import { Link } from 'react-router-dom';
import 'assets/scss/components/HomePage.scss';

function HomePage() {
    return (
        <article className="home-page" data-testid="home-page">
            <section className="home-page__title-wrapper">
                <h2 className="home-page__title">Welcome to our shop!</h2>
                <h5 className="home-page__subtitle">
                    We do sell what you're looking for, so don't be shy, look around.
                </h5>
            </section>

            <p className="home-page__paragraph">
                I suppose you are interested in{' '}
                <Link className="home-page__link" to="products/a">
                    A
                </Link>
                .
            </p>

            <p className="home-page__paragraph">
                Don't forget to check out the newest product{' '}
                <Link className="home-page__link" to="products/b">
                    B
                </Link>
                !
            </p>
        </article>
    );
}

export default HomePage;
