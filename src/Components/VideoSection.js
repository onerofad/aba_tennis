import { Container, Divider, Grid, Header, Segment, Image, Icon, Placeholder } from "semantic-ui-react"
import Headers from "./Headers"
import Footer from "./Footer"
import { useState, useEffect } from "react"
import { getTournamentUploadedVideos, getHighlightUploadedVideos, getTeamUploadedVideos } from "../services/API"

const VideoSection = () => {

    const [uploadtournamentvideo, settournamentuploadvideos] = useState([])
    const [uploadhighlightvideo, sethighlightuploadvideos] = useState([])
    const [uploadteamvideo, setteamuploadvideos] = useState([])

    
    useEffect(() => {
        getuploadTournament()
        getuploadHighlight()
        getuploadTeam()

    }, [])

    const getuploadTournament = () => {
        getTournamentUploadedVideos().get("/")
        .then((res) => settournamentuploadvideos(res.data))
        .catch(console.error)
    }
    const getuploadHighlight = () => {
        getHighlightUploadedVideos().get("/")
        .then((res) => sethighlightuploadvideos(res.data))
        .catch(console.error)
    }
    const getuploadTeam = () => {
        getTeamUploadedVideos().get("/")
        .then((res) => setteamuploadvideos(res.data))
        .catch(console.error)
    }
    return(
        <Segment vertical style={{backgroundColor: '#F6F6F6', padding: '0em 6em'}}>
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <Headers />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <p style={{
                                fontFamily: 'AGRESSIVE',
                                fontWeight: 'bold',
                                fontSize: '25px'

                            }}
                            >
                                VIDEO SECTION
                            </p>
                            <Divider />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Segment>
                                <Grid>
                                    <Grid.Row>
                                        <Grid.Column width={8}>
                                            <Header
                                                content = "Current Tournament Videos"
                                                style={{
                                                    fontFamily: "dharma-gothic-e",
                                                    color: '#000000',
                                                    fontWeight: 'bold',
                                                    fontSize: '25px',
                                                  
                                                }}
                                            />
                                        </Grid.Column>
                                        <Grid.Column width={8} textAlign="right">
                                            {/*<span
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontSize: '14px',
                                                    fontWeight: 'normal',
                                                    textAlign: "right"

                                                }}
                                            >
                                            View All
                                            <Icon name="right angle" />
                                            </span>*/}

                                        </Grid.Column>
                                    </Grid.Row>
                                    <Divider style={{marginTop: '0em'}} />
                                    <Grid.Row>
                                        <Grid.Column>
                                            <Grid>
                                                <Grid.Row>
                                                    {
                                                        uploadtournamentvideo.map((video) => {
                                                            return(
                                                                <Grid.Column width={3}>
                                                                    <Placeholder fluid style={{ height: 150, width: 200 }}>
                                                                    <iframe width="200" height="150" src={video.videourl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                                                    </Placeholder>
                                                                    <p style={{
                                                                            fontFamily: "dharma-gothic-e",
                                                                            color: '#000000',
                                                                            fontSize: '20px',
                                                                            fontWeight: 'normal',
                                                                            characterSpacing: 20,
                                                                            lineSpacing: 100
                                                                        }}
                                                                    
                                                                    >
                                                                        {video.videodescription}
                                                                    </p>
                                                                </Grid.Column >
                                                            )

                                                        } )
                                                    }
                                                   
                                                    
                                                </Grid.Row>
                                            </Grid>
                                        </Grid.Column>
                                    </Grid.Row>


                                </Grid>

                            </Segment>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column>
                            <Segment>
                                <Grid>
                                    <Grid.Row>
                                        <Grid.Column width={8}>
                                            <Header
                                                content = "Highlights of the tournament "
                                                style={{
                                                    fontFamily: "dharma-gothic-e",
                                                    color: '#000000',
                                                    fontWeight: 'bold',
                                                    fontSize: '25px',
                                                 
                                                }}
                                            />
                                        </Grid.Column>
                                        <Grid.Column width={8} textAlign="right">
                                            {/*<span
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontSize: '14px',
                                                    fontWeight: 'normal',
                                                    textAlign: "right"

                                                }}
                                            >
                                            View All
                                            <Icon name="right angle" />
                                            </span>*/}

                                        </Grid.Column>
                                    </Grid.Row>
                                    <Divider style={{marginTop: '0em'}} />
                                    <Grid.Row>
                                        <Grid.Column>
                                            <Grid>
                                                <Grid.Row>
                                                {
                                                        uploadhighlightvideo.map((video) => {
                                                            return(
                                                                <Grid.Column width={3}>
                                                                    <Placeholder fluid style={{ height: 150, width: 200 }}>
                                                                    <iframe width="200" height="150" src={video.videourl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                                                    </Placeholder>
                                                                    <p style={{
                                                                            fontFamily: "dharma-gothic-e",
                                                                            color: '#000000',
                                                                            fontSize: '20px',
                                                                            fontWeight: 'normal',
                                                                            characterSpacing: 20,
                                                                            lineSpacing: 100
                                                                        }}
                                                                    
                                                                    >
                                                                        {video.videodescription}
                                                                    </p>
                                                                </Grid.Column >
                                                            )

                                                        } )
                                                    }
                                                        
                                                </Grid.Row>
                                            </Grid>
                                        </Grid.Column>
                                    </Grid.Row>


                                </Grid>

                            </Segment>
                        </Grid.Column>
                    </Grid.Row>


                    <Grid.Row>
                        <Grid.Column>
                            <Segment>
                                <Grid>
                                    <Grid.Row>
                                        <Grid.Column width={8}>
                                            <Header
                                                content = "Team Conference"
                                                style={{
                                                    fontFamily: "dharma-gothic-e",
                                                    color: '#000000',
                                                    fontWeight: 'bold',
                                                    fontSize: '25px',
                                                  
                                                }}
                                            />
                                        </Grid.Column>
                                        <Grid.Column width={8} textAlign="right">
                      {/*<span
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontSize: '14px',
                                                    fontWeight: 'normal',
                                                    textAlign: "right"

                                                }}
                                            >
                                            View All
                                            <Icon name="right angle" />
                                            </span>*/}

                                        </Grid.Column>
                                    </Grid.Row>
                                    <Divider style={{marginTop: '0em'}} />
                                    <Grid.Row>
                                        <Grid.Column>
                                            <Grid>
                                                <Grid.Row>
                                                {
                                                        uploadteamvideo.map((video) => {
                                                            return(
                                                                <Grid.Column width={3}>
                                                                    <Placeholder fluid style={{ height: 150, width: 200 }}>
                                                                    <iframe width="200" height="150" src={video.videourl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                                                    </Placeholder>
                                                                    <p style={{
                                                                            fontFamily: "dharma-gothic-e",
                                                                            color: '#000000',
                                                                            fontSize: '20px',
                                                                            fontWeight: 'normal',
                                                                            characterSpacing: 20,
                                                                            lineSpacing: 100
                                                                        }}
                                                                    
                                                                    >
                                                                        {video.videodescription}
                                                                    </p>
                                                                </Grid.Column >
                                                            )

                                                        } )
                                                    }
                                                    
                                                </Grid.Row>
                                            </Grid>
                                        </Grid.Column>
                                    </Grid.Row>


                                </Grid>

                            </Segment>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row style={{padding: '3em 0em'}}>
                        <Grid.Column width={8} verticalAlign="middle">
                            <Header

                                content="ABPLT CONFERENCE 2023"
                                style={{
                                    fontFamily: 'AGRESSIVE',
                                    fontWeight: 'bold',
                                    fontSize: '42px'
                                }}

                            />

                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Segment style={{padding: '10em 0em'}}>
                                <Image centered src="/images/youtube.svg" />

                            </Segment>
                        </Grid.Column>

                    </Grid.Row>


                    <Grid.Row style={{padding: '2em 6em'}}>
                        <Grid.Column >
                            <Footer />
                        </Grid.Column>

                    </Grid.Row>
                </Grid>
        </Segment>
    )
}
export default VideoSection