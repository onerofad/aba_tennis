import {Image, Segment, Grid, Header, Button, Divider, Icon, Placeholder, Container } from "semantic-ui-react"
import { useNavigate, useParams } from "react-router-dom"
import PaginationComponent from "../PaginationComponent"
import { getLatestNews } from "../../services/API"
import { useState, useEffect } from "react"

const MobileSingleNews = () => {

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
        <Segment style={{border: 0, padding: '2em 0em'}}>
            <Container>
        <Grid>
                {
                    latestnews.map((news) => {
                    
                       
                        if(news.id == params.pageno){
                            return(
                              <div>
                                <Grid.Row>
                                <Grid.Column>
                                    <Header
                                        content={news.title}
                                        style={{
                                            fontFamily: "dharma-gothic-e",
                                            color: '#000000',
                                            fontWeight: 'normal',
                                            fontSize: '25px',
                                            marginBottom: '1em'
                                        }}
                                    />
                                </Grid.Column>
                              
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column key={news.id}>
                                    <Placeholder fluid style={{height: 180}}>
                                    <Image src={"https://res.cloudinary.com/du3ck2joa/" + news.image}  />
                                    </Placeholder>
                                    <p
                                         style={{
                                            fontFamily: "Poppins",
                                            color: '#000000',
                                            fontWeight: 'normal',
                                            fontSize: '16px',
                                            lineHeight: '2em',
                                            paddingTop: '1em'
                                        }}
                                    
                                    >
                                     {news.description}

                                    </p>
                                </Grid.Column>
                                </Grid.Row>
                                </div>
                            )
                            
                        }
                       
                    })
                   
                }
           
        </Grid>
        </Container>

    </Segment>      
    )
}
export default MobileSingleNews