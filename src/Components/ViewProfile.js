import {Form, Modal, Dropdown, Segment, Grid, Menu, Container, Image, Button, Header, Divider, Placeholder } from "semantic-ui-react"
import { Link, useParams } from "react-router-dom"
import Footer from "./Footer"
import { useNavigate } from "react-router-dom"
import { useEffect, useReducer, useState } from "react"
import getsignupDetails from "../services/API"

const ViewProfile = () => {

    const [details, setdetails] = useState([])
    const [dob, setdob] = useState("")
    const [handbat, sethandbat] = useState("")
    const [fname, setfname] = useState("")
    const [lname, setlname] = useState("")
    const [nationality, setnationality] = useState("")
    const [email, setemail] = useState("")


    const [loader, setLoader] = useState(false)



    useEffect(() => {
        getdetails()
        showProfile()
    }, [])

    const getdetails = () => {
        getsignupDetails().get("/")
        .then((res) => setdetails(res.data))
        .catch(console.error)
    }
    const params = useParams()

    const openregister = () => {
        if(sessionStorage.getItem("em") === null){
            navigate("/signup")
        }else{
            navigate("/register")

        }
       
    }

    const showProfile = () => {
            details.map((detail) => {
                if(detail.id == params.id){
                    setdob(detail.dob)
                    sethandbat(detail.handbat)
                    setfname(detail.fname)
                    setlname(detail.lname)
                    setemail(detail.email)
                    setnationality(detail.nationality)


                }
            })
          
    }



    const navigate = useNavigate()

    return(
        <Segment vertical style={{backgroundColor: '#FFFFFF'}}>
             <Grid>
                <Grid.Row>
                    <Grid.Column>
                    <Menu
                                size="medium"
                                secondary
                                style={{
                                            fontFamily: 'Poppins', 
                                            fontSize: '20px',
                                            fontWeight: 'normal',
                                            color:'#000000',

                                            
                                        }}
                                
                        >
                            <Container>

                                    <Menu.Item position="" as="a">
                                        <Image size="tiny" src="/images/about/about.png" />
                                    </Menu.Item>
                                    <Menu.Item>

                                    </Menu.Item>
                                    <Menu.Item>
                                        
                                    </Menu.Item>
                                    <Menu.Item>
                                        
                                    </Menu.Item>
                                    <Menu.Item position="" onClick={() => navigate("/")} as="a">
                        Home
                    </Menu.Item>
                    <Menu.Item as="a">
                        <Dropdown  text="Premier League" floating>
                            <Dropdown.Menu pointing="bottom">
                                <Dropdown.Item 
                                    text="Registration" 
                                    onClick={() => openregister() }          
                                />
                                <Dropdown.Item 
                                    text="Results" 
                                />
                                <Dropdown.Item 
                                    text="PL Stories" 
                                />
                            </Dropdown.Menu>
    
                        </Dropdown>                                    
                    </Menu.Item>
                    <Menu.Item as="a">
                        
                        <Dropdown  text="Competitions" floating>
                            <Dropdown.Menu pointing="bottom">
                                <Dropdown.Item 
                                    text="Covernor's cup"             
                                />
                                <Dropdown.Item 
                                    text="Chairman's cup" 
                                />
                            </Dropdown.Menu>
    
                        </Dropdown> 
                    </Menu.Item>
                            </Container>
                        </Menu>            
                    </Grid.Column>
                </Grid.Row>
                </Grid>
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
                <Grid.Row>
                    <Grid.Column width={5} style= {{fontFamily: 'Poppins', fontSize: '16px', fontWeight: 'noemal'}}>
                    Name:
                                    <p style={{
                                            fontWeight: 'bold',
                                            fontSize: '25px',
                                            fontFamily: "dharma-gothic-e",
                                        }}
                                    >
                                        {fname + " " + lname}
                                    </p>
                                    Date of birth:
                                    <p style={{
                                            fontWeight: 'bold',
                                            fontSize: '25px',
                                            fontFamily: "dharma-gothic-e",
                                        }}
                                    
                                    >
                                        {dob}
                                    </p>
                                    Nationality:
                                    <p style={{
                                            fontWeight: 'bold',
                                            fontSize: '25px',
                                            fontFamily: "dharma-gothic-e",
                                        }}
                                    
                                    >
                                        {nationality}
                                    </p>
                                    Contact Email:
                                    <p  style={{
                                            fontWeight: 'bold',
                                            fontSize: '25px',
                                            fontFamily: "dharma-gothic-e",
                                        }}
                                    >
                                        {email}
                                    </p>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Placeholder fluid style={{ height: 350, width: 400 }}>
                            <Placeholder.Image />
                        </Placeholder>                   
                    </Grid.Column>
                    <Grid.Column width={5} textAlign="right" style= {{fontFamily: 'Poppins', fontSize: '16px', fontWeight: 'noemal'}}>
                    Left/Right Hand Bat:
                                    <p style={{
                                            fontWeight: 'bold',
                                            fontSize: '25px',
                                            fontFamily: "dharma-gothic-e",
                                        }}
                                    >
                                        {handbat}
                                    </p>
                                    Current Ranking:
                                    <p style={{
                                            fontWeight: 'bold',
                                            fontSize: '25px',
                                            fontFamily: "dharma-gothic-e",
                                        }}
                                    
                                    >
                                        3
                                    </p>
                                    Points:
                                    <p style={{
                                            fontWeight: 'bold',
                                            fontSize: '25px',
                                            fontFamily: "dharma-gothic-e",
                                        }}
                                    
                                    >
                                        47
                                    </p>
                    </Grid.Column>
                 
                   
                </Grid.Row> 
                    
            </Grid>
            </Container>
            <Grid>
                <Grid.Row style={{padding: '6em 6em'}}> 
                    <Grid.Column >
                     <Footer />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}
export default ViewProfile