import 'semantic-ui-css/semantic.min.css'
import Headers from "./Headers"
import HeadingPage from './HeadingPage'
import LatestNews from './LatestNews'
import About from './About'
import AccessRanking from './AccessRanking'
import { Container, Grid, Segment } from 'semantic-ui-react'
import '../style.css'


const Home = () => {
    return(
        <Segment vertical style={{backgroundColor: '#F6F6F6'}}>
            <Container>
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <Headers />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <HeadingPage />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <LatestNews />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <About />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <AccessRanking />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </Container>

        </Segment>
          
         
    )
}
export default Home