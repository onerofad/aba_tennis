import { useNavigate } from "react-router-dom"
import { Segment, Grid, Header, Button, Image } from "semantic-ui-react"
import './style.css'
import { PaystackButton } from "react-paystack"
import { useState, useEffect } from "react"
import '../../main.css'
import getsignupDetails from "../../services/API"

const MobileRegisterHeading = () => {
    const navigate = useNavigate()
    useEffect(() => {
        getDetails()
    }, [])

    //const publicKey = "pk_test_deda09cd68357ea7089f53fdd413eb1b4e8ca4ce"
    const publicKey = "pk_live_793ec47cb747298bc075cb0ca7e9d7ef3a33da25"

    const amount = 10000
    const [details, setdetails] = useState([])
    const email = sessionStorage.getItem("em")
    const name = sessionStorage.getItem("fn")
    const [phone, setPhone] = useState("")

    const getDetails = () => {
        getsignupDetails().get("/")
        .then(res => setdetails(res.data))
        .catch(console.error)
    }

    const updatePayment = () => {
        const detail = details.find(detail => detail.email === email)
        if(detail){
            let id = detail.id
            let paid = "yes"
            let item = {paid}
            getsignupDetails().patch(`/${id}/`, item)
            .catch(console.error)
        }
    }
  
  
    const componentProps = {
      email,
      amount,
      metadata: {
        name,
      },
      publicKey,
      text: "Pay Now",
      onSuccess: () =>
        {   
            updatePayment()
        },
      onClose: () => alert("Wait! Don't leave :("),
    }

    return(
        <Segment vertical style={{border: 0, margin: 0, backgroundColor: '#F6F6F6', padding: '6em 0em'}}>
        <Grid>
            <Grid.Row>
                <Grid.Column textAlign="center">
                    <Header
                        content="ABA PREMIER LEAGUE
                                 REGISTRATION"
                        style={{
                                fontWeight: 'bold', 
                                fontFamily: 'AGRESSIVE',
                                fontSize: '25px',
                                color: '#000000',
                              }}
                    />
                   
                </Grid.Column>

            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <Segment  style={{border: 0, margin: 0, padding: '2em 2em'}}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <Header
                                                 style={{
                                                        fontFamily: "dharma-gothic-e",
                                                        color: '#000000',
                                                        fontWeight: 'bold',
                                                        fontSize: '45px',
                                                       
                                                      
                                                    }}
                                                >
                                                    ARE YOU THE<br/>
                                                    ULTIMATE CHAMPION ?
                                                </Header>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={12}>
                                                <p
                                                       style={{
                                                        fontFamily: "Poppins",
                                                        color: '#000000',
                                                        fontWeight: 'normal',
                                                        fontSize: '14px',
                                                        lineHeight: '2em',
                                                      
                                                    }}
                                                
                                                >
                                                    Register now for the ranking week, compete with other
                                                    skilled table tennis players to become the ultimate 
                                                    abapit champion. Register with just 1000 only to get started.
                                                    Click the button below to proceed with payment.
                                                </p>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                            <PaystackButton 
                                                    className="paystack-button"
                                                    style={{
                                                        fontFamily: "Poppins",
                                                        color: '#FFFFFF',
                                                        fontWeight: 'normal',
                                                        fontSize: '16px',
                                                        backgroundColor: '#193275'
                                                      
                                                    }}
                                                    {...componentProps} 
                                                />
                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                                <Image  verticalAlign="top" size="large" src="/images/patandball.svg" />
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Grid.Column>
                              
                            </Grid.Row>
                        </Grid>
                    </Segment>
                </Grid.Column>
            </Grid.Row> 

        </Grid>
    </Segment>

    )
}
export default MobileRegisterHeading