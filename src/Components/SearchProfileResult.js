import {Segment, Grid, Container, Header, Divider, Input, Icon} from 'semantic-ui-react'
import Footer from './Footer'
import Headers from './Headers'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import getsignupDetails from '../services/API'

const SearchProfileResult = () => {

    const params = useParams()
    const [details, setdetails] = useState([])
    const [fname, setfname] = useState("")
    const [lname, setlname] = useState("")

    const navigate = useNavigate()

    useEffect(() => {
        getdetails()
        checkdetails()
    })
    const getdetails = () => {
        getsignupDetails().get("/")
        .then((res) => setdetails(res.data))
    }
    const checkdetails = () => {
        details.map((detail) => {
            if(detail.id == params.id){
                setfname(detail.fname)
                setlname(detail.lname)
            }

        })
       
    }

    return(
        <Segment vertical style={{backgroundColor: '#F6F6F6', padding: '0em 6em'}}>
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
                {
                    /*
                         <Grid.Row>
                            <Grid.Column>
                                <Input placeholder="Search for player" />
                            </Grid.Column>
                         </Grid.Row>

                    */
                }
               {

                     <Grid.Row style={{paddingBottom: '1em'}}>
                     <Grid.Column textAlign="center">                     
                     <Segment textAlign='left' vertical style={{padding: '1em', fontFamily: 'Poppins', fontSize: '18px', backgroundColor: '#000000', color: '#FAFAFA'}}>
                                     <Grid>
                                         <Grid.Row>
                                             <Grid.Column width={8}>
                                                 {fname + " " + lname} 
                                             </Grid.Column>
                                             <Grid.Column textAlign='right' width={8}>
                                                 <span style={{cursor: 'pointer'}} onClick={() => navigate("/view/profile/" + params.id)}>
                                                    View full profile <Icon name="right angle" />
                                                 </span>
                                             </Grid.Column>
                                         </Grid.Row>
                                     </Grid>
                                 </Segment>
                                                     
                     </Grid.Column>
                 </Grid.Row>
               }
               
                <Grid.Row style={{paddingTop: '6em'}}>
                    <Grid.Column>
                        <Footer />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>

    </Segment>

    )
}
export default SearchProfileResult