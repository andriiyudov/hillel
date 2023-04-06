import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {ErrorPage} from './error-page/error-page';
import {MainPage} from './main-page/main-page';
import {InfoPage} from './info-page/info-page';
import {ContactsPage} from './contacts-page/contacts-page';
import './App.css';
import {Menu} from './menu/menu';


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Menu/>
                <Routes>
                    <Route path="/" element={<MainPage />}/>
                    <Route path="/contacts" element={<ContactsPage />}/>
                    <Route path="/info/:productId" element={<InfoPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
