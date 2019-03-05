import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import './App.css';
import 'materialize-css/dist/css/materialize.css'
import HomePage from './homepage/homepage';


class App extends Component {
  linkFontStyle={color:"black"}
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <nav>
            <div className="nav-wrapper white">
              <a href="#" className="brand-logo"><div className="logo"></div></a>
              {/* <div className="logo">hello</div> */}
              <ul id="nav-mobile" className="right hide-on-med-and-down blue-text">
                <li><Link to="/"><div style={this.linkFontStyle}>Home</div></Link></li>
                <li><Link to="/about"><div style={this.linkFontStyle}>About</div></Link></li>
                <li><Link to="/clients"><div style={this.linkFontStyle}>Clients</div></Link></li>
                <li><Link to="/clients"><div style={this.linkFontStyle}>Contact Us</div></Link></li>
              </ul>
            </div>
          </nav>
          <Route path="/" exact component={HomePage}/>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
