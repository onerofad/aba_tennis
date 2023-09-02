import { Container, Divider, Grid, Header, Icon, Segment, Placeholder } from "semantic-ui-react"
import PaginationComponent from "./PaginationComponent"
import { useParams } from "react-router-dom"
import getNews from "./Db"
import '../style.css'

const LatestNewsPagination = () => {
    const params = useParams()
    return(
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
                            fontSize: '35px'
                        }}
                    />
                </Grid.Column>
                <Grid.Column width={8} textAlign="right">
                    <span
                        style={{
                            fontFamily: "Poppins",
                            color: '#000000',
                            fontWeight: 'normal',
                            fontSize: '20px'
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
                                    <Placeholder fluid style={{ height: 150, width: 250 }}>
                                        <Placeholder.Image />
                                    </Placeholder>
                                    <Header
                                        content = {news.description}
                                        style={{
                                            fontFamily: "Poppins",
                                            color: '#000000',
                                            fontWeight: 'normal',
                                            fontSize: '16px',
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
    )

}
export default LatestNewsPagination