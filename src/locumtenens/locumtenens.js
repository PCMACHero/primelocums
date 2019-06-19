import React from 'react'
import {Dropdown, Form, Button, TextArea} from 'semantic-ui-react'
import './locumtenens.css'

export default class LocumTenens extends React.Component{
    state= {
        specialtiesSelected: [],
        fname:'',
        lname:'',
        email:'',
        tel:null,
        specialty: '',
        questions: '',
        "how-heard": '',
    }
    options = [
        { key: 'alabama', text: 'Alabama', value: 'alabama' },
        { key: 'alaska', text: 'Alaska', value: 'alaska' },
        { key: 'arizona', text: 'Arizona', value: 'arizona' },
        { key: 'arkansas', text: 'Arkansas', value: 'arkansas' },
        { key: 'california', text: 'California', value: 'california' },
        { key: 'colorado', text: 'Colorado', value: 'colorado' },
        { key: 'connecticut', text: 'Connecticut', value: 'connecticut' },
        { key: 'delaware', text: 'Delaware', value: 'delaware' },
        { key: 'florida', text: 'Florida', value: 'florida' },
        { key: 'georgia', text: 'Georgia', value: 'georgia' },
        { key: 'hawaii', text: 'Hawaii', value: 'hawaii' },
        { key: 'idaho', text: 'Idaho', value: 'idaho' },
        { key: 'illinois', text: 'Illinois', value: 'illinois' },
        { key: 'indiana', text: 'Indiana', value: 'indiana' },
        { key: 'iowa', text: 'Iowa', value: 'iowa' },
        { key: 'kansas', text: 'Kansas', value: 'kansas' },
        { key: 'kentucky', text: 'Kentucky', value: 'kentucky' },
        { key: 'lousiana', text: 'Lousiana', value: 'lousiana' },
        { key: 'maine', text: 'Maine', value: 'maine' },
        { key: 'maryland', text: 'Maryland', value: 'maryland' },
        { key: 'massachusetts', text: 'Massachusetts', value: 'massachusetts' },
        { key: 'michigan', text: 'Michigan', value: 'michigan' },
        { key: 'minnesota', text: 'Minnesota', value: 'minnesota' },
        { key: 'mississippi', text: 'Mississippi', value: 'mississippi' },
        { key: 'missouri', text: 'Missouri', value: 'missouri' },
        { key: 'montana', text: 'Montana', value: 'montana' },
        { key: 'nebraska', text: 'Nebraska', value: 'nebraska' },
        { key: 'nevada', text: 'Nevada', value: 'nevada' },
        { key: 'new hampshire', text: 'New Hampshire', value: 'new hampshire' },
        { key: 'new jersey', text: 'New Jersey', value: 'new jersey' },
        { key: 'new mexico', text: 'New Mexico', value: 'new mexico' },
        { key: 'new york', text: 'New York', value: 'new york' },
        { key: 'north carolina', text: 'North Carolina', value: 'north carolina' },
        { key: 'north dakota', text: 'North Dakota', value: 'north dakota' },
        { key: 'ohio', text: 'Ohio', value: 'ohio' },
        { key: 'oklahoma', text: 'Oklahoma', value: 'oklahoma' },
        { key: 'oregon', text: 'Oregon', value: 'oregon' },
        { key: 'pennsylvania', text: 'Pennsylvania', value: 'pennsylvania' },
        { key: 'rhode island', text: 'Rhode Island', value: 'rhode island' },
        { key: 'south carolina', text: 'South Carolina', value: 'south carolina' },
        { key: 'tennessee', text: 'Tennessee', value: 'tennessee' },
        { key: 'texas', text: 'Texas', value: 'texas' },
        { key: 'utah', text: 'Utah', value: 'utah' },
        { key: 'vermont', text: 'Vermont', value: 'vermont' },
        { key: 'virginia', text: 'Virginia', value: 'virginia' },
        { key: 'washington', text: 'Washington', value: 'washington' },
        { key: 'west virginia', text: 'West Virginia', value: 'west virginia' },
        { key: 'wisconsin', text: 'Wisconsin', value: 'wisconsin' },
        { key: 'wyoming', text: 'Wyoming', value: 'wyoming' },
      ]
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
      setFalse=(item)=>{
          this.setState({
              [item]:false
          })
      }
      setTrue=(item)=>{
          this.setState({
              [item]:true
          })
      }
    onHover=(item)=>{
        this.setState({
            [item]:false
        }, ()=>{this.setTrue(item)})
    }

    render(){
        return (
            <div className="locum-tenens">
                <div className="lt-sec1">
                

                </div>
                
                <h2 className="lt-title">What is Locum Tenens?</h2>
                    <p className="lt-p">The term Locum Tenens means “to hold a place.” 
                    When hospitals have staffing gaps and need physicians, CRNAs, PAs, 
                    or NPs, Locum Tenens are temporarily provided to fill that void. </p>

                <h2 className="lt-title">What are the benefits of working Locum Tenens?</h2>
                
                    <h3 className="lt-subtitle" onMouseOver={()=>{this.onHover("income")}} onMouseLeave={()=>{this.setFalse("income")}}> <div  className={`lt-icon income ${this.state.income? "animated heartBeat": ""}`}></div>  Supplement your income</h3>
                    <p className="lt-p">Many healthcare providers have the option of taking locum 
                    tenens assignments to earn extra income.</p>

                    <h3 className="lt-subtitle" onMouseOver={()=>{this.onHover("burnout")}} onMouseLeave={()=>{this.setFalse("burnout")}}><div className={`lt-icon burnout ${this.state.burnout? "animated heartBeat": ""}`}/>Avoid burnout and gain independence</h3>
                    <p className="lt-p">Taking an assignment can provide a change of pace. There are more 
                    flexibility and typically less paperwork, meaning more time is spent productively with 
                    patients. You can control your schedule and the duration of the assignment.  </p>

                    <h3 className="lt-subtitle" onMouseOver={()=>{this.onHover("transitional")}} onMouseLeave={()=>{this.setFalse("transitional")}}><div className={`lt-icon transitional ${this.state.transitional? "animated heartBeat": ""}`}/>Transitional phase </h3>
                    <p className="lt-p">Whether you are experiencing personal life transitions or relocating 
                    and need a job while searching for permanent placement, becoming a locum tenens provider 
                    can help bridge any transition you encounter.</p>

                    <h3 className="lt-subtitle" onMouseOver={()=>{this.onHover("refine")}} onMouseLeave={()=>{this.setFalse("refine")}}><div className={`lt-icon refine ${this.state.refine? "animated heartBeat": ""}`}></div>Expand or Refine Skills</h3>
                    <p className="lt-p">Working in a wide range of environments can help refine your skillset. 
                    If all the experience you’ve had has been at an 800+ bed facility and you decide to accept 
                    a contract at a private practice, your experience may not only be advantageous but can also 
                    add to your skillset.</p>

                    <h3 className="lt-subtitle" onMouseOver={()=>{this.onHover("retirement")}} onMouseLeave={()=>{this.setFalse("retirement")}}><div className={`lt-icon retirement ${this.state.retirement? "animated heartBeat": ""}`}></div>Pre or Post Retirement</h3>
                    <p className="lt-p">If you’re transitioning into pre or post-retirement, locum tenens can help 
                    give you the ability to work as much or as little as you can. Working on a limited basis can 
                    keep your credentials up to date in case you get the itch to get back in the workforce.</p>

                    <h3 className="lt-subtitle" onMouseOver={()=>{this.onHover("vacation")}} onMouseLeave={()=>{this.setFalse("vacation")}}><div className={`lt-icon vacation ${this.state.vacation? "animated heartBeat": ""}`}></div>Vacation while you’re on the road</h3>
                    <p className="lt-p">There are several openings throughout the country. For instance, if you take 
                    an assignment in Wisconsin during winter, why not experience a Packers game at Lambeau field 
                    while earning a sizable income? Take an assignment in Colorado and explore the foothills of 
                    the Rockies. The opportunities are endless.</p>

                <h2 className="lt-title">Interested in becoming a Locum Tenens?</h2>

                    <h3 className="lt-subtitle2">Fill out the form below so we can narrow your preferences and find 
                    the right position for you</h3>

                <Form action="" className="lt-form">
                    
                    <Form.Field>
                    <label htmlFor="fname">First*</label>
                    <input type="text" name="fname" id="fname" value={this.state.fname} onChange={(e)=>{this.handleInputChange(e)}}/>
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
                        <label htmlFor="input-specialty">Specialty*</label>
                        <input type="text" name="input-specialty" id="input-specialty" onChange={(e)=>{this.handleInputChange(e)}}/>
                    </Form.Field>

                    <Form.Field>
                    <label htmlFor="state-licenses">Active State Licenses*</label>
                    <Dropdown placeholder='Click to Add States' 
                    
                    onChange={(e, val)=>{this.handleChange(e,val)}}
                    fluid multiple selection options={this.options} />
                        
                        </Form.Field>    

                    
                    <Form.Field>
                    <label htmlFor="resume">Add Resume (optional)</label>
                    <input type="file" name="resume" id="resume" onChange={(e)=>{this.handleInputChange(e)}}/>
                    </Form.Field>

                    <Form.Field control={TextArea} name="questions" label='Questions/comments' placeholder='(optional)' onChange={(e)=>{this.handleInputChange(e)}} />

                    <Form.Field control={TextArea} name="how-heard" label='How Did You Hear About Us?*' placeholder='' onChange={(e)=>{this.handleInputChange(e)}} />

                    <Button type='submit'>SUBMIT</Button>
                    
                </Form>
            </div>
        )
    }
}