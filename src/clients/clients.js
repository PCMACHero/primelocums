import React from 'react';
import {Dropdown, Form, Button, TextArea} from 'semantic-ui-react';
import './clients.css';
import { isDate } from 'util';
import Departments from './departments';

export default class Clients extends React.Component{
    options=[
        { key: 'Physicians', text: 'Physicians', value: 'Physicians' },
        { key: 'Nurse Practitioner', text: 'Nurse Practitioner', value: 'Nurse Practitioner' },
        { key: 'PA', text: 'PA', value: 'PA' },
        { key: 'CRNA', text: 'CRNA', value: 'CRNA' },
        
    ]
    state={
        fname:'',
        lname:'',
        email:'',
        tel:'',
        duration:'',
        startDate:'',
        profession:[],
        
    }

    handleInputChange=(e)=>{
        console.log(e.target.value)
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleChange=(e,val)=>{
        console.log(val.value)
        this.setState({
            specialtiesSelected: val.value
        })
    }

    render(){
        
        return(
            <div className="clients">
                <div className="cl-sec1">
                    
                </div>

                <div className="cl-title-box">
                        <h1 className="lt-title">CLIENTS</h1>
                        <p>Prime Locums is devoted to finding the best physicians and advance practice 
                            clinicians that fit your organization’s needs. The four pillars below are 
                            what differentiates us from other agencies.</p>
    
                    </div>

                <h3 className="cl-subtitle">SERVICE-DRIVEN-</h3>
                <p className="cl-p">We strive to go above and beyond for you and exceed the organization’s goals and expectations.</p>
    
                <h3 className="cl-subtitle">PERFORMANCE-</h3>
                <p className="cl-p">We are results-oriented driven by our passion and commitment to providing the best physician to perform the highest level of patient care.</p>
    
                <h3 className="cl-subtitle">COMMITMENT-</h3>
                <p className="cl-p">We are committed to delivering the best fit candidate for the organization, by understanding the challenges of the unique situation(s).</p>
    
                <h3 className="cl-subtitle">COMPETITIVE-</h3>
                <p className="cl-p">We are loyal to our clients and ensure the service and talent we provide are at the best rate possible.</p>
    
    
                <h2 className="cl-title">PRIME LOCUMS WILL:</h2>
                <p className="cl-p">Reduce the amount of time, it takes to fill a position.</p>
                <p className="cl-p">Provide locum tenens staffing for scheduling deficits, vacations, leaves of absence, and more</p>
                <p className="cl-p">Offer you one point of contact to discuss all your needs.</p>
                <p className="cl-p">Give you reassurance and peace of mind when it comes to compliance.</p>
    
                <h3 className="cl-subtitle">Recruitment and Account Management Team:</h3>
                <p className="cl-p">Prime Locums is a small but agile agency who can focus and address your needs personally. Our 
                team understands locums may work different hours and time zones, so being accessible and available are vital to our workforce.</p>
    
                <p className="cl-p">Our account managers do not strive in the number of clients but focus instead on the quality of service. Each 
                account has a dedicated account manager, so they develop a more in-depth knowledge of the organization’s culture and mission. </p>

                <h3 className="cl-subtitle">Request a custom search based on your organization’s needs.</h3>
                <p className="cl-p">Our recruiters are continuously building a database to ensure that our candidates are appropriately vetted and 
                screened to fit Prime Locum’s standards. Recruiters strive to provide the best service to our Locum’s so they can solely focus on 
                their assignment and spend their time productively with patients rather than worry about their accommodations.</p>

                <Form action="" className="lt-form">
                    
                    <Form.Field>
                    <label htmlFor="org">Organization*</label>
                    <input type="text" name="org" id="org" onChange={(e)=>{this.handleInputChange(e)}}/>
                    </Form.Field>


                    <Form.Field>
                    <label htmlFor="fname">First*</label>
                    <input type="text" name="fname" id="fname" onChange={(e)=>{this.handleInputChange(e)}}/>
                    </Form.Field>


                    <Form.Field>
                    <label htmlFor="lname">Last*</label>
                    <input type="text" name="lname" id="lname" onChange={(e)=>{this.handleInputChange(e)}}/>
                    </Form.Field>


                    <Form.Field>
                    <label htmlFor="email">Email*</label>
                    <input type="email" name="email" id="email" onChange={(e)=>{this.handleInputChange(e)}}/>
                    </Form.Field>



                    <Form.Field>
                    <label htmlFor="tel">Phone*</label>
                    <input type="tel" name="tel" id="tel" onChange={(e)=>{this.handleInputChange(e)}}/>
                    </Form.Field>


                    <Form.Field>
                    <label htmlFor="duration">Duration*</label>
                    <input type="text" name="duration" id="duration" onChange={(e)=>{this.handleInputChange(e)}}/>
                    </Form.Field>

                    
                    <Form.Field>
                    <label htmlFor="startDate">Start Date*</label>
                    <input type="date" name="startDate" id="startDate" onChange={(e)=>{this.handleInputChange(e)}}/>
                    </Form.Field>
                    

                    
                    <Form.Field>
                        <label htmlFor="input-specialty">Specialty*</label>
                        <input type="text" name="input-specialty" id="input-specialty" onChange={(e)=>{this.handleInputChange(e)}}/>
                    </Form.Field>

                    <Form.Field>
                    <label htmlFor="state-licenses">Select Profession*</label>
                    <Dropdown placeholder='Click to Add Profession' 
                    
                    onChange={(e, val)=>{this.handleChange(e,val)}}
                    fluid 
                    // multiple 
                    selection 
                    options={this.options} />
                        
                        </Form.Field>    

                    
                    <Form.Field>
                    <label htmlFor="resume">Add Resume (optional)</label>
                    <input type="file" name="resume" id="resume" onChange={(e)=>{this.handleInputChange(e)}}/>
                    </Form.Field>

                    <Form.Field control={TextArea} name="comments" label='Comments' placeholder='(optional)' onChange={(e)=>{this.handleInputChange(e)}} />

                    

                    <Button type='submit'>SUBMIT</Button>
                    
                </Form>
                
                

                

            
            </div>
        )
    }
    
}

