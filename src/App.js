import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
    api_key = process.env.REACT_APP_API_KEY
    state = {
        progress: 10,
    }

    setProgress = (progress) => {
        this.setState({
            progress: progress,
        })
    }
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Navbar />
                    <LoadingBar
                        color='#f11946'
                        progress= {this.state.progress}
                    />
                    <Routes>
                        <Route exact index element={<News api_key={this.api_key} setProgress={this.setProgress} key="general" psize={6} category = "general" />} />
                        <Route exact path="/entertainment" element={<News api_key={this.api_key} setProgress={this.setProgress} key="entertainment" psize={6} category = "entertainment" />}/>
                        <Route exact path="/business" element={<News api_key={this.api_key} setProgress={this.setProgress} key="business" psize={6} category = "business" />}/>
                        <Route exact path="/general" element={<News api_key={this.api_key} setProgress={this.setProgress} key="general" psize={6} category = "general" />}/>
                        <Route exact path="/health" element={<News api_key={this.api_key} setProgress={this.setProgress} key="health" psize={6} category = "health" />}/>
                        <Route exact path="/science" element={<News api_key={this.api_key} setProgress={this.setProgress} key="science" psize={6} category = "science" />}/>
                        <Route exact path="/sports" element={<News api_key={this.api_key} setProgress={this.setProgress} key="sports" psize={6} category = "sports" />}/>
                        <Route exact path="/technology" element={<News api_key={this.api_key} setProgress={this.setProgress} key="technology" psize={6} category = "technology" />}/>
                        {/* </Route> */}
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}
