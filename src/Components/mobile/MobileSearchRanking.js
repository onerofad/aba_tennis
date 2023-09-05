import { Container, Divider, Dropdown, Grid, Header, Segment, Icon, Menu, Search, Table, Tab, Select, Input } from "semantic-ui-react"

const MobileSearchRanking = () => {
    const options = [
        { key: 1, text: 'Choice 1', value: 1 },
        { key: 2, text: 'Choice 2', value: 2 },
        { key: 3, text: 'Choice 3', value: 3 },
      ]
    return(
        <Segment vertical style={{backgroundColor: '#F6F6F6', padding: '6em 0em'}}>
            <Container>
            <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <Header
                                content="PLAYER RANKING"
                                style={{
                                    fontFamily: "AGRESSIVE",
                                    color: '#000000',
                                    fontWeight: 'bold',
                                    fontSize: '20px'
                                }}
                            />
                            <Divider />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={8}>
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
                        <Grid.Column width={8}>
                            <Input 
                                    placeholder="Search" 
                                    style={{
                                        color: '#000000',
                                        fontFamily: 'Poppins',
                                        fontSize: '16px',
                                        fontWeight: 'normal',
                                    }}
                            />
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
export default MobileSearchRanking