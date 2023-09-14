import React, { Component } from "react";

export default class NewsItems extends Component {
    render() {
        let {tittle, description, imageUrl, url} = this.props;
        let ago = this.props.date;
        let d = new Date(ago);
        let hours = d.getHours();
        let days = d.getDay();
        return (
            <div>
                <div className="card" >
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{tittle}</h5>
                        <p className="card-text">
                            {description}
                        </p>
                        <p className="card-text"><small className="text-body-secondary">Last updated {hours>=24? days: hours} {hours>=24? "day": "hours"} ago</small></p>
                        <div className="d-flex justify-content-evenly">
                            <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary mx-2">
                                Read article
                            </a>
                            <a href={"/views.html"} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary mx-2">
                                Public Views
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
