import React, { Component } from 'react';
import data from '../data/data.json'
import NewsRelated from './NewsRelated'
class NewsDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        let count = 1;
        return (

            <div>
                <header className="masthead tintuc">
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-lg-12 my-auto">
                                <div className="header-content mx-auto">
                                    <h1 className="mb-1 text-center">Tin Chi Tiết</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* End Navigation */}
                {/* Begin chitiettintuc */
                    data.map((val, key) => {
                        if (val.id === parseInt(this.props.match.params.id)) {
                            return (
                                <div className="jumbotron jumbotron-fluid" key={key}>
                                    <div className="container">
                                        <img src={val.anh} alt="" className="img-fluid" />
                                        <p className="lead">{val.tieuDe}</p>
                                        <hr className="my-2" />
                                        <p>{val.trichDan}</p>
                                        <p>{val.noiDung}</p>
                                        <p className="lead">
                                            <a className="btn btn-primary btn-lg" href="Jumbo action link" role="button">Jumbo action name</a>
                                        </p>
                                    </div>
                                </div>
                            )
                        }else{
                            return <div />
                        }
                    })

                /* End chitiettintuc */}
                <div className="container">
                    <h3 className="card-title text-center">Tin Liên Quan</h3>
                    <div className="row">
                        <div className="card-deck">

                            {
                                data.map((val, key) => {
                                    if (val.id !== parseInt(this.props.match.params.id)) {
                                        if (count < 5) {
                                            count++
                                            return (
                                                <NewsRelated
                                                    key={key}
                                                    id={val.id}
                                                    tieuDe={val.tieuDe}
                                                    anh={val.anh}
                                                    trichDan={val.trichDan}
                                                >
                                                </NewsRelated>
                                            )
                                        }else{
                                            return <div />;
                                        }
                                    }else{
                                        return <div />;
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsDetails;