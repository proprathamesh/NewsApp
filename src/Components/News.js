import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
    /* 
    business
    entertainment
    general
    health
    science
    sports
    technology
    */
    static defaultProps = {
        country: "in",
        category: "general",
        psize: 6,
    }

    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        psize: PropTypes.number,
    }

    constructor() {
        super();
        this.state = {
            article: [],
            loading: true,
            page: 1,
            results: 0,
        };
    }

    setProgress(progress){
        this.setState({progress:progress})
    }
  // this runs after when render method runs
  // first constructor
  // second render
  // third mount

    async updatePage(n){
        this.setState({loading:true});
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api_key}&page=${this.state.page+n}&pagesize=${this.props.psize}`;
        this.props.setProgress(30);
        let data = await fetch(url);
        this.props.setProgress(60);
        let parsedData = await data.json();
        this.props.setProgress(100);
        this.setState({
            article: parsedData.articles,
            results: parsedData.totalResults,
            page: this.state.page + n,
            loading:false,
        });
    }
    async componentDidMount() {
        this.updatePage(0);
        // this.props.setProgress(100);
    }

    fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api_key}&page=${this.state.page+1}&pagesize=${this.props.psize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            article: this.state.article.concat(parsedData.articles),
            page: this.state.page + 1,
            loading:false,
        });
    };

    render() {
        return (
            <div>
                <InfiniteScroll
                    dataLength={this.state.article.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.page >= (this.state.results/this.props.psize)? false:true}
                    loader={<Spinner/>}
                >
                    <div className="container">
                    <div className="row justify-content-evenly">
                        {this.state.loading && <Spinner/>}
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
                                    date = {element.publishedAt}
                                    />
                                </div>
                            );
                        })}
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
        );
    }
}
