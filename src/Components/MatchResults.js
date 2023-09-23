import { Container, Grid, Header, Segment, Divider, Select, Table } from "semantic-ui-react"
import Footer from "./Footer"
import Headers from "./Headers"
import { getResults } from "../services/API"
import { useEffect, useState } from "react"

const MatchResults = () => {

    const [results, setresults] = useState([])
    const [choice, setchoice] = useState()
    const [loader, setloader] = useState(false)



    useEffect(() => {
        getResult()
    }, [])

    const getResult = () => {
        getResults().get("/")
        .then((res) => setresults(res.data))
        .catch(console.error)
    }

    const select_league = (value) => {
        setloader(true)
        setTimeout(() => {
            setchoice(value)
            setloader(false)
        }, 5000)
       
    }
    const options = [
        { key: 1, text: 'Ranking (week 1)', value: 1 },
        { key: 2, text: 'League (week 2)', value: 2 },
        { key: 3, text: 'League (week 3)', value: 3 },
        { key: 4, text: 'League (week 4)', value: 4 },
        { key: 5, text: 'Super 4', value: 5 },

      ]
    return(
        <Segment vertical style={{backgroundColor: '#F6F6F6', padding: '0em 6em'}}>
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <Headers />
                        </Grid.Column>
                    </Grid.Row>
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
                                    placeholder="Select Week"
                                    style={{
                                        color: '#000000',
                                        fontFamily: 'Poppins',
                                        fontSize: '16px',
                                        fontWeight: 'normal',
                                    }}
                                    loading={loader}
                                    onChange={(e, {value}) => select_league(value.toString())}
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            <Segment vertical style={{backgroundColor: '#193275', padding: '2em', margin: '2em 0em'}}>
                <Grid>                     
                    <Grid.Row>
                        <Grid.Column textAlign="center"> 
                                <Segment 
                                    style={{
                                        backgroundColor: '#FFFFFF', 
                                        fontFamily: 'Poppins',
                                        fontSize: '16px',
                                        fontWeight: 'normal',
                                        padding: '2em',
                                        maxHeight: 500,
                                        overflowY: "scroll"
                                    
                                    }}>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column
                                                style={{
                                                    backgroundColor: '#FFFFFF', 
                                                    fontFamily: 'Poppins',
                                                    fontSize: '26px',
                                                    fontWeight: 'normal'
                                                
                                                }} textAlign="center">
                                                October 2, 2023
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                                           
                                                                    {
                                                                        results.map((result) => {
                                                                            if(result.result_type === choice){
                                                                            return(
                                                                            <Grid.Column width={5}>
                                                                            <Table basic="very" >
                                                                                <Table.Header>
                                                                                    <Table.Row>
                                                                                        <Table.HeaderCell width={4}>Player</Table.HeaderCell>
                                                                                        <Table.HeaderCell width={4}>Set 1</Table.HeaderCell>
                                                                                        <Table.HeaderCell width={4}>Set 2</Table.HeaderCell>
                                                                                        <Table.HeaderCell width={4}>Set 3</Table.HeaderCell>
                                                                                    </Table.Row>              
                                                                                </Table.Header>
                                                                            <Table.Body>

                                                                                <Table.Row>
                                                                                    <Table.Cell>{result.player1}</Table.Cell>
                                                                                    <Table.Cell>{result.player1_first_set_score}</Table.Cell>
                                                                                    <Table.Cell>{result.player1_second_set_score}</Table.Cell>
                                                                                    <Table.Cell>{result.player1_third_set_score}</Table.Cell>
                                                                                </Table.Row>
                                                                                
                                                                                <Table.Row>
                                                                                    <Table.Cell>{result.player2}</Table.Cell>
                                                                                    <Table.Cell>{result.player2_first_set_score}</Table.Cell>
                                                                                    <Table.Cell>{result.player2_second_set_score}</Table.Cell>
                                                                                    <Table.Cell>{result.player2_third_set_score}</Table.Cell>
                                                                                </Table.Row>
                                                                                </Table.Body>
                                                                        </Table>
                                                                        <br/>
                                                                        </Grid.Column>
                                                                            )
                                                                            }

                                                                        })
                                                                    }

                                        </Grid.Row>
                                        
                                    </Grid>

                                </Segment>
                                
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

            </Segment>
            
                <Grid>
            
                    <Grid.Row style={{padding: '2em 6em'}}>
                        <Grid.Column>
                            <Footer />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

        </Segment>
    )
}
export default MatchResults