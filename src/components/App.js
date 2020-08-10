import React, { Component } from 'react';
import '../css/App.css';
import Nav from './Nav';
import Home from './Home';
import Footer from './Footer';
import News from './News'
import NewsDetails from './NewsDetails'
import RouterNews from '../router';

class App extends Component {
    render() {
        return (
            <div>
                <Nav />
                {/* <News /> */}
                {/* <Home /> */}
                {/* <NewsDetails /> */}
                <RouterNews />
                <Footer />
            </div>
        );
    }
}

export default App;