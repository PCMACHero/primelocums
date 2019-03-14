import React from 'react'
import {Dropdown, Form, Button, Checkbox} from 'semantic-ui-react'
import './jobsearch.css'
import Results from '../results/results';

export default class JobSearch extends React.Component{
    state={
        
        dropDownClass: "hide",
        dropDownList:[],
        largeSpecialtyList:[],
        specialty:[],
        showResults: false,
    }

    options=[
        { key: 'ABEM Emergency Medicine', text: 'ABEM Emergency Medicine', value: 'ABEM Emergency Medicine' },
        { key: 'Anesthesiology', text: 'Anesthesiology', value: 'Anesthesiology' },
        { key: 'Allergy and Immunology', text: 'Allergy and Immunology', value: 'Allergy and Immunology' },
        { key: 'Cardio-Thoracic', text: 'Cardio-Thoracic', value: 'Cardio-Thoracic' },
        { key: 'Cardiac Surgery', text: 'Cardiac Surgery', value: 'Cardiac Surgery' },
        { key: 'Critical Care', text: 'Critical Care', value: 'Critical Care' },
        { key: 'Colo-rectal Surgery', text: 'Colo-rectal Surgery', value: 'Colo-rectal Surgery' },
        { key: 'Dermatology', text: 'Dermatology', value: 'Dermatology' },
        { key: 'Emergency Medicine', text: 'Emergency Medicine', value: 'Emergency Medicine' },
        { key: 'Endocrinology', text: 'Endocrinology', value: 'Endocrinology' },
        { key: 'Family Practice', text: 'Family Practice', value: 'Family Practice' },
        { key: 'Gastroenterology', text: 'Gastroenterology', value: 'Gastroenterology' },
        { key: 'General Surgery', text: 'General Surgery', value: 'General Surgery' },
        { key: 'Gynecologic Oncology', text: 'Gynecologic Oncology', value: 'Gynecologic Oncology' },
        { key: 'Hematology', text: 'Hematology', value: 'Hematology' },
        { key: 'Hospitalist', text: 'Hospitalist', value: 'Hospitalist' },
        { key: 'Infectious Disease', text: 'Infectious Disease', value: 'Infectious Disease' },
        { key: 'Internal Medicine', text: 'Internal Medicine', value: 'Internal Medicine' },
        { key: 'Interventional Cardiology', text: 'Interventional Cardiology', value: 'Interventional Cardiology' },
        { key: 'Neonatology', text: 'Neonatology', value: 'Neonatology' },
        { key: 'Nephrology', text: 'Nephrology', value: 'Nephrology' },
        { key: 'Neurosurgery', text: 'Neurosurgery', value: 'Neurosurgery' },
        { key: 'OB/GYN', text: 'OB/GYN', value: 'OB/GYN' },
        { key: 'Occupational Medicine', text: 'Occupational Medicine', value: 'Occupational Medicine' },
        { key: 'Oncology', text: 'Oncology', value: 'Oncology' },
        { key: 'Ophthalmology', text: 'Ophthalmology', value: 'Ophthalmology' },
        { key: 'Orthopedics', text: 'Orthopedics', value: 'Orthopedics' },
        { key: 'Orthopedic Trauma', text: 'Orthopedic Trauma', value: 'Orthopedic Trauma' },
        { key: 'Otolaryngology', text: 'Otolaryngology', value: 'Otolaryngology' },
        { key: 'Pathology', text: 'Pathology', value: 'Pathology' },
        { key: 'Pediatrics', text: 'Pediatrics', value: 'Pediatrics' },
        { key: 'Pediatric Surgery', text: 'Pediatric Surgery', value: 'Pediatric Surgery' },
        { key: 'Pediatric Critical Care', text: 'Pediatric Critical Care', value: 'Pediatric Critical Care' },
        { key: 'Perinatology / Maternal Fetal Medicine', text: 'Perinatology / Maternal Fetal Medicine', value: 'Perinatology / Maternal Fetal Medicine' },
        { key: 'Plastic Surgery', text: 'Plastic Surgery', value: 'Plastic Surgery' },
        { key: 'PM & R', text: 'PM & R', value: 'PM & R' },
        { key: 'Pulmonology', text: 'Pulmonology', value: 'Pulmonology' },
        { key: 'Psychiatry', text: 'Psychiatry', value: 'Psychiatry' },
        { key: 'Radiology', text: 'Radiology', value: 'Radiology' },
        { key: 'Reproductive Endocrinology and Infertility', text: 'Reproductive Endocrinology and Infertility', value: 'Reproductive Endocrinology and Infertility' },
        { key: 'Rheumatology', text: 'Rheumatology', value: 'Rheumatology' },
        { key: 'Thoracic Surgery', text: 'Thoracic Surgery', value: 'Thoracic Surgery' },
        { key: 'Trauma Surgery', text: 'Trauma Surgery', value: 'Trauma Surgery' },
        { key: 'Urgent Care', text: 'Urgent Care', value: 'Urgent Care' },
        { key: 'Urology', text: 'Urology', value: 'Urology' },
        { key: 'Vascular Surgery', text: 'Vascular Surgery', value: 'Vascular Surgery' },
        
    ]

    specialtyList=[
      'ABEM Emergency Medicine'
    , 'Anesthesiology' 
    , 'Allergy and Immunology' 
    , 'Cardiology' 
    , 'Cardio-Thoracic' 
    , 'Cardiac Surgery'
    , 'Critical Care' 
    , 'Colo-rectal Surgery'
    , 'Dermatology' 
    , 'Emergency Medicine' 
    , 'Endocrinology' 
    , 'Family Practice' 
    , 'Gastroenterology' 
    , 'General Surgery' 
    , 'Gynecologic Oncology' 
    , 'Hematology' 
    , 'Hospitalist' 
    , 'Infectious Disease' 
    , 'Internal Medicine' 
    , 'Interventional Cardiology' 
    , 'Neonatology' 
    , 'Nephrology' 
    , 'Neurology' 
    , 'Neurosurgery' 
    , 'OB/GYN' 
    , 'Occupational Medicine'
    , 'Oncology' 
    , 'Ophthalmology' 
    , 'Orthopedics' 
    , 'Orthopedic Trauma' 
    , 'Otolaryngology' 
    , 'Pathology' 
    , 'Pediatrics' 
    , 'Pediatric Surgery' 
    , 'Pediatric Critical Care' 
    , 'Perinatology / Maternal Fetal Medicine' 
    , 'Plastic Surgery' 
    , 'PM & R' 
    , 'Pulmonology' 
    , 'Psychiatry' 
    , 'Radiology' 
    , 'Reproductive Endocrinology and Infertility' 
    , 'Rheumatology' 
    , 'Thoracic Surgery'
    , 'Trauma Surgery' 
    , 'Urgent Care' 
    , 'Urology '
    , 'Vascular Surgery']
    

    handleChange=(e,val)=>{
        console.log(val.value)
        this.setState({
            specialtiesSelected: val.value
        })
    }

    handleDropDownClick=()=>{
        if(this.state.dropDownClass==="hide" || this.state.dropDownClass==="hide-slow"){
            this.setState({
                dropDownClass: "drop-down-list"
            })
        } else {
            this.setState({
                dropDownClass:"hide"
            })
        }
    }

    chooseSpecialty=(item)=>{
        let arr = this.state.specialty
        
        if(arr.includes(item)){
            
            let index = arr.indexOf(item)
            arr.splice(index,1)
        }else{
            
            arr.push(item)
        }
        this.setState({
            
            specialty: arr,
            
        }, this.dropDown(this.specialtyList))
    }


    dropDown=(arr)=>{
        let myArr = []
        for(let i=0; i<arr.length;i++){
            
            myArr.push(
                <div key={i} className="drop-down-item" style={{backgroundColor: this.state.specialty.includes(arr[i])?"green":null}} onClick={()=>{
                    this.chooseSpecialty(arr[i])
                }}>
                    {arr[i]}
                </div>
            )
        } 
        this.setState({
            dropDownList: myArr
        })
        this.specialtyCounter(this.state.specialty)
    }

    specialtyCounter=(selectedArr)=>{
        let newArray=[]
        let numToRun=0
        if(selectedArr.length && selectedArr.length <= 6){
            numToRun= selectedArr.length
        }
        if(selectedArr.length>5){
            numToRun=5
        }
        for(let i=0; i<numToRun;i++){
            newArray.push(<div className="item-selected" key={i} onClick={()=>{
                this.chooseSpecialty(selectedArr[i])
            }}>{selectedArr[i]}</div>
                )
        }
        if(selectedArr.length>5){
            newArray.push(<div className="item-selected" key={6}>{`+ ${selectedArr.length-5}`}</div>)
        }
        this.setState({
            largeSpecialtyList: newArray
        })
    }


    showResults=()=>{
        this.setState({
            showResults: true
        })
    }

    componentDidMount(){
        this.dropDown(this.specialtyList)
    }

    render(){
    //     if(this.state.showResults){
    //         return (
    //             <div className="homepage">
    //                 <Results/>
    //             </div>
    //         )
    //     }
    //     return (
    //         <div className="homepage">
    //             <div className="title-box">
    //                 <h2 className="js-title">JOB SEARCH</h2>
    //                 <div className="checkbox-box">
    //                     <div className="search-checkbox">
    //                         <input type="checkbox" name="physicians" id="physicians"/>
    //                         <div>Physicians</div>
    //                     </div>
    //                     <div className="search-checkbox">
    //                         <input type="checkbox" name="advanced" id="advanced"/>
    //                         <div>Advanced Practice</div>
    //                     </div>
                    
                    
    //                 </div>
    //                 <div className="drop-down">
    //                     <div className="drop-down-btn" onClick={()=>{
    //                         this.handleDropDownClick()
    //                     }}>{this.state.specialty.length? `${this.state.specialty.length} selected`: "Choose Specialty"}</div>
    //                     <div className={this.state.dropDownClass} >
    //                         {this.state.dropDownList}
    //                     </div>
    //                 </div>
    //                 <input type="submit" value="SEARCH" className="search-btn"/>
    //             </div>
    //             <div className="large-search">
    //                     <div className="large-search-container">
    //                     <div className="left-half">
    //                     <h4 className="js-title">JOB SEARCH</h4>

                        
                        
                        
    //                         <div className="checkbox-box">
    //                                 <div className="search-checkbox">
    //                                     <input type="checkbox" name="physicians" id="physicians"/>
    //                                     <div>Physicians</div>
    //                                 </div>
    //                                 <div className="search-checkbox">
    //                                     <input type="checkbox" name="advanced" id="advanced"/>
    //                                     <div>Advanced Practice</div>
    //                                 </div>
                            
                            
    //                         </div>
    //                         <input type="submit" value="View All Jobs" className="search-btn"/>
    //                         <input type="submit" value="SEARCH" className="search-btn" onClick={()=>{this.showResults()}}/>

    //                         <div className="large-selected-list">
    //                         {this.state.largeSpecialtyList}
    //                     </div>
    //                 </div>
    //                 <div className="right-half">
    //                     <div className="large-specialty-box">
    //                         {this.state.dropDownList}
    //                     </div>
    //                 </div>
    //                     </div>
                    
                    
                    
                        
    //             </div>

    //         </div>


    //     )
    // }


    return(
        <div className="job-search">
            <h1 className="js-title">JOB SEARCH</h1>
            <div className="search-box">
                <Form className="lt-form">
                        <Form.Field>
                            <label htmlFor="input-specialties">Specialties</label>
                            <Dropdown placeholder='Click to Add' 
                            
                            onChange={(e, val)=>{this.handleChange(e,val)}}
                            fluid multiple selection options={this.options} />
                        </Form.Field>
                        
                        <Form.Field>
                            <Checkbox label='Physicians' />
                        </Form.Field>
                        <Form.Field>
                            <Checkbox label='Advanced Practice' />
                        </Form.Field>
                        <Button type='submit'>SEARCH JOBS</Button>
                    </Form>
            </div>
        </div>
    )
}
}