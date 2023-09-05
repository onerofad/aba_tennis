import { Container, Grid, Header, Segment, Divider, Select, Table } from "semantic-ui-react"


const MobileResult = () => {
    const options = [
        { key: 1, text: 'Ranking (week 1)', value: 1 },
        { key: 2, text: 'Ranking (week 2)', value: 2 },
        { key: 3, text: 'Ranking (week 3)', value: 3 },
        { key: 4, text: 'Ranking (week 4)', value: 4 },
        { key: 5, text: 'Ranking (week 5)', value: 5 },

      ]
    return(
        <Segment vertical style={{backgroundColor: '#F6F6F6', padding: '6em 0em'}}>
            <Container>
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                        <Header 
                            content = "RESULTS"
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
                            <Select 
                                    options={options} 
                                    fluid
                                    placeholder="Select Week"
                                    style={{
                                        color: '#000000',
                                        fontFamily: 'Poppins',
                                        fontSize: '16px',
                                        fontWeight: 'normal',
                                    }}
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
            <Segment vertical style={{backgroundColor: '#193275', padding: '2em', margin: '2em 0em'}}>
                <Grid>                     
                    <Grid.Row>
                        <Grid.Column textAlign="center"> 
                            <Container>
                                <Segment 
                                    style={{
                                        backgroundColor: '#FFFFFF', 
                                        fontFamily: 'Poppins',
                                        fontSize: '14px',
                                        fontWeight: 'normal'
                                    
                                    }}>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column
                                                style={{
                                                    backgroundColor: '#FFFFFF', 
                                                    fontFamily: 'Poppins',
                                                    fontSize: '20px',
                                                    fontWeight: 'normal'
                                                
                                                }} textAlign="center">
                                                October 2, 2023
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row divided>
                                            <Grid.Column>
                                                <Grid>
                                                    <Grid.Row>
                                                        <Grid.Column>
                                                            <Table basic="very" unstackable >
                                                                <Table.Header>
                                                                    <Table.Row>
                                                                        <Table.HeaderCell>Player</Table.HeaderCell>
                                                                        <Table.HeaderCell>Slot 1</Table.HeaderCell>
                                                                        <Table.HeaderCell>Slot 2</Table.HeaderCell>
                                                                        <Table.HeaderCell>Slot 3</Table.HeaderCell>
                                                                    </Table.Row>              
                                                                </Table.Header>
                                                                <Table.Body>
                                                                    <Table.Row>
                                                                        <Table.Cell>A. Chukwudi</Table.Cell>
                                                                        <Table.Cell>7</Table.Cell>
                                                                        <Table.Cell>4</Table.Cell>
                                                                        <Table.Cell>10</Table.Cell>
                                                                    </Table.Row>
                                                                    <Table.Row>
                                                                        <Table.Cell>M. Onori</Table.Cell>
                                                                        <Table.Cell>10</Table.Cell>
                                                                        <Table.Cell>10</Table.Cell>
                                                                        <Table.Cell>10</Table.Cell>
                                                                    </Table.Row>
                                                                    <br/><br/>
                                                                    <Table.Row>
                                                                        <Table.Cell>A. Chukwudi</Table.Cell>
                                                                        <Table.Cell>7</Table.Cell>
                                                                        <Table.Cell>4</Table.Cell>
                                                                        <Table.Cell>10</Table.Cell>
                                                                    </Table.Row>
                                                                    <Table.Row>
                                                                        <Table.Cell>M. Onori</Table.Cell>
                                                                        <Table.Cell>10</Table.Cell>
                                                                        <Table.Cell>10</Table.Cell>
                                                                        <Table.Cell>10</Table.Cell>
                                                                    </Table.Row>
                                                                    <br/><br/>
                                                                    <Table.Row>
                                                                        <Table.Cell>A. Chukwudi</Table.Cell>
                                                                        <Table.Cell>7</Table.Cell>
                                                                        <Table.Cell>4</Table.Cell>
                                                                        <Table.Cell>10</Table.Cell>
                                                                    </Table.Row>
                                                                    <Table.Row>
                                                                        <Table.Cell>M. Onori</Table.Cell>
                                                                        <Table.Cell>10</Table.Cell>
                                                                        <Table.Cell>10</Table.Cell>
                                                                        <Table.Cell>10</Table.Cell>
                                                                    </Table.Row>
                                                                    
                                                                      
                                                                </Table.Body>
                                                            </Table>
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                </Grid>

                                            </Grid.Column>

                                        </Grid.Row>


                                        

                                        
                                    </Grid>

                                </Segment>
                            </Container>
                                
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

            </Segment>
        </Segment>
    )
}
export default MobileResult