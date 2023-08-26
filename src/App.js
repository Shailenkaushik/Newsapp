import React, { Component } from 'react'
import Navbar from './Component.js/Navbar'
import News from './Component.js/News'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  
  state={
    progress: 0
  }
  setProgress=(progress)=>{
    this.setState({progress: progress})
  }
  render() {
    
    return (
    
      <>
      
      <BrowserRouter>
        <Navbar></Navbar>
        <LoadingBar
        height={4}
        color='#f11946'
        progress={this.state.progress}
        />
        
        <div className="container">
          <Routes>
            <Route exact path="/"  element={<News setProgress={this.setProgress} pageSize={5} key="general" country="in" category="general" />} />
            <Route exact path="/business"  element={<News setProgress={this.setProgress} pageSize={5} key="business" country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} pageSize={5} key="entertainment" country="in" category="entertainment" />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} pageSize={5} key="health" country="in" category="health" />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} pageSize={5} key="science" country="in" category="science" />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} pageSize={5} key="sports" country="in" category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} pageSize={5} key="technology" country="in" category="technology" />} />

            

          </Routes>
        </div>
      </BrowserRouter>
    </>
    )
  }
}


