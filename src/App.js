import { Header } from './components/header/Header';
import { About } from './components/about/About';
import { ProductsList } from './components/productsList/ProductsList';
import { Main } from './components/main/Main';

function App() {
    return (
        <div className="App">
            <Header />
            <About />
            <ProductsList />
            <Main />
        </div>
    );
}

export default App;
