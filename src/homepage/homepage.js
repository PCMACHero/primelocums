import React from 'react'
import '../homepage/homepage.css'
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
                            <button className="hp-btn btn-large waves-effect waves-light red darken-3">Job Search</button>
                            <div className="hp-btn btn-large red darken-3">Clients</div>
                            
                        </div>
                        <h4>Your search ends here</h4>
                        <div className="stretch"></div>
                    </div>
                    <div className="hp-sec2">
                    </div>
                    
                </div>
                


            </React.Fragment>
            

        )
    }
}