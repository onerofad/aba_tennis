import { Button, Container, Grid, Header, List, Segment, Image } from "semantic-ui-react"
import '../AGRESSIVE.otf'
import '../style.css'
import {useNavigate} from 'react-router-dom'

const HeadingPage = () => {
    const navigate = useNavigate()
    return(
        <Grid>
            <Grid.Row>
                    <Grid.Column style={{color: '#000000'}} width={3}>
                        <Segment >
                            <List 
                                relaxed  size="medium"
                                style={{
                                        fontSize: '20px',
                                        fontWeight: 'normal',
                                        fontFamily: 'Poppins',
                                        color: '#000000'
                                }}
                            >
                                <List.Item style={{color: '#000000'}} as="a" onClick={() => navigate("/ranking")}>Player Ratings</List.Item>
                                <List.Item style={{color: '#000000'}} as="a" onClick={() => navigate("/videos")}>Watch Videos</List.Item>
                                <List.Item style={{color: '#000000'}}>Coming Up</List.Item>
                                <List.Item style={{color: '#000000'}} as="a" onClick={() => navigate("search/profile")}>Player Profiles</List.Item>
                                <List.Item style={{color: '#000000'}} as="a" onClick={() => navigate("/gallary")}>Image Gallary</List.Item>
                                <List.Item style={{color: '#000000'}}>Results</List.Item>
                            </List>

                        </Segment>
                       

                    </Grid.Column>
                    <Grid.Column width={12}>
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
                                                    fontSize: '50px',
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
                                                        onClick={() => navigate("/signup")}
                                                        >
                                                            Register
                                                        </Button>
                                                    </Grid.Column>
                                                </Grid.Row>
                                                <Grid.Row>
                                                    <Grid.Column verticalAlign="top">
                                                        <Image size="small" src="/images/tennispat.svg" />
                                                    </Grid.Column>
                                                </Grid.Row>
                                            </Grid>
                                        </Segment>
                                    </Grid.Column>

                                </Grid.Row>

                            </Grid>
                        </Segment>
                        
                    </Grid.Column>
                </Grid.Row>    

        </Grid>       
    )
}
export default HeadingPage