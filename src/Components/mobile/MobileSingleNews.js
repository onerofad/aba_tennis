import { Segment, Grid, Header, Button, Divider, Icon, Placeholder, Container } from "semantic-ui-react"
import getNews from "./Db"
import { useNavigate, useParams } from "react-router-dom"
import PaginationComponent from "../PaginationComponent"

const MobileSingleNews = () => {

    const navigate = useNavigate()
    const params = useParams()

    return(
        <Segment style={{border: 0, padding: '2em 0em'}}>
            <Container>
        <Grid>
                {
                    getNews().map((news) => {
                    
                       
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
                                    <Placeholder fluid style={{height: 200}}>
                                        <Placeholder.Image />
                                    </Placeholder>
                                    <p
                                         style={{
                                            fontFamily: "Poppins",
                                            color: '#000000',
                                            fontWeight: 'normal',
                                            fontSize: '16px',
                                            lineHeight: '2em',
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