import 'semantic-ui-css/semantic.min.css'
import Headers from "./Headers"
import HeadingPage from './HeadingPage'
import LatestNews from './LatestNews'
import { Container, Grid, Segment } from 'semantic-ui-react'
import About from './About'
import AccessRanking from './AccessRanking'
import GetFreePass from './GetFreePass'
import PlayerTable from './PlayerTable'

const Home = () => {
    return(
        <div>
           <Headers />
           <HeadingPage />     
           <LatestNews />
           <About />
           <AccessRanking />
           <GetFreePass />
           <PlayerTable />
        </div>
    )
}
export default Home