import React from 'react'
import {Link} from 'react-router-dom'
import { Dropdown, Menu } from 'semantic-ui-react'

export default class Nav extends React.Component{
    state={
        isOpen: false
    }
    options = [
        { key: 1, text: 'Clients', value:1,onClick:this.props.clientMenu, },
        { key: 2, text: 'Departments', value: 2, onClick:this.props.clientMenu},
        { key: 3, text: 'FAQs', value: 3, onClick:this.props.clientMenu},
      ]
      linkFontStyle={padding:"0px 15px", display: "flex", alignItems:"center",justifyContent:"center", height:"64px", color:"black"}
    render(){
        return (
            <nav>
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo"><div className="logo"></div></Link>
              {/* <div className="logo">hello</div> */}
              <ul id="nav-mobile" className="right hide-on-med-and-down blue-text">
                <Menu compact>
                  <Menu.Item><li><Link to="/"><div style={this.linkFontStyle} onClick={()=>{this.props.clientMenuOff()}}>Home</div></Link></li></Menu.Item>
                  <Menu.Item><li><Link to="/about"><div style={this.linkFontStyle} onClick={()=>{this.props.clientMenuOff()}}>About</div></Link></li></Menu.Item>
                  <Menu.Item><li><Link to="/locumtenens"><div style={this.linkFontStyle} onClick={()=>{this.props.clientMenuOff()}}>Locum Tenens</div></Link></li></Menu.Item>
                  <Menu.Item><li><Link to="/jobsearch"><div style={this.linkFontStyle} onClick={()=>{this.props.clientMenuOff()}}>Job Search</div></Link></li></Menu.Item>
                  <Menu.Item><li><Dropdown text='Clients' options={this.options} simple item open={this.props.isOpen}/></li></Menu.Item>
                  <Menu.Item><li><Link to="/contact"><div style={this.linkFontStyle} onClick={()=>{this.props.clientMenuOff()}}>Contact Us</div></Link></li></Menu.Item>
                </Menu>
              </ul>
            </div>
          </nav>
        )
    }
}