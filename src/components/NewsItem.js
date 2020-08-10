import React, { Component } from 'react';
import fn from '../common'

class NewsItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="col-4 mt-3">
                <div className="card-deck">
                    <div className="card">
                        <a href={"tin-tuc/" + fn.toSlug(this.props.tieuDe) + ".html"}>
                            <img className="card-img-top" src={this.props.anh} alt="yub yeb" />
                        </a>
                        <div className="card-body">
                            <a href={"tin-tuc/" + fn.toSlug(this.props.tieuDe) + ".html"}>
                                <h4 className="card-title">{this.props.tieuDe}</h4>
                            </a>
                            <p className="card-text">{this.props.trichDan}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsItem;