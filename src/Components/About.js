import { Container, Segment, Grid, Image, Header, Button } from "semantic-ui-react"
import "../style.css"

const About = () => {
    return(
 
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <Segment style={{padding: '4em 6em'}}>
                                <Grid>
                                    <Grid.Row>
                                        <Grid.Column width={6}>
                                            <Image src="/images/about/about.png" />
                                        </Grid.Column>
                                        <Grid.Column width={10}  verticalAlign="middle">
                                            <Grid>
                                                <Grid.Row>
                                                    <Grid.Column>
                                                    <p
                                                        style={{
                                                            fontFamily: "Poppins",
                                                            color: '#000000',
                                                            fontWeight: 'normal',
                                                            fontSize: '20px',
                                                            characterSpacing: 0,
                                                            lineHeight: '1.8em',
                                                        }}
                                                   
                                                   >
                                                    The 2023 Aba Premier League Table Tennis is a knock-out based open tournament. Its goal is to develop a professional table tennis league in Aba by promoting table tennis skills, professionalism among table tennis players and officials and developing standard playing infrastructure. Players will be able to earn ranking points, get ranked based on their points earned and win performance-based prize money

                                                    </p>
                                                    </Grid.Column>
                                                </Grid.Row>
                                                <Grid.Row>
                                                    <Grid.Column width={6}>
                                                    <Button 
                                                        size="large" 
                                                        fluid
                                                        style={{
                                                            fontFamily: "Poppins",
                                                            color: '#ffffff',
                                                            fontWeight: 'Regular',
                                                            fontSize: '18px',
                                                            characterSpacing: 0,
                                                            lineSpacing: 30,
                                                            backgroundColor: '#193275',
                                                        }}
                                                    >
                                                        Register Now
                                                    </Button>
                                                    </Grid.Column>
                                                    <Grid.Column width={7}>
                                                    <Button 
                                                        size="large"
                                                        fluid
                                                      
                                                        style={{
                                                            fontFamily: "Poppins",
                                                            color: '#193275',
                                                            fontWeight: 'Regular',
                                                            fontSize: '18px',
                                                            characterSpacing: 0,
                                                            lineSpacing: 30,
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
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
        
    )
}
export default About