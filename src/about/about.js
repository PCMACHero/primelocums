import React from 'react'
import './about.css'

const About = ()=>{
    return (
        <div className="about">
            <div className="about-sec1">
                <h1 className="about-title">ABOUT PRIME LOCUS</h1>
                <p className="about-text flow-text">Prime Locums offers staffing 
                solutions by finding the best medical providers for leading 
                healthcare facilities. We are a smaller agency, which gives us 
                the ability to provide the highest quality of service to our 
                candidates and clients effectively. Our staff has over 75 years 
                of experience providing healthcare staffing services. </p>

                <p className="about-text flow-text">
                Prime Locums is well known for the service we put forth and the 
                quality of our medical professionals. As a follower of the National 
                Association of Locum Tenens Organizations (NALTO), we pride ourselves
                on being an industry leader enforcing best practice guidelines. 
                </p>
            </div>
            

            <div className="two-core-values">
                <div className="core-value">
                    <h5 className="core-value-title">SERVICE</h5>
                    <p className="core-value-text ">We believe in putting people first. 
                    Whether its candidates or clients, our team believes in servicing 
                    others. This belief falls in line with what our medical providers 
                    do as they serve in their communities.</p>
                </div>
                <div className="core-value">
                    <h5 className="core-value-title">PASSION</h5>
                    <p className="core-value-text ">We are passionate about what we do. 
                    Without passion, there is no inclination in going the extra mile for 
                    why we do, what we do. </p>
                </div>
                 
            </div>
            <div className="two-core-values">
                <div className="core-value">
                    <h5 className="core-value-title">EXCELLENCE</h5>
                    <p className="core-value-text ">Think and Strive for Excellence. We 
                    believe in going above and beyond expectations and delivering the 
                    highest quality service.</p>
                </div>
                <div className="core-value">
                    <h5 className="core-value-title">INTEGRITY</h5>
                    <p className="core-value-text ">Be honest and do the right thing. 
                    Transparency, honesty and doing the right thing are vital components 
                    to building lasting relationships. We conduct our business following 
                    the highest standards of ethical behavior.</p>
                </div>
                 
            </div>
            <h5 className="mission-title">MISSION STATEMENT</h5>
            <p className="mission-text">
            Our mission is to staff innovative healthcare providers committed to providing 
            the highest level of patient care. 
            </p>
            

        </div>
    )
}

export default About