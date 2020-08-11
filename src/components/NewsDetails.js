import React, { Component } from 'react';
import data from '../data/data.json'
class NewsDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        console.log(this.props);
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
                        }
                    })

                /* End chitiettintuc */}
                <div className="container">
                    <h3 className="card-title text-center">Tin Liên Quan</h3>
                    <div className="row">
                        <div className="card-deck">
                            <div className="card">
                                <a href="chitiet.html"> <img className="card-img-top" src="http://placehold.it/500x300" alt="" /></a>
                                <div className="card-body">
                                    <h4 className="card-title">Title </h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam fuga debitis aut, pariatur nam tempore, beatae iure non accusamus cumque, soluta exercitationem dolor facilis. Maiores possimus sint et aperiam magni?</p>
                                </div>
                            </div>
                            <div className="card">
                                <a href="chitiet.html"> <img className="card-img-top" src="http://placehold.it/500x300" alt="" /></a>
                                <div className="card-body">
                                    <h4 className="card-title">Title</h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum provident illum corporis impedit perspiciatis voluptas quos, assumenda quibusdam esse corrupti, dignissimos tempora accusamus nihil. Quo explicabo mollitia corrupti voluptas vel.</p>
                                </div>
                            </div>
                            <div className="card">
                                <a href="chitiet.html"> <img className="card-img-top" src="http://placehold.it/500x300" alt="" /></a>
                                <div className="card-body">
                                    <h4 className="card-title">Title</h4>
                                    <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            <div className="card">
                                <a href="chitiet.html"> <img className="card-img-top" src="http://placehold.it/500x300" alt="" /></a>
                                <div className="card-body">
                                    <h4 className="card-title">Title</h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error iste pariatur consectetur nulla beatae quia, aspernatur tempora, ducimus perspiciatis veniam enim eum delectus. Iure aliquid id amet perspiciatis porro eos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsDetails;