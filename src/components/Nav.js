import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div className="container">
                    <NavLink className="navbar-brand js-scroll-trigger" to="/">React Router - News</NavLink>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink to="/tin-tuc" className="nav-link js-scroll-trigger">Tin Tức</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/tin-chi-tiet" className="nav-link js-scroll-trigger">Chi Tiết</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/lien-he" className="nav-link js-scroll-trigger">Liên Hệ</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;