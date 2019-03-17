import React from 'react';
import {Link} from 'react-router-dom';
import '../homepage/homepage.css';
import SocialBar from '../socialbar/socialbar';

export default class HomePage extends React.Component{
    render(){
        return (
            
            <React.Fragment>
                <div className="homepage">
                    <SocialBar/>
                    <div className="hp-sec1">
                        <h1 id="hp-title"><span style={{color:"white"}}>PRIME</span> LOCUMS</h1>
                        <div className="hp-btn-container">
                            <Link to="/jobsearch"><button className="hp-btn">Job Search</button></Link>
                            
                            <Link to="/clients"><button className="hp-btn">Clients</button></Link>
                            
                        </div>
                        <h4 className="hp-subtext">Your search ends here</h4>
                        <div className="stretch"></div>
                    </div>
                    <div className="hp-sec2">
                    </div>
                    
                </div>
                


            </React.Fragment>
            

        )
    }
}