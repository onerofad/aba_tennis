import {Image, Segment, Grid, Header, Button, Divider, Icon, Placeholder } from "semantic-ui-react"
import getNews from "./Db"
import { useNavigate } from "react-router-dom"

const MobileLatestNews = () => {

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
                    getNews().map((news) => {
                    
                        if(news.id >= 1 && news.id <= 2){      
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
                                        }}
                                    
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