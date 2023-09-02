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
import LatestNewsPagination from './LatestNewsPagination'


const HomePagination = () => {
    return(
        <Segment vertical style={{backgroundColor: '#F6F6F6'}}>
           
            <Grid>
            <Container>
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
                        <LatestNewsPagination />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row style={{padding: '2em 0em'}}>
                    <Grid.Column>
                        <About />
                    </Grid.Column>
                </Grid.Row>
                </Container>
                <Grid.Row style={{padding: '2em 0em'}}>
                    <Grid.Column>
                        <AccessRanking />
                    </Grid.Column>
                </Grid.Row>
                <Container>
                    <Grid.Row style={{padding: '2em 0em'}}>
                        <Grid.Column>
                            <PlayerTable />
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
                </Container> 
                </Grid>

        </Segment>
          
         
    )
}
export default HomePagination