import { useEffect, useState } from 'react'
import {Segment, Container, Grid, Form, Header, Button, Image, Icon, Loader} from 'semantic-ui-react'
import getsignupDetails from '../services/API'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [email, setemail] = useState("") 
    const [password, setpassword] = useState("") 
    const [details, setdetails] = useState([])

    const [fname, setfname] = useState("") 
    const [lname, setlname] = useState("") 
    const [dob, setdob] = useState("") 


    const [loader, setloader] = useState(false)

    const navigate = useNavigate()

    let count = 0
    let count1 = 0

    const [eemail, esetemail] = useState(false) 
    const [epassword, esetpassword] = useState(false) 

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
        esetemail(false)
        esetpassword(false)
    }

    
    const btnlogin  = () => {
        details.map((user) => {
            if(user.email === email){
                ++count
            }

        })
        details.map((user) => {
            if(user.email === email && user.password === password){
                ++count1
            }

        })
        if(count == 0){
            esetemail({ content: 'Email address not registered', pointing: 'below'})

        }else if(email === "" ){
            esetemail({ content:'Please enter your Email address', pointing: 'below'})           
         
        }else if(password === "" ){
            esetpassword({ content:'Please enter your password', pointing: 'below'})           
  
        }else if(count1 == 0){
            esetpassword({ content:'Invalid password', pointing: 'below'})           
        }else if(count1 > 0){
            setloader(true)
            const info = details.filter(e => e.email === email)[0]
            setfname(info.fname)
            setlname(info.lname)
            setdob(info.dob)
            console.log(info.fname)

            sessionStorage.setItem("em",email)
            sessionStorage.setItem("fn", info.fname + " " + info.lname)
            sessionStorage.setItem("db", info.dob)


            setTimeout(() => {
               navigate("/profile")
            }, 5000)
        }
    }

    return(
    
        <Segment vertical style={{backgroundColor: '#F6F6F6'}}>
            <Container>
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                                <Grid>
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
                                                    content="Login"
                                                    style={{
                                                        fontFamily: 'AGRESSIVE',
                                                        fontSize: '25px',
                                                        color: '#FFFFFF',
                                                        paddingBottom: '2em'
                                                    }}
                                                />
                                                <Form.Field>
                                                    <Form.Input 

                                                        placeholder="Email"
                                                        onChange={(e) => setemail(e.target.value) }
                                                        onFocus = {() => clearError()}
                                                        error={eemail}
                                                    
                                                    />
                                                </Form.Field>
                                                <Form.Field>
                                                    <Form.Input 
                                                        type='password' 
                                                        placeholder="Password" 
                                                        onChange={(e) => setpassword(e.target.value) }
                                                        onFocus = {() => clearError()}
                                                        error={epassword}
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
                                                        onClick={() => btnlogin() }
                                                    >
                                                        Login
                                                    </Button>
                                                </Form.Field>
                                                <Form.Field>
                                                    <span style={{
                                                        color: '#FFFFFF',
                                                        fontSize: '14px',
                                                        fontWeight:'normal',
                                                        fontFamily: 'Poppins'
                                                        }}
                                                    >
                                                        Have an account? Login
                                                    </span>
                                                </Form.Field>
                                                <Form.Field 
                                                style={{
                                                    color: '#FFFFFF',
                                                    fontSize: '10px',
                                                    fontWeight:'normal',
                                                    fontFamily: 'Poppins',
                                                    textAlign: 'right',
                                                    paddingTop: '4em'
                                                    }}
                                                
                                                >
                                                    <span>
                                                        Continue to website <Icon name="right angle" />
                                                    </span>
                                                </Form.Field>


                                            </Form>

                                        </Grid.Column>
                                    </Grid.Row>
                                    
                                </Grid>
                        </Grid.Column>
                    </Grid.Row>

                </Grid>
            </Container>

        </Segment>
        
    )
}
export default Login