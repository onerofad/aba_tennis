import { useState } from "react"
import { Sidebar, Menu, Container, Button, Segment, Icon } from "semantic-ui-react"
import 'semantic-ui-css/semantic.min.css'

import { Link } from "react-router-dom"

const MobileHome = () => {

    const [ sidebarOpened, setSidebarOpened ] = useState()

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
            >
              
                <Menu.Item as='a' active>
                        <Link style={{color: '#FFF'}} to='/'>Home</Link>
                </Menu.Item>
                <Menu.Item as='a' pointing>
                        <Link style={{color: '#FFF'}} to='/'>Jobs</Link>
                </Menu.Item>
                <Menu.Item as='a'>
                        <Link style={{color: '#FFF'}} to='/'>Careers</Link>
                </Menu.Item>
                <Menu.Item as='a'>
                        <Link style={{color: '#FFF'}} to='/'>Post Jobs</Link>
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
                                <Link style={{color: '#000'}} to='/'>JOBSITE</Link>
                            </Menu.Item>                           
                            <Menu.Item as="a" position="right">
                                <Icon name='sign-in' />
                                <Link style={{color: '#000'}} to="/signin">Sign In</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Button as="button" style={{backgroundColor: 'teal', color: '#FFF'}}>
                                    Upload Resume
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