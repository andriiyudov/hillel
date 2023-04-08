import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {ErrorPage} from './error-page/error-page';
import {MainPage} from './main-page/main-page';
import {InfoPage} from './info-page/info-page';
import {Menu} from './menu/menu';
import {Products} from './products/products';
import {ProductPage} from './product-page/product-page';

import './App.css';


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Menu/>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:productId" element={<ProductPage />} />
                    <Route path="/info" element={<InfoPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
