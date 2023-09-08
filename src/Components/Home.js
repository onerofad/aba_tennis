import 'semantic-ui-css/semantic.min.css'
import Headers from "./Headers"
import HeadingPage from './HeadingPage'
import LatestNews from './LatestNews'
import About from './About'
import AccessRanking from './AccessRanking'
import PlayerTable from './PlayerTable'
import { Container, Grid, Segment } from 'semantic-ui-react'
import Footer from './Footer'
import '../style.css'
import Video from './Video'
import Contact from './Contact'
import VideoComponent from './VideoComponent'


const Home = () => {
    return(
        <Segment vertical style={{backgroundColor: '#F6F6F6', padding: '0em 6em'}}>
           
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <Headers />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row style={{padding: '2em 0em'}}>
                    <Grid.Column>
                        <HeadingPage />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row style={{padding: '2em 0em'}}>
                    <Grid.Column>
                        <LatestNews />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row style={{padding: '2em 0em'}}>
                    <Grid.Column>
                        <About />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row style={{padding: '2em 0em'}}>
                    <Grid.Column>
                        <AccessRanking />
                    </Grid.Column>
                </Grid.Row>
                    <Grid.Row style={{padding: '2em 0em'}}>
                        <Grid.Column>
                            <PlayerTable />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{padding: '2em 0em'}}>
                        <Grid.Column>
                            <VideoComponent />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{padding: '2em 0em'}}>
                        <Grid.Column>
                            <Contact />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{padding: '2em 6em'}}>
                        <Grid.Column>
                            <Footer />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

        </Segment>
          
         
    )
}
export default Home