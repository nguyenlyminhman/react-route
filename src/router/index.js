import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import News from '../components/News';
import NewsDetails from '../components/NewsDetails';
import Home from '../components/Home';
import Contact from '../components/Contact';


class RouterNews extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/tin-tuc" component={News} />
                <Route exact path="/tin-chi-tiet/:slug.:id.html" component={NewsDetails} />
                <Route exact path="/lien-he" component={Contact} />
            </div>
        );
    }
}

export default RouterNews;