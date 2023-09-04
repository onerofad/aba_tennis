import { useState } from "react"
import { Sidebar, Menu, Container, Button, Segment, Icon, Image , Grid, Header, Divider, Placeholder} from "semantic-ui-react"
import 'semantic-ui-css/semantic.min.css'
import { useNavigate } from "react-router-dom"
import PaginationComponent from "./PaginationComponent"
import getNews from "./Db"

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
                >
                    <Menu
                     fixed='top'
                     size="huge"
                     secondary
                     pointing
                     style={{backgroundColor: '#F6F6F6'}}           
                    >
                        <Container>
                                                                        
                            <Menu.Item position="right" onClick={() => setSidebarOpened(true)}>
                                <Icon verticalAlign="middle" name="sidebar" />
                            </Menu.Item> 
                            
                        </Container>
                    </Menu>
                </Segment>
                
            </Sidebar.Pusher>
            <Segment vertical style={{padding: '4em 0em'}}>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column textAlign="center">
                                        <Header
                                            content="ABA PREMIER LEAGUE
                                                     TABLE TENNIS"
                                            style={{
                                                    fontWeight: 'bold', 
                                                    fontFamily: 'AGRESSIVE',
                                                    fontSize: '40px',
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
                        <Segment>
        <Grid>
            <Grid.Row>
                <Grid.Column width={8}>
                    <Header
                        content="Latest News"
                        style={{
                            fontFamily: "dharma-gothic-e",
                            color: '#193275',
                            fontWeight: 'bold',
                            fontSize: '35px'
                        }}
                    />
                </Grid.Column>
                <Grid.Column width={8} textAlign="right">
                    <span
                        style={{
                            fontFamily: "Poppins",
                            color: '#000000',
                            fontWeight: 'normal',
                            fontSize: '20px'
                        }}
                    
                    >
                        View All <Icon name="right angle" />
                    </span>
                </Grid.Column>
            </Grid.Row>
            <Divider style={{marginTop: '0em'}} />
            
                {
                    getNews().map((news) => {
                    
                        if(news.id >= 1 && news.id <= 2){      
                            return(
                                <Grid.Row>
                                <Grid.Column key={news.id}>
                                    <Placeholder fluid style={{height: 200}}>
                                        <Placeholder.Image />
                                    </Placeholder>
                                    <Header
                                        content = {news.description}
                                        style={{
                                            fontFamily: "Poppins",
                                            color: '#000000',
                                            fontWeight: 'normal',
                                            fontSize: '16px',
                                        }}
                                    
                                    />
                                </Grid.Column>
                                </Grid.Row>
                            )
                        }
                       
                    })
                   
                }
                
           
            
            <Grid.Row>
                <Grid.Column style={{marginTop: '2em'}} textAlign="center">
                    <PaginationComponent />
                </Grid.Column>
            </Grid.Row>
        </Grid>

    </Segment>            
            
        </Sidebar.Pushable>
        </div>
              
    )

}

export default MobileHome