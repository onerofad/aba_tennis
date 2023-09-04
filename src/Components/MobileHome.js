import { useState } from "react"
import { Table, Input, Select, Sidebar, Menu, Container, Button, Segment, Icon, Image , Grid, Header, Divider, Placeholder} from "semantic-ui-react"
import 'semantic-ui-css/semantic.min.css'
import { useNavigate } from "react-router-dom"
import PaginationComponent from "./PaginationComponent"
import getNews from "./Db"
import '../AGRESSIVE.otf'
import '../style.css'

const MobileHome = () => {

    const options = [
        { key: 1, text: 'Choice 1', value: 1 },
        { key: 2, text: 'Choice 2', value: 2 },
        { key: 3, text: 'Choice 3', value: 3 },
      ]

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
    <Segment style={{padding: '4em 0em'}}>
        <Grid stackable>
            <Grid.Row>
                <Grid.Column>
                    <Image src="/images/about/about.png" />
                </Grid.Column>
                <Grid.Column verticalAlign="middle">
                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                            <p
                                style={{
                                    fontFamily: "Poppins",
                                    color: '#000000',
                                    fontWeight: 'normal',
                                    fontSize: '20px',
                                    lineHeight: '2em',
                                }}
                           
                           >
                            The 2023 Aba Premier League Table Tennis is a knock-out based open tournament. Its goal is to develop a professional table tennis league in Aba by promoting table tennis skills, professionalism among table tennis players and officials and developing standard playing infrastructure. Players will be able to earn ranking points, get ranked based on their points earned and win performance-based prize money

                            </p>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                            <Button
                                size="medium"
                                style={{
                                    fontFamily: "Poppins",
                                    color: '#ffffff',
                                    fontWeight: 'normal',
                                    fontSize: '16px',
                                    backgroundColor: '#193275',
                                }}
                            >
                                Register Now
                            </Button>
                         
                            <Button 
                                size="medium"
                                style={{
                                    fontFamily: "Poppins",
                                    color: '#193275',
                                    fontWeight: 'normal',
                                    fontSize: '16px',
                                    backgroundColor: '#ffffff',
                                    border: '1px solid #193275'
                                }}
                            
                            >
                                Check Prospectus
                            </Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>    
    <Segment style={{padding: '4em 0em', backgroundColor: '#030303'}}>
            <Container>
                <Grid stackable>
                    <Grid.Row>
                        <Grid.Column>
                        <Header style={{
                              color: '#FFFFFF',
                              fontFamily: 'AGRESSIVE',
                              fontSize: '35px',
                              fontWeight: 'bold',
                          }}
                      >
                          GET FREE ACCESS<br/>
                          FOR THE RANKING WEEK

                      </Header>                                       
                        </Grid.Column>               
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column>
                                        <p style={{
                                            color: '#FFFFFF',
                                            fontWeight: 'Regular',
                                            fontFamily: 'Poppins',
                                            fontSize: '15px'
                                            }}
                                        >
                                              - valid for ranking match only
                                        </p>
                                        <p
                                            style={{
                                                color: '#FFFFFF',
                                                fontWeight: 'Regular',
                                                fontFamily: 'Poppins',
                                                fontSize: '15px'
                                           }}
                                        >
                                                - 50 limited tickets

                                        </p>
                                        <p
                                            style={{
                                                color: '#FFFFFF',
                                                fontWeight: 'Regular',
                                                fontFamily: 'Poppins',
                                                fontSize: '15px'
                                           }}
                                        >
                                            - Expires 2nd october after which<br/><br/>
                                        Game tickets cost 500Naira only</p>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column verticalAlign="middle">
                                        <Button
                                            style={{
                                                color: '#193275',
                                                fontWeight: 'Regular',
                                                fontFamily: 'Poppins',
                                                fontSize: '15px',
                                                backgroundColor: '#FFFFFF'
                                            }}
                                                        
                                        >
                                                Get free pass
                                        </Button>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <Image src="/images/banner.png" />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>

    </Segment> 
    <Segment vertical style={{padding: '4em 0em', backgroundColor: '#F6F6F6'}}>
    <Container>
    <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <Header
                                content="PLAYER RANKING"
                                style={{
                                    fontFamily: "dharma-gothic-e",
                                    color: '#000000',
                                    fontWeight: 'bold',
                                    fontSize: '50px'
                                }}
                            />
                            <Divider />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Select 
                                    options={options} 
                                    placeholder="Premier League" 
                                    style={{
                                        color: '#000000',
                                        fontFamily: 'Poppins',
                                        fontSize: '16px',
                                        fontWeight: 'normal',
                                    }}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Select 
                                    options={options} 
                                    placeholder="Top 5 Players" 
                                    style={{
                                        color: '#000000',
                                        fontFamily: 'Poppins',
                                        fontSize: '16px',
                                        fontWeight: 'normal',
                                    }}
                            />
                       </Grid.Column>
                        <Grid.Column>
                            <Input placeholder="search"
                                      style={{
                                        color: '#000000',
                                        fontFamily: 'Poppins',
                                        fontSize: '16px',
                                        fontWeight: 'normal',
                                    }}
                            
                            />
                        </Grid.Column>
                    </Grid.Row>
                    <Divider />
                    <Grid.Row>
                        <Grid.Column>
                            <div style={{overflowX: 'scroll'}}>
                            <Table celled size="huge">
                                <Table.Header
                                    style={{
                                        color: '#000000',
                                        fontFamily: 'Poppins',
                                        fontSize: '16px',
                                        fontWeight: 'bold',
                                    }}
                                
                                >
                                    <Table.HeaderCell width={1}>Position</Table.HeaderCell>
                                    <Table.HeaderCell width={1}>Avatar</Table.HeaderCell>
                                    <Table.HeaderCell width={13}>Player Name</Table.HeaderCell>
                                    <Table.HeaderCell width={1}>Points</Table.HeaderCell>
                                </Table.Header>
                                <Table.Body
                                       style={{
                                        color: '#000000',
                                        fontFamily: 'Poppins',
                                        fontSize: '16px',
                                        fontWeight: 'bold',
                                    }}
                                
                                >
                                    <Table.Row>
                                        <Table.Cell>1</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>

                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>2</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>

                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>3</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>

                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>4</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>

                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>5</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>

                                    </Table.Row>
                                </Table.Body>
                            </Table>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                </Container>
    </Segment>    
            
        </Sidebar.Pushable>
        </div>
              
    )

}

export default MobileHome