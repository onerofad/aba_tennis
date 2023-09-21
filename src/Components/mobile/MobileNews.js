import {Image, Segment, Grid, Header, Button, Divider, Icon, Placeholder, Container } from "semantic-ui-react"
import { useNavigate, useParams } from "react-router-dom"
import PaginationComponent from "../PaginationComponent"
import { getLatestNews } from "../../services/API"
import { useState, useEffect } from "react"

const MobileNews = () => {

    const [latestnews, setlatestnews] = useState([])

    useEffect(() => {
        getNews()
    }, [])

    const getNews = () => {
        getLatestNews().get("/")
        .then((res) => setlatestnews(res.data))
        .catch(console.error)
    }


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
                    latestnews.map((news) => {
                    
                        let lastItemId = params.pageno * 4
                        let firstItemId = lastItemId - 3
                        if(news.id >= firstItemId && news.id <= lastItemId){
                                                   return(
                                <Grid.Row>
                                <Grid.Column key={news.id}>
                                    <Placeholder fluid style={{height: 180}}>
                                    <Image fluid style = {{height: 180}} src={"https://res.cloudinary.com/du3ck2joa/" + news.image} />
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