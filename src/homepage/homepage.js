import React from 'react';
import {Link} from 'react-router-dom';
import '../homepage/homepage.css';


export default class HomePage extends React.Component{
    render(){
        return (
            
            <React.Fragment>
                <div className="homepage">
                    
                    <div className="hp-sec1">
                        <h1 id="hp-title" className="animated fadeInLeft slow" style={{color:"white"}}><span style={{color:"#b22130"}}>PRIME</span > LOCUMS</h1>
                        <div className="hp-btn-container">
                            <a target="_blank" href="https://recruit.zohopublic.com/recruit/Portal.na?iframe=false&digest=Os20Eg%40T5Wis.pOdnJHzs3GAUnkE7bVo.a85bxdBEmQ-"><button className="hp-btn">JOB SEARCH</button></a>
                            
                            <Link to="/clients"><button className="hp-btn">CLIENTS</button></Link>
                            
                        </div>
                        <h4 className="hp-subtext">Your search ends here</h4>
                        <div className="stretch"></div>
                    </div>
                    {/* <div className="hp-sec2">
                    </div> */}
                    
                </div>
                


            </React.Fragment>
            

        )
    }
}