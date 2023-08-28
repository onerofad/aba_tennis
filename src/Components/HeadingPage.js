import { Button, Container, Grid, Header, List, Segment, Image } from "semantic-ui-react"
import '../AGRESSIVE.otf'
import '../style.css'

const HeadingPage = () => {
    return(
            <Grid>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <Segment>
                            <List 
                                relaxed  size="big"
                                style={{
                                        fontSize: '20px',
                                        fontWeight: 'Regular',
                                        fontFamily: 'Poppins',
                                        lineSpacing: 30,
                                        characterSpacing: 0
                  
                                }}
                            >
                                <List.Item as="a" style={{color: '#000000'}}>Player Ratings</List.Item>
                                <List.Item as="a" style={{color: '#000000', }}>Watch Videos</List.Item>
                                <List.Item as="a" style={{color: '#000000', }}>Coming Up</List.Item>
                                <List.Item as="a" style={{color: '#000000', }}>Player Profiles</List.Item>
                                <List.Item as="a" style={{color: '#000000', }}>Image Gallary</List.Item>
                                <List.Item as="a" style={{color: '#000000'}}>Results</List.Item>
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
                                                    characterSpacing: 20,
                                                    lineSpacing: 80,
                                                    transform: 'uppercase'

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
                                                                fontWeight: 'Regular',
                                                                fontSize: '50px',
                                                                characterSpacing: 20,
                                                                lineSpacing: 100
                                                            }}
                                                        />
                                                    </Grid.Column>
                                                </Grid.Row>
                                                <Grid.Row >
                                                    <Grid.Column>
                                                        <Button 
                                                        size="large"
                                                        style={{
                                                            color: '#193275', 
                                                            fontSize: '20px',
                                                            fontWeight: 'Regular',
                                                            fontFamily: 'Poppins',
                                                            lineSpacing: 30,
                                                            characterSpacing: 0,
                                      
                                                        }}
                                                        
                                                        >
                                                            Register
                                                        </Button>
                                                    </Grid.Column>
                                                </Grid.Row>
                                                <Grid.Row style={{marginTop: 0}}>
                                                    <Grid.Column verticalAlign="bottom">
                                                        <Image style={{margin: '0em 0em'}} size="small" src="/images/tennispat.svg" />
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