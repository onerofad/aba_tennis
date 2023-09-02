import { Container, Grid, Header, Segment, Divider, Input } from "semantic-ui-react"
import Footer from "./Footer"
import Headers from "./Headers"

const SearchProfile = () => {
    return(
        <Segment vertical style={{backgroundColor: '#F6F6F6'}}>
            <Container>
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <Headers />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                        <Header 
                            content = "PLAYER PROFILES"
                            style={{
                                fontFamily: 'AGRESSIVE',
                                fontWeight: 'bold',
                                fontSize: '25px',
                            }}
                        
                        />
                        <Divider />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Input placeholder="Search for player" />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{paddingBottom: '9em'}}>
                        <Grid.Column textAlign="center"> 
                            <span style={{
                                fontFamily: 'Poppins',
                                fontWeight: 'normal',
                                fontSize: '20px'
                            }}>
                                use the search bar to begin you search
                            </span>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{padding: '2em 6em'}}>
                        <Grid.Column>
                            <Footer />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>

        </Segment>
    )
}
export default SearchProfile