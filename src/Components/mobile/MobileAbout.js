import { Link, useNavigate } from "react-router-dom"
import { Table, Input, Select, Sidebar, Menu, Container, Button, Segment, Icon, Image , Grid, Header, Divider, Placeholder, List} from "semantic-ui-react"
import pdf from '../../PDF'

const MobileAbout = () => {

    const navigate = useNavigate()

    const openregister = () => {
        if(sessionStorage.getItem("em") === null){
            navigate("/signup")
        }else{
            navigate("/register")
        }
    }
    return(
        <Segment style={{margin: 0, padding: '4em 0em', backgroundColor: '#F6F6F6'}}>
        <Container>
        <Grid stackable>
            <Grid.Row>
                <Grid.Column>
                    <Image centered size="small" src="/images/about/about.png" />
                </Grid.Column>
                <Grid.Column verticalAlign="middle">
                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                            <p
                                style={{
                                    fontFamily: "Poppins",
                                    color: '#000000',
                                    fontWeight: 'normal',
                                    fontSize: '16px',
                                    lineHeight: '2em',
                                }}
                           
                           >
                            The 2023 Aba Premier League Table Tennis is a knock-out based open tournament. Its goal is to develop a professional table tennis league in Aba by promoting table tennis skills, professionalism among table tennis players and officials and developing standard playing infrastructure. Players will be able to earn ranking points, get ranked based on their points earned and win performance-based prize money

                            </p>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={8}>
                            <Button
                                fluid
                                size="large"
                                style={{
                                    fontFamily: "Poppins",
                                    color: '#ffffff',
                                    fontWeight: 'normal',
                                    fontSize: '16px',
                                    backgroundColor: '#193275',
                                }}
                                onClick={() => openregister()}
                            >
                                Register
                            </Button>
                            </Grid.Column>
                            <Grid.Column width={8}>
                         
                            <Button 
                                fluid
                                size="large"
                                style={{
                                    fontFamily: "Poppins",
                                    color: '#193275',
                                    fontWeight: 'normal',
                                    fontSize: '16px',
                                    backgroundColor: '#ffffff',
                                    border: '1px solid #193275'
                                }}
                            
                            >
                                Prospectus
                            </Button>
                            <a href = {Pdf} target = "_blank">Download Pdf</a>
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

export default MobileAbout