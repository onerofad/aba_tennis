import {Form, Modal, Dropdown, Segment, Grid, Menu, Container, Image, Button, Header, Divider, Placeholder } from "semantic-ui-react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useEffect, useReducer, useState } from "react"
import getsignupDetails from "../../services/API"
import { useParams } from "react-router-dom"

const MobileViewProfile = () => {

    const [details, setdetails] = useState([])
    let id = 0


    const [loader, setLoader] = useState(false)

    useEffect(() => {
        getdetails()
    }, [])

    const getdetails = () => {
        getsignupDetails().get("/")
        .then((res) => setdetails(res.data))
        .catch(console.error)
    }
    const params = useParams()
    const navigate = useNavigate()

    return(
        <Segment vertical style={{border: 0, backgroundColor: '#F6F6F6', padding: '6em 0em'}}>
                <Container>
                <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <Header 
                            content = "PLAYER PROFILE"
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

                    details.map((detail) => {
                        if(detail.id == params.id)
                        return(
                    <Grid>
                            <Grid.Row>
                                <Grid.Column>
                                <Placeholder fluid style={{margin: '0em 1em', height: 350 }}>
                                    <Image style={{ height: 350 }} fluid src={detail.imageurl} />
        
                                </Placeholder>
                                </Grid.Column>
                            </Grid.Row>
                             <Grid.Row>
                             <Grid.Column style={{padding: '0em 2em'}}>
                             Name:
                                             <p style={{
                                                     fontWeight: 'bold',
                                                     fontSize: '25px',
                                                     fontFamily: "dharma-gothic-e",
                                                 }}
                                             >
                                        {detail.fname + " " + detail.lname}
                                             </p>
                             Date of birth:
                                             <p style={{
                                                     fontWeight: 'bold',
                                                     fontSize: '25px',
                                                     fontFamily: "dharma-gothic-e",
                                                 }}
                                             
                                             >
                                        {detail.dob}
                                             </p>
                             Nationality:
                                             <p style={{
                                                     fontWeight: 'bold',
                                                     fontSize: '25px',
                                                     fontFamily: "dharma-gothic-e",
                                                 }}
                                             
                                             >
                                        {detail.nationality}
                                             </p>
                             Contact Email:
                                             <p  style={{
                                                     fontWeight: 'bold',
                                                     fontSize: '25px',
                                                     fontFamily: "dharma-gothic-e",
                                                 }}
                                             >
                                        {detail.email}
                                             </p>
                             Left/Right Hand Bat:
                                             <p style={{
                                                     fontWeight: 'bold',
                                                     fontSize: '25px',
                                                     fontFamily: "dharma-gothic-e",
                                                 }}
                                             >
                                    {detail.handbat}
                                             </p>
                                             Current Team:
                                             <p style={{
                                                     fontWeight: 'bold',
                                                     fontSize: '25px',
                                                     fontFamily: "dharma-gothic-e",
                                                 }}
                                             >
                                        {detail.currenteam}
                                             </p>
                             Last Championship Won:
                                             <p style={{
                                                     fontWeight: 'bold',
                                                     fontSize: '25px',
                                                     fontFamily: "dharma-gothic-e",
                                                 }}
                                             
                                             >
                                       {detail.lastchamp}
         
                                             </p>
                             Date of Last Championship Won:
                                             <p style={{
                                                     fontWeight: 'bold',
                                                     fontSize: '25px',
                                                     fontFamily: "dharma-gothic-e",
                                                 }}
                                             
                                             >
                                    {detail.datelastchamp}
         
                                             </p>
                             Location of Last Championship Won:
                                             <p style={{
                                                     fontWeight: 'bold',
                                                     fontSize: '25px',
                                                     fontFamily: "dharma-gothic-e",
                                                 }}
                                             
                                             >
                                    {detail.locatelastchamp}
         
                                             </p>
                             Favorite Player:
                                             <p style={{
                                                     fontWeight: 'bold',
                                                     fontSize: '25px',
                                                     fontFamily: "dharma-gothic-e",
                                                 }}
                                             
                                             >
                                    {detail.favoriteplayer}
         
                                             </p>
                         Points:
                                             <p style={{
                                                     fontWeight: 'bold',
                                                     fontSize: '25px',
                                                     fontFamily: "dharma-gothic-e",
                                                 }}
                                             
                                             >
                                    {detail.points}
         
                                             </p>
                                             <Divider />

                             </Grid.Column>
                         </Grid.Row>
                         </Grid>
                           

                        )
                    })


                }                     
            </Grid>
            </Container>
        </Segment>
    )
}
export default MobileViewProfile