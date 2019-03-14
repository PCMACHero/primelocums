import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import HomePage from './homepage/homepage';
import Clients from './clients/clients';
import JobSearch from './jobsearch/jobsearch';
import About from './about/about';
import Footer from './footer/footer';
import LocumTenens from './locumtenens/locumtenens';


class App extends Component {
  linkFontStyle={color:"black"}
  render() {
    return (
      <BrowserRouter basename={"/primelocums"}>
        <React.Fragment>
          <nav>
            <div className="nav-wrapper white">
              <a href="#" className="brand-logo"><div className="logo"></div></a>
              {/* <div className="logo">hello</div> */}
              <ul id="nav-mobile" className="right hide-on-med-and-down blue-text">
                <li><Link to="/"><div style={this.linkFontStyle}>Home</div></Link></li>
                <li><Link to="/about"><div style={this.linkFontStyle}>About</div></Link></li>
                <li><Link to="/locumtenens"><div style={this.linkFontStyle}>Locum Tenens</div></Link></li>
                <li><Link to="/jobsearch"><div style={this.linkFontStyle}>Job Search</div></Link></li>
                <li><Link to="/clients"><div style={this.linkFontStyle}>Clients</div></Link></li>
                <li><Link to="/contact"><div style={this.linkFontStyle}>Contact Us</div></Link></li>
              </ul>
            </div>
          </nav>
          <Route path={`/`} exact component={HomePage}/>
          <Route path="/clients" exact component={Clients}/>
          <Route path="/jobsearch" exact component={JobSearch}/>
          <Route path="/about" exact component={About}/>
          <Route path="/locumtenens" exact component={LocumTenens}/>

          <Footer/>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
