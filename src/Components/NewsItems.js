import React, { Component } from "react";

export default class NewsItems extends Component {
  render() {
    let {tittle, description, imageUrl, url} = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{tittle}</h5>
            <p className="card-text">
              {description}
            </p>
            <div className="d-flex justify-content-evenly">
              <a href={url} target="_blank" className="btn btn-sm btn-primary mx-2">
                  Read article
              </a>
              <a href={"/views.html"} target="_blank" className="btn btn-sm btn-primary mx-2">
                  Public Views
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
