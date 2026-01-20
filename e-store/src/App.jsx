import Catalog from './components/Catalog';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Catalog />
            <Footer />
        </div>
    );
}

export default App;
