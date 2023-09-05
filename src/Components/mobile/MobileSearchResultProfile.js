import { Grid, Segment, Header, Container, Divider, Input, Icon} from "semantic-ui-react"

const MobileSearchResultProfile = () => {
    return(
        <Segment vertical style={{border: 0, backgroundColor: '#F6F6F6', padding: '6em 0em'}}>
        <Container>
        <Grid>
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
                <Input fluid placeholder="Search for player" />

            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
                        <Grid.Column>
                        <Header
                            content="RESULT SEARCH FOR CHIMA"
                            style={{
                                fontFamily: "dharma-gothic-e",
                                color: '#000000',
                                fontWeight: 'bold',
                                fontSize: '30px',
                                characterSpacing: 20,
                                lineSpacing: 100
                            }}
                        />
                            
                        </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{paddingBottom: '1em'}}>
                    <Grid.Column textAlign="center">                     
                    <Segment textAlign='left' vertical style={{padding: '1em', fontFamily: 'Poppins', fontSize: '16px', backgroundColor: '#000000', color: '#FAFAFA'}}>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                Chimo Okereke
                                            </Grid.Column>
                                            <Grid.Column textAlign='right' width={8}>
                                                View full profile <Icon name="right angle" />
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Segment>
                                                    
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row style={{paddingBottom: '1em'}}>
                    <Grid.Column textAlign="center"> 
                    <Segment textAlign='left' vertical style={{padding: '1em', fontFamily: 'Poppins', fontSize: '16px', backgroundColor: '#000000', color: '#FAFAFA'}}>
                                <Grid>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                Chimoabi Ekueme
                                            </Grid.Column>
                                            <Grid.Column textAlign='right' width={8}>
                                                View full profile <Icon name="right angle" />
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Segment>                           
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row style={{paddingBottom: '1em'}}>
                    <Grid.Column textAlign="center"> 
                    <Segment textAlign='left' vertical style={{padding: '1em', fontFamily: 'Poppins', fontSize: '16px', backgroundColor: '#000000', color: '#FAFAFA'}}>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                Chima Onkeme
                                            </Grid.Column>
                                            <Grid.Column textAlign='right' width={8}>
                                                View full profile <Icon name="right angle" />
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                    
                                </Segment>                             
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column textAlign="center">
                        <span>End of search result</span>
                    </Grid.Column>
                </Grid.Row>
                <Divider />
    
            
    </Grid>
    </Container>
</Segment>

    )
}
export default MobileSearchResultProfile