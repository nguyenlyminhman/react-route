import React, { Component } from 'react';
import '../css/App.css';
import Nav from './Nav';
import Home from './Home';
import Footer from './Footer';
import News from './News'
import NewsDetails from './NewsDetails'

class App extends Component {
    render() {
        return (
            <div>
                <Nav />
                <News />
                {/* <Home /> */}
                {/* <NewsDetails /> */}
                <Footer />
            </div>
        );
    }
}

export default App;