import { Container, Divider, Dropdown, Grid, Header, Segment, Menu, Search, Table, Tab } from "semantic-ui-react"

const PlayerTable = () => {
    const options = [
        { key: 1, text: 'Choice 1', value: 1 },
        { key: 2, text: 'Choice 2', value: 2 },
        { key: 3, text: 'Choice 3', value: 3 },
      ]
    return(
        <Segment vertical style={{backgroundColor: '#F4F6F6', paddingTop: '2em', border: 0}}>
            <Container>
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <Header
                                content="PLAYER RANKING"
                            />
                            <Divider />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={8} style={{marginTop: '0em'}}>
                        <Menu compact>
                            <Dropdown text='Premier League' options={options} simple item />
                        </Menu>
                        <Menu compact>
                            <Dropdown text='Top 5 Players' options={options} simple item />
                        </Menu>
                       </Grid.Column>
                        <Grid.Column width={8} textAlign="right">
                            <Search placeholder="search" />
                        </Grid.Column>
                    </Grid.Row>
                    <Divider />
                    <Grid.Row>
                        <Grid.Column>
                            <Table celled size="huge">
                                <Table.Header>
                                    <Table.HeaderCell>Ranking</Table.HeaderCell>
                                    <Table.HeaderCell>Avatar</Table.HeaderCell>
                                    <Table.HeaderCell>Player Name</Table.HeaderCell>
                                    <Table.HeaderCell>Points</Table.HeaderCell>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>1</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>

                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>2</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>

                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>3</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>

                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>4</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>

                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>5</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>

                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    )
}
export default PlayerTable