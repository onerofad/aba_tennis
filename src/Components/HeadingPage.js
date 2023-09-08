import { Button, Container, Grid, Header, List, Segment, Image } from "semantic-ui-react"
import '../AGRESSIVE.otf'
import '../style.css'
import {useNavigate} from 'react-router-dom'

const HeadingPage = () => {
    const navigate = useNavigate()

    const openregister = () => {
        if(sessionStorage.getItem("em") === null ){
            navigate("/signup")
        }else{
            navigate("/register")

        }

    }
    return(
        <Grid>
            <Grid.Row>
                    <Grid.Column style={{color: '#000000'}} width={3}>
                        <Segment >
                            <List 
                                relaxed  size="small"
                                style={{
                                        fontSize: '18px',
                                        fontWeight: 'normal',
                                        fontFamily: 'Poppins',
                                        color: '#000000'
                                }}
                            >
                                <List.Item style={{color: '#000000'}} as="a" onClick={() => navigate("/ranking")}>Player Rankings</List.Item>
                                <List.Item style={{color: '#000000'}} as="a" onClick={() => navigate("/videos")}>Watch Videos</List.Item>
                                <List.Item style={{color: '#000000'}} disabled>Coming Up</List.Item>
                                <List.Item style={{color: '#000000'}} as="a" onClick={() => navigate("search/profile")}>Player Profiles</List.Item>
                                <List.Item style={{color: '#000000'}} as="a" onClick={() => navigate("/gallary")}>Image Gallery</List.Item>
                                <List.Item style={{color: '#000000'}} as="a" onClick={() => navigate("/results")}>Results</List.Item>
                            </List>

                        </Segment>
                       

                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Segment vertical style={{marginTop: '0em', paddingTop: '0em'}}>
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
                                                    paddingTop: '0em'
                                                  }}
                                        />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column>
                                    <Segment id="bgSegment"  
                                        style={{
                                            maxHeight: 430,
                                            padding: '2em 0em' 
                                        }}          
                                    >
                                        
                                        <Grid verticalAlign="middle">
                                                <Grid.Row>
                                                    <Grid.Column style={{paddingTop: '2em'}} textAlign="center">
                                                        <Header
                                                            content="2nd October to 5th November 2023"
                                                            style={{
                                                            	fontFamily: "dharma-gothic-e",
                                                                color: '#ffffff',
                                                                fontWeight: 'normal',
                                                                fontSize: '45px',
                                                              
                                                            }}
                                                        />
                                                    </Grid.Column>
                                                </Grid.Row>
                                                <Grid.Row >
                                                    <Grid.Column textAlign="center">
                                                        <Button 
                                                        style={{
                                                            color: '#193275', 
                                                            fontSize: '18px',
                                                            fontWeight: 'normal',
                                                            fontFamily: 'Poppins',      
                                                        }}
                                                        onClick={() => openregister()}
                                                        >
                                                            Register
                                                        </Button>
                                                    </Grid.Column>
                                                </Grid.Row>
                                                <Grid.Row>
                                                    <Grid.Column>
                                                        <Image verticalAlign="top" style={{paddingLeft: '0em', marginTop: '0em'}} size="medium" src="/images/tennispat.svg" />
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