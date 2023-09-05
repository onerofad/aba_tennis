import { useState } from "react"
import { Dropdown, Table, Input, Select, Sidebar, Menu, Container, Button, Segment, Icon, Image , Grid, Header, Divider, Placeholder, List} from "semantic-ui-react"
import 'semantic-ui-css/semantic.min.css'
import { useNavigate } from "react-router-dom"
import './AGRESSIVE.otf'
import './style.css'
import { Link } from "react-router-dom"
import MobileHeading from './MobileHeading'
import MobileLatestNews from "./MobileLatestNews"
import MobileAbout from "./MobileAbout"
import MobileAccessRanking from "./MobileAccessRanking"
import MobilePlayerTable from "./MobilePlayerTable"
import MobileContact from "./MobileContact"
import MobileFooter from "./MobileFooter"
import MobileRegisterHeading from "./MobileRegisterHeading"

const MobileRegistration = () => {

    const [ sidebarOpened, setSidebarOpened ] = useState()
    const navigate = useNavigate()
    return(
        <div>
           <Sidebar.Pushable>
            <Sidebar
            as={Menu}
            animation="overlay"
            vertical
            inverted
            onHide={() => setSidebarOpened(false)}
            visible={sidebarOpened}   
            
            style={{
                fontFamily: 'Poppins', 
                fontSize: '14px',
                fontWeight: 'normal',
                maxHeight: 560,
                minWidth: 200,
                backgroundColor: '#000000'
            }}       
            >
              
                <Menu.Item as='a'   active onClick={() => navigate("/")}>
                    Home
                </Menu.Item>
                <Menu.Item as='a' onClick={() => navigate("/")}>
                    Premier League
                    <Dropdown>

                    </Dropdown>
                </Menu.Item>
                <Menu.Item as='a'   onClick={() => navigate("/")}>
                    Competitions
                    <Dropdown>

                    </Dropdown>
                </Menu.Item>

                <Menu.Item as='a' onClick={() => navigate("/player/ranking")}>
                    Player Ratings
                </Menu.Item>
                <Menu.Item as='a'  onClick={() => navigate("/video")}>
                    Watch Videos
                </Menu.Item>
                <Menu.Item as='a'  onClick={() => navigate("/search/player/profile")}>
                    Player Profiles
                </Menu.Item>
                <Menu.Item as='a'  onClick={() => navigate("/gallary")}>
                    Image Gallary
                </Menu.Item>
                <Menu.Item as='a'  onClick={() => navigate("/results")}>
                    Results
                </Menu.Item>
          
                    <Grid.Row>
                        <Grid.Column style={{paddingTop: '4em'}}>
                            <p style={{ paddingBottom: '1.5em'}}>
                                <Link style={{
                                    fontFamily: 'Poppins',
                                    fontWeight: 'normal',
                                    fontSize: '14px',
                                    color: '#FFFFFF',
                                    paddingLeft: '1em',
                            
                                }} to="/signup">
                                    Register
                                </Link>
                            </p>
                            <p style={{paddingLeft: '1em'}}>
                                <Link  style={{
                                    fontFamily: 'Poppins',
                                    fontWeight: 'normal',
                                    fontSize: '14px',
                                    color: '#FFFFFF',
                            
                                }} to="/login">
                                    Login
                                </Link>
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{padding: '3em 1em'}}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={5}>
                                    <Icon size="large" style={{color: '#FFFFFF'}} name="instagram" />

                                </Grid.Column>
                                <Grid.Column width={5}>
                                    <Icon size="large" style={{color: '#FFFFFF'}} name="facebook f" />
                                </Grid.Column>
                                <Grid.Column width={5}>
                                    <Icon size="large" style={{color: '#FFFFFF'}} name="youtube" />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                       
                    </Grid.Row>
              
                
            
            </Sidebar>
            <Sidebar.Pusher dimmed={sidebarOpened}>
                <Segment
                 textAlign='center'
                 vertical
                 style={{backgroundColor: '#F6F6F6', padding: '0.5em 0.5em'}}           

                >
                    <Menu
                     fixed='top'
                     size="medium"
                     secondary
                     pointing
                     style={{border: 0, backgroundColor: '#F6F6F6', paddingTop: '0.5em', paddingLeft: '1em', paddingRight: '0.5em'}}           
                    >
                        <Container>
                        <Image onClick={() => navigate("/")}  size="mini" src="../../images/about/about.png" />
                                    
                            <Menu.Item as="a" position="right" onClick={() => setSidebarOpened(true)}>
                                 <Icon size="large" verticalAlign="middle" name="sidebar" />
                            </Menu.Item> 
                            
                        </Container>
                    </Menu>
                </Segment>
                <MobileRegisterHeading />
            </Sidebar.Pusher>
           <MobileFooter />
          
        </Sidebar.Pushable>
        </div>
              
    )

}

export default MobileRegistration