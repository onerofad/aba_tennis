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

    const openregister = () => {
        if(sessionStorage.getItem("em") === null){
            navigate("/signup")
        }else{
            navigate("/register")
        }
       
    }

    const showProfile = () => {
         id = params.id
         let detail = details.filter(d => d.id == id)[0]
               // alert(params.id)
               // alert(detail.fname)
               setdob(detail.dob)
                sethandbat(detail.handbat)
                setfname(detail.fname)
                setlname(detail.lname)
                setemail(detail.email)
                setnationality(detail.nationality) 
                
                     
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

                                    <Menu.Item position="" onClick={() => navigate("/")}>
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
                                                    onClick={() => navigate("/results")}
                                                />
                                                <Dropdown.Item 
                                                    text="PL Stories" 
                                                    disabled
                                                />
                                            </Dropdown.Menu>
                    
                                        </Dropdown>                                    
                                    </Menu.Item>
                                    <Menu.Item as="a">
                                        
                                        <Dropdown  text="Competitions" floating>
                                            <Dropdown.Menu pointing="bottom">
                                                <Dropdown.Item 
                                                    text="Governor's cup"   
                                                    disabled          
                                                />
                                                <Dropdown.Item 
                                                    text="Chairman's cup" 
                                                    disabled
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
               
                   {

                        details.map((detail) => {
                            if(detail.id == params.id)
                            return(
                                <Grid.Row>
                                <Grid.Column width={5} style= {{fontFamily: 'Poppins', fontSize: '16px', fontWeight: 'noemal'}}>
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
                    </Grid.Column>
                    <Grid.Column width={6}>
                    <Placeholder fluid style={{ height: 350, width: 400 }}>
                    <Image style={{ height: 350, width: 400 }} fluid src={detail.imageurl} />

                    </Placeholder>                   
                </Grid.Column>
                <Grid.Column width={5} textAlign="right" style= {{fontFamily: 'Poppins', fontSize: '16px', fontWeight: 'noemal'}}>
                
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
                                </Grid.Column>
                                   </Grid.Row> 

                            )
                        })
                 
                    
                    }                 
                    
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