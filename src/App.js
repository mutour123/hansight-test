import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
// import HomeHeader from './components/HomeHeader/index.jsx'
import HomeHeader from './components/HomeHeader/index'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    <HomeHeader/>

                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <div>niaoho</div>
            </div>
        );
    }
}

export default App;
