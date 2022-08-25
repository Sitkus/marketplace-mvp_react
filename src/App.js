import { BrowserRouter as Router } from 'react-router-dom';
import Header from 'components/Header.js';
import AppRoutes from 'routes';
import 'assets/scss/global.scss';

function App() {
    return (
        <Router>
            <main className="main-wrapper">
                <Header />
                <AppRoutes />
            </main>
        </Router>
    );
}

export default App;
