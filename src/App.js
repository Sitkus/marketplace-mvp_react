import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header.js';
import AppRoutes from './routes';

function App() {
    return (
        <Router>
            <main>
                <Header />
                <AppRoutes />
            </main>
        </Router>
    );
}

export default App;
