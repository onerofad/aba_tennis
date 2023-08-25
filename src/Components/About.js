import { Container, Segment, Grid, Image, Header, Button } from "semantic-ui-react"

const About = () => {
    return(
        <Segment vertical style={{backgroundColor: '#F4F6F6'}}>
            <Container>
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <Segment>
                                <Grid>
                                    <Grid.Row>
                                        <Grid.Column width={6}>
                                            <Image src="/images/about/about.png" />
                                        </Grid.Column>
                                        <Grid.Column width={10}  verticalAlign="middle">
                                            <Grid>
                                                <Grid.Row>
                                                    <Grid.Column>
                                                    <Header
                                                        as="h1"
                                                        content="The 2023 Aba Premier League Table Tennis is a knock-out based open tournament. Its goal is to develop a professional table tennis league in Aba by promoting table tennis skills, professionalism among table tennis players and officials and developing standard playing infrastructure. Players will be able to earn ranking points, get ranked based on their points earned and win performance-based prize money"
                                                    />
                                                    </Grid.Column>
                                                </Grid.Row>
                                                <Grid.Row>
                                                    <Grid.Column width={4}>
                                                    <Button size="huge" primary>
                                                        Register
                                                    </Button>
                                                    </Grid.Column>
                                                    <Grid.Column width={6}>
                                                    <Button size="huge" basic primary>
                                                        Learn more
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
            </Container>
        </Segment>
    )
}
export default About