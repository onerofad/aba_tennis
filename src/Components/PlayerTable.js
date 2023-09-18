import { useEffect, useState } from "react"
import { Container, Divider, Dropdown, Grid, Header,Image, Segment, Menu, Search, Table, Tab, Select, Input } from "semantic-ui-react"
import getsignupDetails from "../services/API"

const PlayerTable = () => {
    const options = [
        { key: 1, text: 'Premier League', value:  'Premier League' },
        { key: 2, text: 'Governor\'s cup', value: 'Governors Cup' },
        { key: 3, text: 'Chairman\'s cup', value: 'Chairmans Cup' },
    ]

    const [tab, setab] = useState([])
    const [loader, setloader] = useState(false)
    let id = 0
      
    const selectrank = (rank) => {
        setab([])
        setloader(true)
        setTimeout(() => {
            if(rank === "Premier League"){
                getsignupDetails().get("/")
                .then((res) => setab(res.data))
                setloader(false)

            }else{
                alert("No Entry")
                setloader(false)
            }
        }, 5000)
      
       
    }
    return(
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <Header
                                content="PLAYER RANKING"
                                style={{
                                    fontFamily: "dharma-gothic-e",
                                    color: '#000000',
                                    fontWeight: 'bold',
                                    fontSize: '50px'
                                }}
                            />
                            <Divider />
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
                    <Divider />
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
                                        ++id
                                        if(id <= 5){
                                            return(
                                            <Table.Row>
                                                    <Table.Cell>{id}</Table.Cell>
                                                    <Table.Cell><Image className="ui avatar image" src={rank.imageurl} /></Table.Cell>
                                                    <Table.Cell>{rank.fname + " " + rank.lname}</Table.Cell>
                                                    <Table.Cell>{rank.points}</Table.Cell>
            
                                            </Table.Row>
                                            )
                                        }
                                    })
                                  }
                                            

                                   
                                   
                                </Table.Body>
                            </Table>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
    )
}
export default PlayerTable