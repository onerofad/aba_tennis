import { useState } from "react"
import { Sidebar, Menu, Container, Button, Segment, Icon } from "semantic-ui-react"
import 'semantic-ui-css/semantic.min.css'
import { useNavigate } from "react-router-dom"

import { Link, useNavigate } from "react-router-dom"

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
            
            </Sidebar>
            <Sidebar.Pusher dimmed={sidebarOpened}>
                <Segment
                 textAlign='center'
                 vertical
                 id='bgSegment'
                 style={{ minHeight: 350, padding: '1em 0em' }} 
                >
                    <Menu
                     fixed='top'
                     size="huge"
                     secondary
                     pointing
                     style={{backgroundColor: '#FFFFFF'}}           
                    >
                        <Container>
                            <Menu.Item onClick={() => setSidebarOpened(true)}>
                                <Icon name="sidebar" />
                            </Menu.Item>
                            <Menu.Item as='a' >
                                ABA TENNIS
                            </Menu.Item>                           
                            <Menu.Item 
                             as="a" 
                             position="right" 
                             onClick={() => navigate("/login")}>
                             <Icon name='sign-in' />
                                Login
                            </Menu.Item>
                            <Menu.Item>
                                <Button
                                onClick={() => navigate("/signup")}
                                style={{
                                    backgroundColor: '#193275', 
                                    fontSize: '20px',
                                    fontWeight: 'normal',
                                    fontFamily: 'Poppins',
                                    color: '#FFFFFF',
                                }}
                                
                                >
                                    Register
                                </Button>
                            </Menu.Item>
                            
                        </Container>
                    </Menu>
                </Segment>
            </Sidebar.Pusher>
        </Sidebar.Pushable>
        </div>
              
    )

}

export default MobileHome