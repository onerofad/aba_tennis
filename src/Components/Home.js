import 'semantic-ui-css/semantic.min.css'
import Headers from "./Headers"
import HeadingPage from './HeadingPage'
import LatestNews from './LatestNews'
import { Container, Grid, Segment } from 'semantic-ui-react'
import About from './About'
import AccessRanking from './AccessRanking'
import GetFreePass from './GetFreePass'
import PlayerTable from './PlayerTable'
import Footer from './Footer'

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
            </Grid>
            </Container>

        </Segment>
          
         
    )
}
export default Home