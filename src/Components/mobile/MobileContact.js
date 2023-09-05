import { Table, Input, Select, Sidebar, Menu, Container, Button, Segment, Icon, Image , Grid, Header, Divider, Placeholder, List} from "semantic-ui-react"

const MobileContact = () => {
    return(
        <Segment  style={{margin: 0, border: 0, backgroundColor: '#c3c0c0', padding: '4em 0em'}}>
        <Container>
            <Grid textAlign="center">
                <Grid.Row>
                    <Grid.Column>
                        <Header style={{
                                fontFamily: "dharma-gothic-c",
                                fontWeight: 'bold',
                                fontSize: '120px',
                                marginBottom: 0
                            }}
                        >
                            STAY <span style={{color: '#D70826'}}>INFORMED</span>
                        </Header>
                        <span 
                            style={{
                                fontSize: '16px',
                                fontFamily: 'Poppins',
                                fontWeight: 'normal'

                            }}
                            >
                                Up to date with today's top stories
                        </span>

                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Input fluid type="text"  placeholder="Email" />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                    <Button
                                                        size="huge"
                                                        style={{
                                                            color: '#FFFFFF',
                                                            backgroundColor: '#193275'
                                                        }}
                                                     >
                                                        Submit
                                                     </Button>
                    </Grid.Column>
                </Grid.Row>
               
            </Grid>
            </Container>

        </Segment>
    )
}
export default MobileContact