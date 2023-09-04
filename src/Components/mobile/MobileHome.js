import { useState } from "react"
import { Table, Input, Select, Sidebar, Menu, Container, Button, Segment, Icon, Image , Grid, Header, Divider, Placeholder, List} from "semantic-ui-react"
import 'semantic-ui-css/semantic.min.css'
import { useNavigate } from "react-router-dom"
import './AGRESSIVE.otf'
import './style.css'
import MobileHeading from './MobileHeading'
import MobileLatestNews from "./MobileLatestNews"
import MobileAbout from "./MobileAbout"
import MobileAccessRanking from "./MobileAccessRanking"
import MobilePlayerTable from "./MobilePlayerTable"
import MobileContact from "./MobileContact"
import MobileFooter from "./MobileFooter"

const MobileHome = () => {

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
                fontSize: '20px',
                fontWeight: 'normal',
                maxHeight: 1000
            }}       
            >
              
                <Menu.Item as='a' active onClick={() => navigate("/")}>
                    Home
                </Menu.Item>
                <Menu.Item as='a' pointing onClick={() => navigate("/")}>
                    Premier League
                </Menu.Item>
                <Menu.Item as='a' pointing onClick={() => navigate("/")}>
                    Competitions
                </Menu.Item>

                <Menu.Item as='a' onClick={() => navigate("/")}>
                    Player Ratings
                </Menu.Item>
                <Menu.Item as='a' pointing onClick={() => navigate("/")}>
                    Watch Videos
                </Menu.Item>
                <Menu.Item as='a' pointing onClick={() => navigate("/")}>
                    Coming Up
                </Menu.Item>
                <Menu.Item as='a' pointing onClick={() => navigate("/")}>
                    Player Profiles
                </Menu.Item>
                <Menu.Item as='a' pointing onClick={() => navigate("/")}>
                    Image Gallary
                </Menu.Item>
                <Menu.Item as='a' pointing onClick={() => navigate("/")}>
                    Results
                </Menu.Item>
            
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
                     style={{border: 0, backgroundColor: '#F6F6F6', padding: '0.5em 0.5em'}}           
                    >
                        <Container>
                        <Image size="mini" src="../../images/about/about.png" />
                                    
                            <Menu.Item as="a" position="right" onClick={() => setSidebarOpened(true)}>
                                 <Icon size="large" verticalAlign="middle" name="sidebar" />
                            </Menu.Item> 
                            
                        </Container>
                    </Menu>
                </Segment>
                <MobileHeading />
                <MobileLatestNews />
            </Sidebar.Pusher>
                <MobileAbout />      
                <MobileAccessRanking />
                <MobilePlayerTable />
                <MobileContact />
                <MobileFooter />
          
        </Sidebar.Pushable>
        </div>
              
    )

}

export default MobileHome