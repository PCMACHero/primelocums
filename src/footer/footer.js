import React from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

const Footer = ()=>{
    return (
        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="">
                <h5 className="">Footer Content</h5>
                <p className="">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div className="">
                <h5 className="">Links</h5>
                <ul className="foot-list">
                  <li><a className="" href="#!">Link 1</a></li>
                  <li><a className="" href="#!">Link 2</a></li>
                  <li><a className="" href="#!">Link 3</a></li>
                  <li><a className="" href="#!">Link 4</a></li>
                </ul>
              </div>
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