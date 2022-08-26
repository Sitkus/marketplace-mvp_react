import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

afterEach(cleanup);

describe('App.js', () => {
    test('init renders Header with HomePage', () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );
        const header = screen.getByTestId('header');
        const homePage = screen.getByTestId('home-page');

        expect(header).toBeTruthy();
        expect(homePage).toBeTruthy();
    });

    test('renders links to products', () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );
        const productA = screen.getByText('A');
        const productB = screen.getByText('B');

        expect(productA.href).toContain('/products/a');
        expect(productB.href).toContain('/products/b');
    });
});
