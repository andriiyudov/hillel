import React, {Component} from 'react';
import Header from './header/Header';
import Body from './body/Body';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Header/>
                <Body/>
            </div>
        );
    }
}

export default App;
