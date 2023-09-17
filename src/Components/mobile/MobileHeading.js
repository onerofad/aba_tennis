import { useNavigate } from "react-router-dom"
import { Segment, Grid, Header, Button } from "semantic-ui-react"
import MobileDemoCarousel from "./MobileDemoCarousel"
import MobileCarouselComponent from "./MobileDemoCarousel"

const MobileHeading = () => {
    const navigate = useNavigate()
    const openregister = () => {
        if(sessionStorage.getItem("em") === null ){
            navigate("/signup")
        }else{
            navigate("/register")

        }

    }
    return(
        <Segment vertical style={{backgroundColor: '#F6F6F6', paddingTop: '6em', paddingBottom: '3em'}}>
        <Grid>
            <Grid.Row>
                <Grid.Column textAlign="center">
                    <Header
                        content="ABA PREMIER LEAGUE
                                 TABLE TENNIS"
                        style={{
                                fontWeight: 'bold', 
                                fontFamily: 'AGRESSIVE',
                                fontSize: '25px',
                                color: '#000000',
                              }}
                    />
                    <MobileCarouselComponent /> 
                </Grid.Column>

            </Grid.Row>

        </Grid>
    </Segment>
    )
}
export default MobileHeading