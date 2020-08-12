import React, { Component } from 'react';
import fn from '../common'
import { Link } from 'react-router-dom';

class NewsRelated extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="card">
                <Link to={fn.toSlug(this.props.tieuDe) + "." + this.props.id + ".html"}>
                    <img className="card-img-top" src={this.props.anh} alt="yub yeb" />
                </Link>
                <div className="card-body">
                    <Link to={fn.toSlug(this.props.tieuDe) + "." + this.props.id + ".html"}>
                        <h4 className="card-title">{this.props.tieuDe} </h4>
                    </Link>
                    <p className="card-text">{this.props.trichDan}</p>
                </div>
            </div>
        );
    }
}

export default NewsRelated;