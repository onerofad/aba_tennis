import { Container, Segment, Grid, Image, Header, Button } from "semantic-ui-react"
import "../style.css"
import { useNavigate } from "react-router-dom"
import pdfFile from '../apt.pdf'

const About = () => {

const navigate = useNavigate()

const openregister = () => {
    if(sessionStorage.getItem("em") === null){
        navigate("/signup")
    }else{
        navigate("/register")
    }
}

return(
    <Segment style={{padding: '4em 6em'}}>
    <Grid>
        <Grid.Row>
            <Grid.Column width={6}>
                <Image src="/images/about/about.png" />
            </Grid.Column>
            <Grid.Column width={10} style={{paddingLeft: '4em'}}  verticalAlign="middle">
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                        <p
                            style={{
                                fontFamily: "Poppins",
                                color: '#000000',
                                fontWeight: 'normal',
                                fontSize: '20px',
                                lineHeight: '2em',
                            }}
                        
                        >
                        The 2023 Aba Premier League Table Tennis is a knock-out based open tournament. Its goal is to develop a professional table tennis league in Aba by promoting table tennis skills, professionalism among table tennis players and officials and developing standard playing infrastructure. Players will be able to earn ranking points, get ranked based on their points earned and win performance-based prize money

                        </p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={6}>
                        <Button 
                            style={{
                                fontFamily: "Poppins",
                                color: '#ffffff',
                                fontWeight: 'normal',
                                fontSize: '18px',
                                backgroundColor: '#193275',
                            }}
                            onClick={() => openregister()}

                        >
                            Register Now
                        </Button>
                        </Grid.Column>
                        <Grid.Column width={10}>
                        <Button 
                            size="huge"
                            style={{
                                fontFamily: "Poppins",
                                color: '#193275',
                                fontWeight: 'normal',
                                fontSize: '18px',
                                backgroundColor: '#ffffff',
                                border: '1px solid #193275'
                            }}
                        
                        >
                             <a href = {pdfFile} target = "_blank">
                             Download Prospectus                            
                            </a>
                        </Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Grid.Column>
        </Grid.Row>
    </Grid>
</Segment>
                        
                
    
)
}
export default About