import { useState } from "react"
import { Sidebar, Menu, Container, Button, Segment, Icon, Image , Grid, Header} from "semantic-ui-react"
import 'semantic-ui-css/semantic.min.css'
import { useNavigate } from "react-router-dom"

const MobileHome = () => {
    const openregister = () => {
        if(sessionStorage.getItem("em") === null ){
            navigate("/signup")
        }else{
            navigate("/register")

        }

    }
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
                >
                    <Menu
                     fixed='top'
                     size="huge"
                     secondary
                     pointing
                     style={{backgroundColor: '#F6F6F6'}}           
                    >
                        <Container>
                            <Menu.Item as='a' >
                                <Image size="mini" src="/images/about/about.png" />
                            </Menu.Item>                                                
                            <Menu.Item position="right" onClick={() => setSidebarOpened(true)}>
                                <Icon verticalAlign="middle" name="sidebar" />
                            </Menu.Item> 
                            
                        </Container>
                    </Menu>
                </Segment>
            </Sidebar.Pusher>
            <Segment vertical>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column textAlign="center">
                                        <Header
                                            content="ABA PREMIER LEAGUE
                                                     TABLE TENNIS"
                                            style={{
                                                    fontWeight: 'bold', 
                                                    fontFamily: 'AGRESSIVE',
                                                    fontSize: '25px',
                                                    color: '#000000',
                                                  }}
                                        />
                                        <Segment id="bgSegment"  
                                                  style={{
                                                    maxHeight: 300,
                                                    padding: '2em 0em' 
                                                }}          
                                        >
                                            <Grid verticalAlign="middle">
                                                <Grid.Row>
                                                    <Grid.Column>
                                                        <Header
                                                            content="2nd October to 5th November 2023"
                                                            style={{
                                                            	fontFamily: "dharma-gothic-e",
                                                                color: '#ffffff',
                                                                fontWeight: 'normal',
                                                                fontSize: '50px',
                                                              
                                                            }}
                                                        />
                                                    </Grid.Column>
                                                </Grid.Row>
                                                <Grid.Row >
                                                    <Grid.Column>
                                                        <Button 
                                                        style={{
                                                            color: '#193275', 
                                                            fontSize: '20px',
                                                            fontWeight: 'normal',
                                                            fontFamily: 'Poppins',      
                                                        }}
                                                        onClick={() => openregister()}
                                                        >
                                                            Register
                                                        </Button>
                                                    </Grid.Column>
                                                </Grid.Row>
                                            </Grid>
                                        </Segment>
                                    </Grid.Column>

                                </Grid.Row>

                            </Grid>
                        </Segment>
        </Sidebar.Pushable>
        </div>
              
    )

}

export default MobileHome