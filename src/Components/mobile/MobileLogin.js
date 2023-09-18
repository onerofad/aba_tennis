import {Segment, Container, Grid, Form, Header, Button, Image, Icon, Modal, Divider} from 'semantic-ui-react'
import { useEffect, useState, useReducer } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import getsignupDetails from '../../services/API'

const MobileLogin = () => {

    const [email, setemail] = useState("") 
    const [password, setpassword] = useState("") 
    const [details, setdetails] = useState([])

    const [fname, setfname] = useState("") 
    const [lname, setlname] = useState("") 
    const [dob, setdob] = useState("") 
    const [nationality, setnationality] = useState("") 
    const [handbat, sethandbat] = useState("") 
    const [points, setpoints] = useState() 





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
            setnationality(info.nationality)
            sethandbat(info.handbat)
            setpoints(info.points)


            console.log(info.fname)

            sessionStorage.setItem("em",email)
            sessionStorage.setItem("fn", info.fname + " " + info.lname)
            sessionStorage.setItem("db", info.dob)
            sessionStorage.setItem("f", info.fname)
            sessionStorage.setItem("country", info.nationality)
            sessionStorage.setItem("handbat", info.handbat)

            sessionStorage.setItem("currenteam", info.currenteam)
            sessionStorage.setItem("lastchamp", info.lastchamp)
            sessionStorage.setItem("datelastchamp", info.datelastchamp)
            sessionStorage.setItem("locatelastchamp", info.locatelastchamp)
            sessionStorage.setItem("favoriteplayer", info.favoriteplayer)
            sessionStorage.setItem("points", info.points)


            setTimeout(() => {
               navigate("/")
            }, 5000)
        }
    }


    return(
    
        <Segment textAlign='center' vertical style={{backgroundColor: '#F6F6F6', paddingTop: '6em'}}>
            <Container>
                <Grid>
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
                    <Divider />
                    <Grid.Row>
                        <Grid.Column>
                        <Header
                            content="LOGIN"
                            style={{
                                fontFamily: 'AGRESSIVE',
                                fontSize: '20px',
                                color: '#000000',
                            }}
                            />                                                   
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                    <Grid.Column style={{backgroundColor: '#000000', padding: '2em', marginBottom: 0}} textAlign='center'>
                                            <Form style={{minHeight: 300, fontFamily: 'Poppins', fontWeight: 'normal', fontSize: '20px', }}>
                                               
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
                                                        placeholder="Password" 
                                                        type='password'
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
                                                        <Link to="/signup" style={{color: '#FFFFFF'}}>Don't have an account? register here</Link>
                                                    </span>
                                                </Form.Field>

                                            </Form>

                                        </Grid.Column>                                          
                                      
                    </Grid.Row>
                </Grid>
            </Container>

        </Segment>
        
    )
}
export default MobileLogin