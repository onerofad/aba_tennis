import {Segment, Container, Grid, Form, Header, Button, Image, Icon, Modal} from 'semantic-ui-react'
import { useEffect, useState, useReducer } from 'react'
import getsignupDetails from '../services/API'
import { Link, useNavigate } from 'react-router-dom'
import EmailValidator from 'email-validator'


//import { Image } from 'cloudinary-react'
import axios from 'axios'

const SignUp = () => {

    const options = [
        { key: 1, text: 'Nigerian', value: 'Nigerian' },
    ]

    const navigate = useNavigate()

    const [profileImage, setProfileImage] = useState("")
    const [imagePreview, setImagePreview] = useState(null)
    let imageurl;

    const [fname, setfname] = useState("")
    const [lname, setlname] = useState("")
    const [dob, setdob] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [nationality, setnationality] = useState("")
    const [handbat, sethandbat] = useState("No Entry")


    const [loader, setloader] = useState(false)
    const [details, setdetails] = useState([])
    let count =  0

    //error variable
    const [efname, esetfname] = useState(false)
    const [elname, esetlname] = useState(false)
    const [edob, esetdob] = useState(false)
    const [eemail, esetemail] = useState(false)
    const [epassword, esetpassword] = useState(false)
    const [enationality, esetnationality] = useState(false)



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

    useEffect(() => {
        getDetails()
    }, []

    )

    const getDetails = () => {
        getsignupDetails().get("/").
        then((res) => {setdetails(res.data)})
        .catch(console.error)
    }

    const clearError = () => {
        esetfname(false)
        esetlname(false)
        esetdob(false)
        esetemail(false)
        esetpassword(false)
        esetnationality(false)
    }

    const handleImageChange = (e) => {
        setProfileImage(e.target.files[0])
        setImagePreview(URL.createObjectURL(e.target.files[0]))
    }

    const uploadImage = async (e) => {
        try{
            let imageURL;
            if(
                profileImage && (
                    profileImage.type === "image/png" ||
                    profileImage.type === "image/jpg" ||
                    profileImage.type === "image/jpeg" 
                )
            ){
                const image = new FormData()
                image.append("file", profileImage)
                image.append("cloud_name", "du3ck2joa")
                image.append("upload_preset", "puw7tbqc")

                const response = await fetch(
                    "https://api.cloudinary.com/v1_1/du3ck2joa/image/upload",
                    {
                        method: "post",
                        body: image
                    }
                )
                const imageData = await response.json()
                imageURL = imageData.url.toString()
                imageurl = imageURL
                setImagePreview(null)
            }else{
                alert("Please upload a valid format - (JPG, PNG, JPEG)")
                window.stop
                
            }
        }catch(error){
            console.log(error)
        }
    }
    
    const signup = () => {
        details.map((user) => {
            if(user.email === email){
                ++count
            }

        })
        if(count > 0){
            esetemail({ content: 'Email address Already registered', pointing: 'below'})

        }else if(fname === "" ){
            esetfname({ content:'Please enter your First Name', pointing: 'below'})           
         
          }else if(lname === "" ){
              esetlname({ content:'Please enter your Last Name', pointing: 'below'})           
  
          }else if(dob === ""){
              esetdob({ content:'Please enter your Birth Date', pointing: 'below'})           
  
          }else if(email === ""){
              esetemail({ content:'Please enter your Email', pointing: 'below'})           
  
          }else if(!EmailValidator.validate(email)){
            esetemail({ content: 'Please enter a valid Email address', pointing: 'below'})
          }else if(password === ""){
            esetpassword({ content:'Please enter your Password', pointing: 'below'})           

         }else if(nationality === ""){
            esetnationality({ content:'Please enter your Country', pointing: 'below'})           

          }
          else{  
            uploadImage()
            setloader(true)
            setTimeout(() => { 
                let item = {fname, lname, dob, email, password, nationality, handbat, imageurl}
                getsignupDetails().post("/", item)
                .catch(console.error)
                setloader(false)
                dispatch({type: 'open', size: 'mini'})          
            }, 5000)
            
        }
    }
    return(
    
        <Segment vertical style={{backgroundColor: '#F6F6F6'}}>
            <Container>
                <Grid stackable>
                    <Grid.Row>
                        <Grid.Column>
                                <Grid stackable>
                                    <Grid.Row style={{padding: '4em 0em'}}>
                                        <Grid.Column id="bgColumn" style={{padding: '4em 4em'}} width={8}>
                                            <Grid>
                                                <Grid.Row>
                                                    <Grid.Column>
                                                        <Image size='tiny' src="/images/about/about.png" />
                                                    </Grid.Column>
                                                </Grid.Row>
                                                <Grid.Row>
                                                    <Grid.Column>
                                                        <Header
                                                            content="UNLEASH YOUR PING PONG PASSION"
                                                            style={{
                                                                fontFamily: 'AGRESSIVE',
                                                                fontSize: '25px',
                                                                color: '#000000'
                                                            }}

                                                        />
                                                    </Grid.Column>
                                                </Grid.Row>
                                                <Grid.Row>
                                                    <Grid.Column>
                                                        <Image size='medium' src="/images/patandball.svg" />
                                                    </Grid.Column>
                                                </Grid.Row>
                                            </Grid>
                                           
                                        </Grid.Column>
                                        <Grid.Column style={{backgroundColor: '#000000', padding: '4em 4em'}} textAlign='center' width={8}>
                                            <Form style={{fontFamily: 'Poppins', fontWeight: 'normal', fontSize: '20px', }}>
                                                <Header
                                                    content="SIGN UP"
                                                    style={{
                                                        fontFamily: 'AGRESSIVE',
                                                        fontSize: '25px',
                                                        color: '#FFFFFF',
                                                        paddingBottom: '2em'
                                                    }}
                                                />
                                                <Form.Field>
                                                    <Form.Input 
                                                        placeholder="First Name"
                                                        onChange={(e) => setfname(e.target.value)}
                                                        error={efname}
                                                        onFocus={() => clearError()}
                                                        
                                                    />
                                                </Form.Field>
                                                <Form.Field>
                                                    <Form.Input 
                                                        placeholder="Last Name" 
                                                        onChange={(e) => setlname(e.target.value)}
                                                        error={elname}
                                                        onFocus={() => clearError()}

                                                    />
                                                </Form.Field>
                                                <Form.Field>
                                                    <Form.Input
                                                        type='date' 
                                                        placeholder="Date of Birth" 
                                                        onChange={(e) => setdob(e.target.value)}
                                                        error={edob}
                                                        onFocus={() => clearError()}

                                                    />
                                                </Form.Field>
                                                <Form.Field>
                                                    <Form.Input 
                                                        placeholder="Email" 
                                                        onChange={(e) => setemail(e.target.value)}
                                                        error={eemail}
                                                        onFocus={() => clearError()}

                                                    />
                                                </Form.Field>
                                                <Form.Field>
                                                    <Form.Input 
                                                        placeholder="Password" 
                                                        type='password'
                                                        onChange={(e) => setpassword(e.target.value)}
                                                        error={epassword}
                                                        onFocus={() => clearError()}

                                                    />
                                                </Form.Field>
                                                <Form.Field>
                                                    <Form.Select 
                                                        placeholder="Select Country" 
                                                        options={options}
                                                        onChange={(e, {value}) => setnationality(value.toString())}
                                                        error={enationality}
                                                        onFocus={() => clearError()}

                                                    />
                                                </Form.Field>
                                                <Form.Field>
                                                    <Form.Input   
                                                        type="file" 
                                                        name="image"
                                                        accept="image/png, image/jpg, image/jpeg"
                                                        onChange={handleImageChange}
                                                    />
                                                </Form.Field>
                                                <Form.Field>
                                                    <Button style={{
                                                            color: '#FFFFFF',
                                                            fontFamily: 'Poppins',
                                                            fontWeight: 'normal',
                                                            backgroundColor: '#193275',
                                                            fontSize: '16px'
                                                        }}
                                                        loading={loader}
                                                        onClick={signup}
                                                    >
                                                        Register
                                                    </Button>
                                                </Form.Field>
                                                <Form.Field>
                                                    <span 
                                                    >
                                                        <Link to="/login"
                                                        style={{
                                                            color: '#FFFFFF',
                                                            fontSize: '16px',
                                                            fontWeight:'normal',
                                                            fontFamily: 'Poppins'
                                                            }}
                                                        >
                                                            Have an account? Login
                                                        </Link>
                                                    </span>
                                                </Form.Field>
                                                <Form.Field 
                                                style={{
                                                    color: '#FFFFFF',
                                                    fontSize: '14px',
                                                    fontWeight:'normal',
                                                    fontFamily: 'Poppins',
                                                    textAlign: 'right',
                                                    paddingTop: '4em'
                                                    }}
                                                
                                                >
                                                    <Link to="/" style={{color: '#FFFFFF'}}>
                                                        Continue to website <Icon name="right angle" />
                                                    </Link>
                                                </Form.Field>


                                            </Form>
                                            {
                                                imagePreview && (
                                                    <img src={imagePreview && imagePreview} />

                                                )
                                            }

                                        </Grid.Column>
                                    </Grid.Row>
                                    
                                </Grid>
                        </Grid.Column>
                    </Grid.Row>
                <Modal
                 size={size}
                 open={open}
                 onClose={() => dispatch({type: 'close'})}         
                >
                    <Modal.Header>Details</Modal.Header>
                    <Modal.Content>
                        Sign Up Successfull?
                    </Modal.Content>
                    <Modal.Actions>
                        <Button
                          positive
                          onClick={() => {dispatch({type: 'close'}); navigate("/login");}}
                          style={{
                            textAlign: 'center',
                            backgroundColor: '#193275',
                            color: '#FFFFFF'

                          }}
                        >
                            Continue to Login
                        </Button>
                    </Modal.Actions>

                </Modal>

                </Grid>
            </Container>

        </Segment>
        
    )
}
export default SignUp