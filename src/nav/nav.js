import React from 'react'
import {Link} from 'react-router-dom'
import { Dropdown, Menu } from 'semantic-ui-react'

export default class Nav extends React.Component{
    state={
        isOpen: false,
        showLogo: true
    }
    options = [
        { key: 1, text: 'Clients', value:1,onClick:this.props.clientMenu, },
        { key: 2, text: 'Departments', value: 2, onClick:this.props.clientMenu},
        { key: 3, text: 'FAQs', value: 3, onClick:this.props.clientMenu},
      ]
      linkFontStyle={padding:"0px 5px", display: "flex", alignItems:"center",justifyContent:"center", height:"64px", color:"black", width:"64px"}

      componentDidMount(){
        let body = document.getElementsByName('body')
        console.log(document.body.clientWidth)
        if(document.body.clientWidth<670){
          this.setState({showLogo:false})
        }
      }
    render(){
      console.log("rendered nav", this.props.isOpen)
        return (
            <nav>
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo" style={{display:this.state.showLogo?"":"none"}}><div className="logo"></div></Link>
              {/* <div className="logo">hello</div> */}
              <ul id="nav-mobile" className="right 
              hide-on-med-and-down 
              blue-text">
                <Menu compact>
                  <Menu.Item><li><Link to="/"><div style={this.linkFontStyle} onClick={()=>{this.props.clientMenuOff()}}>Home</div></Link></li></Menu.Item>
                  {/* <Menu.Item><li><Link to="/about"><div style={this.linkFontStyle} onClick={()=>{this.props.clientMenuOff()}}>About</div></Link></li></Menu.Item> */}
                  <Menu.Item><li><Link to="/locumtenens"><div style={this.linkFontStyle} onClick={()=>{this.props.clientMenuOff()}}>Locum Tenens</div></Link></li></Menu.Item>
                  
                  
                  <Menu.Item><li><Dropdown text='Clients' style={this.linkFontStyle}>
    <Dropdown.Menu>
      <Link to="/clients"><Dropdown.Item className="dd-item" text='Clients'/></Link>
      <Link to="/departments"><Dropdown.Item className="dd-item" text='Departments'/></Link>
      <Link to="/faqs"><Dropdown.Item className="dd-item" text='FAQ'/></Link>
      
    </Dropdown.Menu>
  </Dropdown></li></Menu.Item>
  <Menu.Item><li>

                    
                    <Dropdown text='About' style={this.linkFontStyle}>
    <Dropdown.Menu>
      <Link to="/about"><Dropdown.Item className="dd-item" text='About'/></Link>
      <Link to="/contact"><Dropdown.Item className="dd-item" text='Contact'/></Link>
      
      
    </Dropdown.Menu>
  </Dropdown>
                    
                    
                    </li></Menu.Item>
                    <Menu.Item><li>
                  <a target="_blank" href="https://recruit.zohopublic.com/recruit/Portal.na?iframe=false&digest=Os20Eg%40T5Wis.pOdnJHzs3GAUnkE7bVo.a85bxdBEmQ-"><div style={this.linkFontStyle} onClick={()=>{this.props.clientMenuOff()}}>Job Search</div></a>

                    </li></Menu.Item>
                </Menu>
              </ul>
            </div>
          </nav>
        )
    }
}