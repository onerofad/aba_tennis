import { Container, Divider, Grid, Header, Icon, Segment, Image, Pagination } from "semantic-ui-react"
import PaginationComponent from "./PaginationComponent"
import { useParams } from "react-router-dom"
import getNews from "./Db"
import '../style.css'

const LatestNews = () => {
    const params = useParams()

    return(
    
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <Segment>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={8}>
                                        <Header
                                            content="Latest News"
                                            style={{
                                                fontFamily: "dharma-gothic-e",
                                                color: '#193275',
                                                fontWeight: 'bold',
                                                fontSize: '35px',
                                                characterSpacing: 20,
                                                lineSpacing: 100
                                            }}
                                        />
                                    </Grid.Column>
                                    <Grid.Column width={8} textAlign="right">
                                        <span
                                            style={{
                                                fontFamily: "Poppins",
                                                color: '#000000',
                                                fontWeight: 'Regular',
                                                fontSize: '20px',
                                                characterSpacing: 0,
                                                lineSpacing: 30
                                            }}
                                        
                                        >
                                            View All <Icon name="right angle" />
                                        </span>
                                    </Grid.Column>
                                </Grid.Row>
                                <Divider style={{marginTop: '0em'}} />
                                <Grid.Row>
                                    {
                                        getNews().map((news) => {
                                            let lastItemId = params.pageno * 4
                                            let firstItemId = lastItemId - 3
                                            if(news.id >= firstItemId && news.id <= lastItemId){      
                                                return(
                                                    <Grid.Column width={4} key={news.id}>
                                                        <Image bordered centered rounded src={news.image} />

                                                        <Header
                                                            content = {news.description}
                                                            style={{
                                                                fontFamily: "Poppins",
                                                                color: '#000000',
                                                                fontWeight: 'medium',
                                                                fontSize: '16px',
                                                                characterSpacing: 0,
                                                                lineSpacing: 35
                                                            }}
                                                        
                                                        />
                                                    </Grid.Column>
                                                )
                                            }
                                           
                                        })
                                       
                                    }
                                    
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column style={{marginTop: '2em'}} textAlign="center">
                                        <PaginationComponent />
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>

                        </Segment>
                       
                    </Grid.Column>
                </Grid.Row>
            </Grid>
          
    )

}
export default LatestNews