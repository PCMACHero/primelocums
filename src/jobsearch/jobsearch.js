import React from 'react'
import './jobsearch.css'

export default class JobSearch extends React.Component{
    state={
        showDropDown:false,
        dropDownList:[],
        specialty:null
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
    
    
    chooseSpecialty=(item)=>{
        this.setState({
            showDropDown:false,
            specialty: item
        })
    }


    dropDown=(arr)=>{
        let myArr = []
        for(let i=0; i<arr.length;i++){
            this.setState({
                dropDownList: myArr
            })
            myArr.push(
                <div className="drop-down-item" onClick={()=>{
                    this.chooseSpecialty(arr[i])
                }}>
                    {arr[i]}
                </div>
            )
        }
    }

    componentDidMount(){
        this.dropDown(this.specialtyList)
    }

    render(){
        
        return (
            <div className="homepage">
                <div className="title-box">
                    <h1 className="js-title">JOB SEARCH</h1>
                    <div className="drop-down">
                        <div className="drop-down-btn" onClick={()=>{
                            this.setState({
                                showDropDown: !this.state.showDropDown
                            })
                        }}>{this.state.specialty? this.state.specialty: "Choose Specialty"}</div>
                        <div className="drop-down-list" style={{display: this.state.showDropDown? "flex":"none"}}>
                            {this.state.dropDownList}
                        </div>
                    </div>
                </div>

            </div>


        )
    }
}