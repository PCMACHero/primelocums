import React from 'react'
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
        if(this.state.showResults){
            return (
                <div className="homepage">
                    <Results/>
                </div>
            )
        }
        return (
            <div className="homepage">
                <div className="title-box">
                    <h2 className="js-title">JOB SEARCH</h2>
                    <div className="checkbox-box">
                        <div className="search-checkbox">
                            <input type="checkbox" name="physicians" id="physicians"/>
                            <div>Physicians</div>
                        </div>
                        <div className="search-checkbox">
                            <input type="checkbox" name="advanced" id="advanced"/>
                            <div>Advanced Practice</div>
                        </div>
                    
                    
                    </div>
                    <div className="drop-down">
                        <div className="drop-down-btn" onClick={()=>{
                            this.handleDropDownClick()
                        }}>{this.state.specialty.length? `${this.state.specialty.length} selected`: "Choose Specialty"}</div>
                        <div className={this.state.dropDownClass} >
                            {this.state.dropDownList}
                        </div>
                    </div>
                    <input type="submit" value="SEARCH" className="search-btn"/>
                </div>
                <div className="large-search">
                        <div className="large-search-container">
                        <div className="left-half">
                        <h4 className="js-title">JOB SEARCH</h4>

                        <div className="large-selected-list">
                            {this.state.largeSpecialtyList}
                        </div>
                        
                        
                            <div className="checkbox-box">
                                    <div className="search-checkbox">
                                        <input type="checkbox" name="physicians" id="physicians"/>
                                        <div>Physicians</div>
                                    </div>
                                    <div className="search-checkbox">
                                        <input type="checkbox" name="advanced" id="advanced"/>
                                        <div>Advanced Practice</div>
                                    </div>
                            
                            
                            </div>
                            <input type="submit" value="View All Jobs" className="search-btn"/>
                            <input type="submit" value="SEARCH" className="search-btn" onClick={()=>{this.showResults()}}/>
                    
                    </div>
                    <div className="right-half">
                        <div className="large-specialty-box">
                            {this.state.dropDownList}
                        </div>
                    </div>
                        </div>
                    
                    
                    
                        
                </div>

            </div>


        )
    }
}