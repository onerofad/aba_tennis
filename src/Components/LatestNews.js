import { Image, Container, Divider, Grid, Header, Icon, Segment, Placeholder } from "semantic-ui-react"
import PaginationComponent from "./PaginationComponent"
import { useParams } from "react-router-dom"
import { getLatestNews } from "../services/API"
import '../style.css'
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

const LatestNews = () => {

    const [latestnews, setlatestnews] = useState([])
    let id = 0
    useEffect(() => {
        getNews()
    }, [])

    const getNews = () => {
        getLatestNews().get("/")
        .then((res) => setlatestnews(res.data))
        .catch(console.error)
    }
    const navigate = useNavigate()
    const openallnews = () => {
        navigate("/news/1")
    }

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
                            fontSize: '16px',
                            cursor: 'pointer'
                        }}
                        onClick={() => openallnews()}
                    >
                        View All <Icon name="right angle" />
                    </span>
                </Grid.Column>
            </Grid.Row>
            <Divider style={{marginTop: '0em'}} />
            <Grid.Row>
                {
                   
                    latestnews.map((news) => {
                        ++id
                        if(id <= 4){      
                            return(
                                <Grid.Column width={4} key={news.id}>
                                    <Placeholder fluid style={{ height: 150, width: 250 }}>
                                        <Image fluid centered src={"https://res.cloudinary.com/du3ck2joa/" + news.image} />
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
                                
                            )
                        }
                        
                       
                    })
                   
                }
                
            </Grid.Row>
            
          {
            /*
                <Grid.Row>
                <Grid.Column style={{marginTop: '2em'}} textAlign="center">
                    <PaginationComponent />
                </Grid.Column>
            </Grid.Row>
            */
          }  
        </Grid>

    </Segment>                      
    )

}
export default LatestNews