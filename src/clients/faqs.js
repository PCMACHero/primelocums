import React from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

class Faqs extends React.Component{

    state = { activeIndex: null }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
  }
    

    render(){
        const { activeIndex } = this.state
        return (
            <React.Fragment>

                    <h1 className="lt-title">FAQs</h1>


                    <div style={{display:"flex",flexDirection:"column",justifyContent:"center", alignItems:"center", margin:"15px"}}>
                    <Accordion styled 
                    // style={{display:"flex",flexDireccion:"column",justifyContent:"center", alignItems:"center"}}
                    >
                        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                        <Icon name='dropdown' /><h3 className="cl-subtitle">Why do clients utilize Locum Tenens?</h3></Accordion.Title>
                        <Accordion.Content active={activeIndex === 0}>
                        <p className="cl-faq-p">Several private practice clinics, hospitals, groups, 
                    and large healthcare systems are always needing help in staffing physicians, CRNAs, PAs, and NPs. 
                    Anytime a healthcare provider is on a long-term vacation or medical leave; Locum tenens provide a quick 
                    and effective solution.</p>
                        </Accordion.Content>

                        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
                        <Icon name='dropdown' /><h3 className="cl-subtitle">How can you assure high-quality candidates?</h3></Accordion.Title>
                        <Accordion.Content active={activeIndex === 1}>
                        <p className="cl-faq-p">Our candidates are highly-qualified and vetted appropriately to Prime Locums standards. 
                    We also provide malpractice insurance on your behalf to help minimize any risk associated with our placements. 
                    Prime Locums utilize a comprehensive screening process to ensure the provider’s experience, and client’s requirements 
                    are a match. </p>
                        </Accordion.Content>

                        <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
                        <Icon name='dropdown' /><h3 className="cl-subtitle">How do you verify locum tenens credentials and background?</h3></Accordion.Title>
                        <Accordion.Content active={activeIndex === 2}>
                        <ul>
                        <li>Primary Source Verifications</li>
                        <li>AMA Profile, which covers medical education, training and board certification</li>
                        <li>Criminal Background Check and 11-panel drug screens</li>
                        <li>OIG and EPLS queries</li>
                        <li>Reference Checks</li>
                        <li>Review and go over any previous or ongoing medical practice issues</li>
                        <li>Aid with hospital privileges</li>
                    </ul>
                        </Accordion.Content>

        
                    </Accordion>
                    </div>
                    




                    
                    
                    
    
                    
                    
                    <p className="cl-faq-p">We thoroughly verify each physician’s training and background to give you the peace of mind, 
                    that a highly qualified medical provider will be at your service within a matter of time. Also, 
                    we facilitate and supply all the necessary documentation directly with the facility’s medical staff contacts. </p>
    
                    <h3 className="cl-subtitle">How do your rates match with the rest of the agencies?</h3>
                    <p className="cl-faq-p">We offer competitive rates compared to other firms in the locum tenens industry. We have 
                    high expectations from our clients and candidates as we hold ourselves to the same standard. Our candidates are 
                    highly-qualified and with that comes a higher rate. If they are any budgetary limitations, 
                    Prime Locums is small enough to negotiate directly with the medical facility.</p>
            </React.Fragment>
            
        )
    }
    
}

export default Faqs