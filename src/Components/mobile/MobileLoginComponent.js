import {Icon, Sidebar, Form, Modal, Dropdown, Segment, Grid, Menu, Container, Image, Button, Header, Divider, Placeholder } from "semantic-ui-react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useEffect, useReducer, useState } from "react"
import MobileLogin from "./MobileLogin"

const MobileLoginComponent = () => {

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
                <Menu.Item as='a'  onClick={() => navigate("/")}>
                    Premier League
                </Menu.Item>
                <Menu.Item as='a'  onClick={() => navigate("/")}>
                    Competitions
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


                <Menu.Item as='a'  onClick={() => navigate("/signup")}>
                    Register
                </Menu.Item>
                <Menu.Item as='a'  onClick={() => navigate("/login")}>
                    Login
                </Menu.Item>
         
            
            </Sidebar>
            <Sidebar.Pusher dimmed={sidebarOpened}>
                <Segment
                 textAlign='center'
                 vertical
                 style={{border: 0, backgroundColor: '#F6F6F6', padding: '0.5em 0.5em'}}           

                >
                    <Menu
                     fixed='top'
                     size="medium"
                     secondary
                     pointing
                     style={{border: 0, backgroundColor: '#F6F6F6', paddingTop: '0.5em', paddingLeft: '1em', paddingRight: '0.5em'}}           
                    >
                        <Container>
                        <Image  size="mini" src="../../images/about/about.png" />
                                    
                            <Menu.Item as="a" position="right" onClick={() => setSidebarOpened(true)}>
                                 <Icon size="large" verticalAlign="middle" name="sidebar" />
                            </Menu.Item> 
                            
                        </Container>
                    </Menu>
                </Segment>
             <MobileLogin />
            </Sidebar.Pusher>
          
        </Sidebar.Pushable>
        </div>
    )
}
export default MobileLoginComponent