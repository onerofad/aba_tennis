import { Segment, Grid, Header, Button, Divider, Icon, Placeholder } from "semantic-ui-react"
import getNews from "./Db"

const MobileLatestNews = () => {
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
                            fontSize: '15px'
                        }}
                    
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