import React from 'react'
import email from '../assets/images/email.svg'
import phone from '../assets/images/phone.svg'
import SocialBar from '../socialbar/socialbar'

const Footer = ()=>{
    return (
        <footer className="page-footer">
          <div className="container">
            <div className="foot-stuff" style={{width:"100%", display:'flex', justifyContent:'center', alignItems:"center"}}>
              <div className="thing" style={{padding:'10px'}}>
              <a href = "mailto: info@plocums.com" className="linky" style={{display:'flex', justifyContent:'center', alignItems:"center"}}><img src={email} />Email</a>
              </div>
              <div className="thing" style={{padding:'10px'}}>
              <a href="tel:702-714-1421" className="linky" style={{display:'flex', justifyContent:'center', alignItems:"center"}}><img src={phone} />Call</a>
              </div>
              <SocialBar/>
            </div>
            

          </div>
          <div className="footer-copyright">
            <div className="container2">
            © 2019 Prime Locums
            {/* <a className="" href="#!">More Links</a> */}
            </div>
          </div>
        </footer>

    //     <Segment inverted vertical style={{ padding: '5em 0em' }}>
    //   <Container>
    //     <Grid divided inverted stackable>
    //       <Grid.Row>
    //         <Grid.Column width={3}>
    //           <Header inverted as='h4' content='About' />
    //           <List link inverted>
    //             <List.Item as='a'>Sitemap</List.Item>
    //             <List.Item as='a'>Contact Us</List.Item>
    //             <List.Item as='a'>Religious Ceremonies</List.Item>
    //             <List.Item as='a'>Gazebo Plans</List.Item>
    //           </List>
    //         </Grid.Column>
    //         <Grid.Column width={3}>
    //           <Header inverted as='h4' content='Services' />
    //           <List link inverted>
    //             <List.Item as='a'>Banana Pre-Order</List.Item>
    //             <List.Item as='a'>DNA FAQ</List.Item>
    //             <List.Item as='a'>How To Access</List.Item>
    //             <List.Item as='a'>Favorite X-Men</List.Item>
    //           </List>
    //         </Grid.Column>
    //         <Grid.Column width={7}>
    //           <Header as='h4' inverted>
    //             Footer Header
    //           </Header>
    //           <p>
    //             Extra space for a call to action inside the footer that could help re-engage users.
    //           </p>
    //         </Grid.Column>
    //       </Grid.Row>
    //     </Grid>
    //   </Container>
    // </Segment>
    )
}

export default Footer