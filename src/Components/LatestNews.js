import { Container, Divider, Grid, Header, Icon, Segment, Image, Pagination } from "semantic-ui-react"
import PaginationComponent from "./PaginationComponent"
import { useParams } from "react-router-dom"
import getNews from "./Db"

const LatestNews = () => {
    const params = useParams()

    return(
        <Segment vertical style={{backgroundColor: '#F4F6F6', border: 0}}>
            <Container>
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <Segment>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={8}>
                                        <Header
                                            content="Latest News"
                                            as="h2"
                                        />
                                    </Grid.Column>
                                    <Grid.Column width={8} textAlign="right">
                                        <span>
                                            View All <Icon name="right angle" />
                                        </span>
                                    </Grid.Column>
                                </Grid.Row>
                                <Divider style={{marginTop: '0em'}} />
                                <Grid.Row>
                                    <Grid.Column>
                                        <Image bordered centered rounded src="/images/fayose.jpg" />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    {
                                        getNews().map((news) => {
                                            let lastItemId = params.pageno * 4
                                            let firstItemId = lastItemId - 3
                                            if(news.id >= firstItemId && news.id <= lastItemId){      
                                                return(
                                                    <Grid.Column width={4} key={news.id}>
                                                        <Header
                                                            content = {news.description}
                                                        />
                                                    </Grid.Column>
                                                )
                                            }
                                           
                                        })
                                       
                                    }
                                    
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column textAlign="center">
                                        <PaginationComponent />
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>

                        </Segment>
                       
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </Container>
        </Segment>
    )

}
export default LatestNews