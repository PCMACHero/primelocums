import React, { Component } from 'react';
import {BrowserRouter, Route, Link, Redirect} from 'react-router-dom'
import 'animate.css'
// import { Dropdown, Menu } from 'semantic-ui-react'
import './App.css';
// import 'materialize-css/dist/css/materialize.min.css'
import HomePage from './homepage/homepage';
import Clients from './clients/clients';
import JobSearch from './jobsearch/jobsearch';
import About from './about/about';
import Footer from './footer/footer';
import LocumTenens from './locumtenens/locumtenens';
import './locumtenens/locumtenens.css'

import Departments from './clients/departments';
import Faqs from './clients/faqs';
import Nav from './nav/nav';
import Contact from './contact/contact';


class App extends Component {
  state={
    linkClick:null,
    showClientTab:false,
    clientRedirect: null,
    dropDownOpen:false
    
  }
  clientMenuOff=()=>{
    this.setState({
      clientRedirect:false
    })
  }
  clientMenu=(e,d)=>{

    console.log(d.text)
    if(d.text==="Departments"){
      this.setState({
        clientRedirect:"departments",
        dropDownOpen: false
      })
    } else if(d.text==="FAQs"){
      this.setState({
        clientRedirect:"faqs",
        dropDownOpen: false
      })
    }
    else if(d.text==="Clients"){
      this.setState({
        clientRedirect:"clients",
        dropDownOpen: false
      })
    }
    // this.setState({linkClick:d.text})

  }
  componentDidMount(){
    var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log("element",el);
    }
  }
);
  }
  
  render() {
    
    return (
     
        <BrowserRouter>
          <React.Fragment>
          <Nav clientMenu={this.clientMenu} clientMenuOff={this.clientMenuOff} isOpen={this.state.dropDownOpen}/>
          {this.state.clientRedirect? <Redirect to={`/${this.state.clientRedirect}`} /> : null}
          <Route path={`/`} exact component={HomePage}/>
          <Route path="/clients" exact component={Clients}/>
          <Route path="/jobsearch" exact component={JobSearch}/>
          <Route path="/about" exact component={About}/>
          <Route path="/locumtenens" exact component={LocumTenens}/>
          <Route path="/departments" exact component={Departments}/>
          <Route path={`/faqs`} exact component={Faqs}/>
          
          <Route path={`/contact`} exact component={Contact}/>

          <Footer/>
          </React.Fragment>
          
        </BrowserRouter>
    );
  }
}

export default App;
