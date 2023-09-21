import {Image, Segment, Grid, Header, Button, Divider, Icon, Placeholder, Container } from "semantic-ui-react"
import { getLatestNews } from "../services/API"
import { useNavigate, useParams } from "react-router-dom"
import Headers from "./Headers"
import Footer from "./Footer"
import { useState, useEffect } from "react"

const SingleNews = () => {

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
        <Segment vertical style={{backgroundColor: '#F6F6F6', border: 0, padding: '0em 6em'}}>
        <Headers />
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
                                            marginBottom: '1em',
                                            paddingTop: '2em'
                                        }}

                                    />
                                </Grid.Column>
                              
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column key={news.id} textAlign="center">
                                    <Image centered src={"https://res.cloudinary.com/du3ck2joa/" + news.image} style={{width: 400, height: 400}}  />
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
                <Grid.Row>
                    <Grid.Column style={{paddingTop: '4em'}} >
                    <Footer />

                    </Grid.Column>
                </Grid.Row>
        </Grid>
    </Segment>      
    )
}
export default SingleNews