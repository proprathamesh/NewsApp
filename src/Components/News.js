import React, { Component } from "react";
import NewsItems from "./NewsItems";

export default class News extends Component {
  constructor() {
    super();
    console.log("Constructor called");
    this.state = {
      article: [],
      loading: false,
      page: 1,
      results: 0
    };
  }

  // this runs after when render method runs
  // first constructor
  // second render
  // third mount
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=abefecb2a70a4e77aea49ce303ff2696&page=${this.state.page}&pagesize=20`;
    // fetching api
    // async function waits for promises to be solved
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ article: parsedData.articles, results: parsedData.totalResults});
  }

  handleNextclick = async ()=>  {
    if(this.state.page < Math.ceil(this.state.results/20)){
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=abefecb2a70a4e77aea49ce303ff2696&page=${this.state.page+1}&pagesize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({ article: parsedData.articles, page: this.state.page+1});
    }
  }

  handlePreclick = async ()=> {
    if(this.state.page != 1){
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=abefecb2a70a4e77aea49ce303ff2696&page=${this.state.page-1}&pagesize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({ article: parsedData.articles, page: this.state.page-1});
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-evenly">
          {this.state.article.map((element) => {
            return (
              <div className="col-4 my-4" key={element.url}>
                <NewsItems
                  tittle={element.title}
                  description={
                    element.description ? element.description : "No description"
                  }
                  imageUrl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_960_720.jpg"
                  }
                  url={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-between my-5">
          <button type="button" className="btn btn-dark" onClick={this.handlePreclick}>Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextclick}>Next</button>
        </div>
      </div>
    );
  }
}
