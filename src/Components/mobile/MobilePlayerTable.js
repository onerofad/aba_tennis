import { useEffect, useState } from "react"
import { Table, Input, Select, Sidebar, Menu, Container, Button, Segment, Icon, Image , Grid, Header, Divider, Placeholder, List} from "semantic-ui-react"
import { getRanking } from "../../services/API"

const MobilePlayerTable = () => {
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
        <Segment vertical style={{border: 0, margin: 0, padding: '4em 0em', backgroundColor: '#F6F6F6'}}>
    <Container>
    <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <Header
                                content="PLAYER RANKING"
                                style={{
                                    fontFamily: "dharma-gothic-e",
                                    color: '#000000',
                                    fontWeight: 'bold',
                                    fontSize: '35px'
                                }}
                            />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={4}>
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
                        </Grid.Row>                   
                        <Grid.Row>
                        <Grid.Column>
                            {/*<Placeholder>
                                <Placeholder.Line />
                                <Placeholder.Line />
                                <Placeholder.Line />
                                <Placeholder.Line />
                                <Placeholder.Line />
                            </Placeholder>
                            */}
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
                                        <Table.Row>
                                                <Table.Cell>1</Table.Cell>
                                                <Table.Cell>2</Table.Cell>
                                                <Table.Cell>{rank.firstname}</Table.Cell>
                                                <Table.Cell>{rank.points}</Table.Cell>
        
                                        </Table.Row>
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
export default MobilePlayerTable