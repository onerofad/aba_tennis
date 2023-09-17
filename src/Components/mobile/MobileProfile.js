import {Form, Modal, Dropdown, Segment, Grid, Menu, Container, Image, Button, Header, Divider, Placeholder } from "semantic-ui-react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useEffect, useReducer, useState } from "react"
import getsignupDetails from "../../services/API"

const MobileProfile = () => {

    const [details, setdetails] = useState([])
    const [dob, setdob] = useState(sessionStorage.getItem("db"))
    const [handbat, sethandbat] = useState(sessionStorage.getItem("handbat"))
    const [loader, setLoader] = useState(false)



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
                <Grid.Row>
                    <Grid.Column>
                    <Placeholder fluid style={{margin: '0em 1em', height: 350 }}>
                    {
                             details.map((detail) => {
                                if(detail.email  === sessionStorage.getItem("em")){
                                    return(
                                        <Image style={{ height: 350 }} fluid src={detail.imageurl} />
                                    )
                                }
                             })
                           }
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
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                    <Segment textAlign="center" vertical style={{border: 0, margin: 0, backgroundColor: '#F6F6F6'}}>
                    <Container>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                            <Button style={{
                                        backgroundColor: '#000000', 
                                        fontSize: '20px',
                                        fontWeight: 'normal',
                                        fontFamily: 'Poppins',
                                        color: '#FFFFFF',
                                }}
                                onClick = {() => openEdit()}

                                >
                                            Edit Profile
                                        </Button>
                            </Grid.Column>
                        </Grid.Row>
                        <Divider />
                    </Grid>
                    </Container>


                </Segment>
             
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
        </Segment>
    )
}
export default MobileProfile