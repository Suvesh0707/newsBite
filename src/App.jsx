import './App.css';
import React, { Component } from 'react';
import Navbar from './components/navbar';
import NewsContainer from './components/newsContainer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export class App extends Component {

  state = {
    progress :0
  }
  setProgress = (progress) => {
    this.setState({progress:progress})
  }


  render() {
    return (
      <div className='bg-[url("image.png")]'>
        <Router>
          <Navbar />
          <LoadingBar
        color='#f11946'
        progress={this.state.progress}/>
          <Routes>
            <Route path="/" element={<NewsContainer q="us" />} />
            <Route path="/entertainment" element={<NewsContainer q="entertainment"/>} />
            <Route path="/general" element={<NewsContainer q="general"/>} />
            <Route path="/health" element={<NewsContainer q="health"/>} />
            <Route path="/business" element={<NewsContainer q="business"/>} />
            <Route path="/science" element={<NewsContainer q="science"/>} />
            <Route path="/sports" element={<NewsContainer q="sports"/>} />
            <Route path="/technology" element={<NewsContainer q="technology"/>} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
