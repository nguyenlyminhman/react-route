import React, { Component } from 'react';
import NewsItem from './NewsItem';
import data from '../data/data.json'

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div>
                    <header className="masthead tintuc">
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-lg-12 my-auto">
                                    <div className="header-content mx-auto">
                                        <h1 className="mb-1 text-center">Tin Tức</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    {/* End Navigation */}
                    {/* Begin tintuc */}
                    <div className="container">
                        <div className="row ">
                            {data.map((value, key) =>
                                <NewsItem
                                    key={key}
                                    id={value.id}
                                    tieuDe={value.tieuDe}
                                    trichDan={value.trichDan}
                                    noiDung={value.noiDung}
                                    anh={value.anh}
                                />
                            )}

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default News;