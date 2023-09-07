import {Image, Segment, Grid, Header, Button, Divider, Icon, Placeholder, Container } from "semantic-ui-react"
import getNews from "./Db"
import { useNavigate, useParams } from "react-router-dom"
import PaginationComponent from "../PaginationComponent"

const MobileNews = () => {

    const navigate = useNavigate()
    const params = useParams()

    return(
        <Segment style={{border: 0,}}>
            <Container>
        <Grid>
            <Grid.Row>
                <Grid.Column width={8}>
                    <Header
                        content="LATEST NEWS"
                        style={{
                            fontFamily: "dharma-gothic-e",
                            color: '#000000',
                            fontWeight: 'bold',
                            fontSize: '35px'
                        }}
                    />
                </Grid.Column>
              
            </Grid.Row>
            
                {
                    getNews().map((news) => {
                    
                        let lastItemId = params.pageno * 4
                        let firstItemId = lastItemId - 3
                        if(news.id >= firstItemId && news.id <= lastItemId){
                                                   return(
                                <Grid.Row>
                                <Grid.Column key={news.id}>
                                    <Placeholder fluid style={{height: 200}}>
                                    <Image bordered src={news.image} />
                                    </Placeholder>
                                    <Header
                                        content = {news.title}
                                        style={{
                                            fontFamily: "Poppins",
                                            color: '#000000',
                                            fontWeight: 'normal',
                                            fontSize: '16px',
                                            cursor: 'pointer'
                                        }}

                                        onClick = {() => navigate("/newspage/" + news.id)}
                                    />
                                </Grid.Column>
                                </Grid.Row>
                            )
                            
                        }
                       
                    })
                   
                }
            
            <Grid.Row>
                <Grid.Column textAlign="center">
                    <PaginationComponent />
                </Grid.Column>
            </Grid.Row>
                
           
        </Grid>
        </Container>

    </Segment>      
    )
}
export default MobileNews