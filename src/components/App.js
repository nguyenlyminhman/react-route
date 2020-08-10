import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
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
            <Router>
                <div>
                    <Nav />
                    <RouterNews />
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;