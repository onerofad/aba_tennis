import { Table, Input, Select, Sidebar, Menu, Container, Button, Segment, Icon, Image , Grid, Header, Divider, Placeholder, List} from "semantic-ui-react"

const MobilePrivacy = () => {
    return(
        <Segment style={{margin: 0, border: 0, padding: '2em 0em'}}>
        <Container>
        <Grid>
        <Grid.Row>
                <Grid.Column width={8}>
                    <Header
                        content="Privacy policy"
                        style={{
                            fontFamily: "dharma-gothic-e",
                            color: '#000000',
                            fontWeight: 'bold',
                            fontSize: '35px',
                        }}
                    />
                </Grid.Column>
              
            </Grid.Row>
            
            <Grid.Row>
                <Grid.Column verticalAlign="middle">
                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                            <p
                                style={{
                                    fontFamily: "Poppins",
                                    color: '#000000',
                                    fontWeight: 'normal',
                                    fontSize: '16px',
                                    lineHeight: '2em',
                                }}
                           
                           >
                            The 2023 Aba Premier League Table Tennis is a knock-out based open tournament. Its goal is to develop a professional table tennis league in Aba by promoting table tennis skills, professionalism among table tennis players and officials and developing standard playing infrastructure. Players will be able to earn ranking points, get ranked based on their points earned and win performance-based prize money

                            </p>
                            </Grid.Column>
                        </Grid.Row>
                      
                    </Grid>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        </Container>
    </Segment>    
    )
}

export default MobilePrivacy