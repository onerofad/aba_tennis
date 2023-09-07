import { Container, Divider, Dropdown, Grid, Header, Segment, Menu, Search, Table, Tab, Select, Input } from "semantic-ui-react"

const MobileRanking = () => {
    const options = [
        { key: 1, text: 'Premier League', value:  'Premier League' },
        { key: 2, text: 'Governor\'s cup', value: 'Governors Cup' },
        { key: 3, text: 'Chairman\'s cup', value: 'Chairmans Cup' },
    ]

    const [tab, setab] = useState([])
    const [loader, setloader] = useState(false)
      
    const selectrank = (rank) => {
        setloader(true)
        setTimeout(() => {
            if(rank === "Premier League"){
                getRanking().get("/")
                .then((res) => setab(res.data))
                setloader(false)

            }else{
                alert("No Entry")
                setloader(false)
            }
        }, 5000)
      
       
    }
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
                                    onChange={(e, {value}) => selectrank(value.toString())}
                                    style={{
                                        color: '#000000',
                                        fontFamily: 'Poppins',
                                        fontSize: '16px',
                                        fontWeight: 'normal',
                                    }}
                                   loading = {loader} 
                            />
                        </Grid.Column>
                        {
                            /*
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

                                */}
                      
                       
                       
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                        <Table celled size="large" basic="very" unstackable >
                                <Table.Header
                                    style={{
                                        color: '#000000',
                                        fontFamily: 'Poppins',
                                        fontSize: '16px',
                                        fontWeight: 'normal',
                                    }}
                                
                                >
                                    <Table.HeaderCell width={1}>Position</Table.HeaderCell>
                                    <Table.HeaderCell width={1}>Avatar</Table.HeaderCell>
                                    <Table.HeaderCell width={13}>Player Name</Table.HeaderCell>
                                    <Table.HeaderCell width={1}>Points</Table.HeaderCell>
                                </Table.Header>
                                <Table.Body
                                       style={{
                                        color: '#000000',
                                        fontFamily: 'Poppins',
                                        fontSize: '16px',
                                        fontWeight: 'bold',
                                    }}
                                    
                                >
                                  {
                                    tab.map((rank) => {
                                        return(
                                        <Table.Row>
                                                <Table.Cell>1</Table.Cell>
                                                <Table.Cell>2</Table.Cell>
                                                <Table.Cell>{rank.firstname}</Table.Cell>
                                                <Table.Cell>{rank.points}</Table.Cell>
        
                                        </Table.Row>
                                        )
                                    })
                                  }
                                            

                                   
                                   
                                </Table.Body>
                            </Table>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

            </Container>
        </Segment>
                
    )
}
export default MobileRanking