import {Form, Modal, Dropdown, Segment, Grid, Menu, Container, Image, Button, Header, Divider, Placeholder } from "semantic-ui-react"
import { Link } from "react-router-dom"
import Footer from "./Footer"
import { useNavigate } from "react-router-dom"
import { useEffect, useReducer, useState } from "react"
import getsignupDetails from "../services/API"

const Profile = () => {

    const [details, setdetails] = useState([])
    const [dob, setdob] = useState(sessionStorage.getItem("db"))
    const [handbat, sethandbat] = useState(sessionStorage.getItem("handbat"))
    const [loader, setLoader] = useState(false)

    const [imageurl, setImage] = useState()




    useEffect(() => {
        getdetails()
    }, [])

    const getdetails = () => {
        getsignupDetails().get("/")
        .then((res) => setdetails(res.data))
        .catch(console.error)
    }
    const options = [
        { key: 1, text: 'Left', value: "Left" },
        { key: 2, text: 'Right', value: "Right" },
    ]

    const editProfile = (email) => {
        setLoader(true)
        setTimeout(() => {
            let detail  = details.filter(e => e.email === email)[0]
            let id = detail.id
            let item = {dob, handbat}
            getsignupDetails().patch(`/${id}/`, item)
            .catch(console.error)
            setLoader(false)

        }, 5000)
        
       // alert(detail.id)
    }

    const navigate = useNavigate()

    const openregister = () => {
        if(sessionStorage.getItem("em") === null){
            navigate("/signup")
        }else{
            navigate("/register")

        }
    }

    function reducer(state, action){
        switch(action.type){
            case 'close':
                return {open: false}
            case 'open':
                return {open: true, size: action.size}
            default:
                throw new Error('unsupported action...')
        }

    }

    const [state, dispatch] = useReducer(reducer, {open: false, size: undefined,})
    const {open, size} = state

    const openEdit = () => {
        dispatch({type: 'open', size: 'small'})
    }
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

                    <Menu.Item position="center" onClick={() => navigate("/")}>
                        <Image size="tiny" src="/images/about/about.png" />
                    </Menu.Item>
                    <Menu.Item position="right" onClick={() => navigate("/")} as="a">
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
                                   <Menu.Item position="right">
                                        <Button style={{
                                        backgroundColor: '#193275', 
                                        fontSize: '20px',
                                        fontWeight: 'normal',
                                        fontFamily: 'Poppins',
                                        color: '#FFFFFF',
                                }}
                                onClick = {() => openEdit()}
                                >
                                            Edit Profile
                                        </Button>
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
                                        {sessionStorage.getItem("fn")}
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
                                        {sessionStorage.getItem("country")}
                                    </p>
                    Contact Email:
                                    <p  style={{
                                            fontWeight: 'bold',
                                            fontSize: '25px',
                                            fontFamily: "dharma-gothic-e",
                                        }}
                                    >
                                        {sessionStorage.getItem("em")}
                                    </p>
                    Left/Right Hand Bat:
                                    <p style={{
                                            fontWeight: 'bold',
                                            fontSize: '25px',
                                            fontFamily: "dharma-gothic-e",
                                        }}
                                    >
                                        {handbat}
                                    </p>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Placeholder fluid style={{ height: 350, width: 400 }}>
                           {
                             details.map((detail) => {
                                if(detail.email  === sessionStorage.getItem("em")){
                                    return(
                                        <Image style={{ height: 350, width: 400 }} fluid src={detail.imageurl} />
                                    )
                                }
                             })
                           }
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
                                        {sessionStorage.getItem("currenteam")}
                                    </p>
                    Last Championship Won:
                                    <p style={{
                                            fontWeight: 'bold',
                                            fontSize: '25px',
                                            fontFamily: "dharma-gothic-e",
                                        }}
                                    
                                    >
                                       {sessionStorage.getItem("lastchamp")}

                                    </p>
                    Date of Last Championship Won:
                                    <p style={{
                                            fontWeight: 'bold',
                                            fontSize: '25px',
                                            fontFamily: "dharma-gothic-e",
                                        }}
                                    
                                    >
                                    {sessionStorage.getItem("datelastchamp")}

                                    </p>
                    Location of Last Championship Won:
                                    <p style={{
                                            fontWeight: 'bold',
                                            fontSize: '25px',
                                            fontFamily: "dharma-gothic-e",
                                        }}
                                    
                                    >
                                    {sessionStorage.getItem("locatelastchamp")}

                                    </p>
                    Favorite Player:
                                    <p style={{
                                            fontWeight: 'bold',
                                            fontSize: '25px',
                                            fontFamily: "dharma-gothic-e",
                                        }}
                                    
                                    >
                                    {sessionStorage.getItem("favoriteplayer")}

                                    </p>
                        Points:
                                    <p style={{
                                            fontWeight: 'bold',
                                            fontSize: '25px',
                                            fontFamily: "dharma-gothic-e",
                                        }}
                                    
                                    >
                                    {sessionStorage.getItem("points")}

                                    </p>
                    </Grid.Column>
                 
                   
                </Grid.Row> 
                <Modal
                 size={size}
                 open={open}
                 onClose={() => dispatch({type: 'close'})}         
                >
                    <Modal.Header>Edit Profile</Modal.Header>
                    <Modal.Content>
                        <Form>
                            <Form.Group widths={2}>
                                <Form.Field>
                                    <label>Hand Bat</label>
                                    <Form.Select 
                                        placeholder="Select" 
                                        options={options} 
                                        onChange={(e, {value}) => {sethandbat(value.toString())}}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <label>Birth Date</label>
                                    <Form.Input
                                        placeholder="Select" 
                                        type ="date"
                                        onChange={(e) => setdob(e.target.value)}
                                    />
                                </Form.Field>
                            </Form.Group>
                           
                        </Form>
                        
                    </Modal.Content>
                    <Modal.Actions>
                    <Button
                          negative
                          onClick={() => {dispatch({type: 'close'});}}
                          style={{
                            textAlign: 'center',
                            backgroundColor: '#193275',
                            color: '#FFFFFF'

                          }}
                        >
                            Cancel
                        </Button>
                        <Button
                        loading={loader}
                          positive
                          onClick={() => {dispatch({type: 'close'}); editProfile(sessionStorage.getItem("em"))}}
                          style={{
                            textAlign: 'center',
                            backgroundColor: '#193275',
                            color: '#FFFFFF'

                          }}
                        >
                            Edit
                        </Button>
                    </Modal.Actions>

                </Modal>               
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
export default Profile