import {Image, Segment, Grid, Header, Button, Divider, Icon, Placeholder } from "semantic-ui-react"
import { getLatestNews } from "../../services/API"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

const MobileLatestNews = () => {

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
    return(
        <Segment style={{border: 0}}>
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
                <Grid.Column width={8} verticalAlign="middle" textAlign="right">
                    <span
                        style={{
                            fontFamily: "Poppins",
                            color: '#000000',
                            fontWeight: 'normal',
                            fontSize: '15px',
                            cursor: 'pointer'
                        }}
                        onClick={() => openallnews()}
                    >
                        View All <Icon name="right angle" />
                    </span>
                </Grid.Column>
            </Grid.Row>
            
                {
                    latestnews.map((news) => {
                        ++id
                        if(id <= 2){      
                            return(
                                <Grid.Row>
                                <Grid.Column key={news.id}>
                                    <Placeholder fluid style={{height: 220}}>
                                        <Image fluid style={{height: 220}} src={"https://res.cloudinary.com/du3ck2joa/" + news.image} />
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
                
           
        </Grid>

    </Segment>      
    )
}
export default MobileLatestNews