import { useState } from "react"
import { Grid, Segment, Header, Container, Divider, Input } from "semantic-ui-react"

const MobileSearchProfile = () => {

    const [loader, setiloader] = useState(false)
    const [search, setsearch] = useState([])

    const searchprofile = (profile) => {
        setiloader(true)
        setTimeout(() => {
            alert(profile)
        }, 5000)
    }
    return(
        <Segment vertical style={{border: 0, backgroundColor: '#F6F6F6', padding: '6em 0em'}}>
        <Container>
        <Grid>
        <Grid.Row>
            <Grid.Column>
                <Header 
                    content = "PLAYER PROFILES"
                    style={{
                        fontFamily: 'AGRESSIVE',
                        fontWeight: 'bold',
                        fontSize: '25px',
                    }}
                
                />
                <Divider />
                <Input 
                    fluid placeholder="Search for player" 
                    loading={loader}
                    onChange={(e) => {setsearch(e.target.value), searchprofile(e.target.value)}}
                />

            </Grid.Column>
        </Grid.Row>

        <Grid.Row>
            <Grid.Column textAlign="center" style={{padding: '6em 0em'}}>
                <span style={{fontWeight: 'normal', fontFamily: "Poppins", fontSize: '16px'}}>Use the search bar to begin your search</span>
            </Grid.Column>
        </Grid.Row>
        
       

            
    </Grid>
    </Container>
</Segment>

    )
}
export default MobileSearchProfile