import { Container, Divider, Grid, Header, Segment, Image, Icon, Placeholder } from "semantic-ui-react"
import { useState, useEffect } from "react"
import { getTournamentUploadedVideos, getHighlightUploadedVideos, getTeamUploadedVideos } from "../../services/API"

const MobileVideo = () => {

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
        <Segment vertical style={{backgroundColor: '#F6F6F6', padding: '6em 0em'}}>
            <Container>
                <Grid>
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
                                                content = "Tournament Videos"
                                                style={{
                                                    fontFamily: "dharma-gothic-e",
                                                    color: '#000000',
                                                    fontWeight: 'bold',
                                                    fontSize: '25px',
                                                  
                                                }}
                                            />
                                        </Grid.Column>
                                        <Grid.Column width={8} textAlign="right">
                                            <span
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontSize: '14px',
                                                    fontWeight: 'normal',
                                                    textAlign: "right"

                                                }}
                                            >
                                            View All
                                            <Icon name="right angle" />
                                            </span>

                                        </Grid.Column>
                                    </Grid.Row>
                                    <Divider style={{marginTop: '0em'}} />
                                    <Grid.Row>
                                        <Grid.Column>
                                            <Grid>
                                            {
                                                uploadtournamentvideo.map((video) => {
                                                    return(
                                                        <Grid.Row>
                                                        <Grid.Column>
                                                        <Placeholder fluid style={{ height: 150 }}>
                                                        <iframe  style={{height: 150, width: "100%"}}  src={video.videourl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    
                                                        </Placeholder>
                                                            <p style={{
                                                                    fontFamily: "Poppins",
                                                                    color: '#000000',
                                                                    fontSize: '16px',
                                                                    fontWeight: 'normal',
                                                                    padding: '1em 0em'
                                                                }}
                                                            
                                                            >
                                                                {video.description}
                                                            </p>
                                                        </Grid.Column >
                                                     </Grid.Row>
                                                    )
                                                } )
                          
                                            }
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
                                                content = "Tournament Highlights"
                                                style={{
                                                    fontFamily: "dharma-gothic-e",
                                                    color: '#000000',
                                                    fontWeight: 'bold',
                                                    fontSize: '25px',
                                                 
                                                }}
                                            />
                                        </Grid.Column>
                                        <Grid.Column width={8} textAlign="right">
                                            <span
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontSize: '14px',
                                                    fontWeight: 'normal',
                                                    textAlign: "right"

                                                }}
                                            >
                                            View All
                                            <Icon name="right angle" />
                                            </span>

                                        </Grid.Column>
                                    </Grid.Row>
                                    <Divider style={{marginTop: '0em'}} />
                                    <Grid.Row>
                                        <Grid.Column>
                                            <Grid>
                                            {
                                                uploadhighlightvideo.map((video) => {
                                                    return(
                                                        <Grid.Row>
                                                        <Grid.Column>
                                                        <Placeholder fluid style={{ height: 150 }}>
                                                        <iframe  style={{height: 150, width: "100%"}}  src={video.videourl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    
                                                        </Placeholder>
                                                            <p style={{
                                                                    fontFamily: "Poppins",
                                                                    color: '#000000',
                                                                    fontSize: '16px',
                                                                    fontWeight: 'normal',
                                                                    padding: '1em 0em'
                                                                }}
                                                            
                                                            >
                                                                {video.description}
                                                            </p>
                                                        </Grid.Column >
                                                     </Grid.Row>
                                                    )
                                                } )
                          
                                            }
                
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
                                                content = "Team Conferences"
                                                style={{
                                                    fontFamily: "dharma-gothic-e",
                                                    color: '#000000',
                                                    fontWeight: 'bold',
                                                    fontSize: '25px',
                                                  
                                                }}
                                            />
                                        </Grid.Column>
                                        <Grid.Column width={8} textAlign="right">
                                            <span
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontSize: '14px',
                                                    fontWeight: 'normal',
                                                    textAlign: "right"

                                                }}
                                            >
                                            View All
                                            <Icon name="right angle" />
                                            </span>

                                        </Grid.Column>
                                    </Grid.Row>
                                    <Divider style={{marginTop: '0em'}} />
                                    <Grid.Row>
                                        <Grid.Column>
                                            <Grid>
                                            {
                                                uploadteamvideo.map((video) => {
                                                    return(
                                                        <Grid.Row>
                                                        <Grid.Column>
                                                        <Placeholder fluid style={{ height: 150 }}>
                                                        <iframe style={{height: 150, width: "100%"}}  src={video.videourl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    
                                                        </Placeholder>
                                                            <p style={{
                                                                    fontFamily: "Poppins",
                                                                    color: '#000000',
                                                                    fontSize: '16px',
                                                                    fontWeight: 'normal',
                                                                    padding: '1em 0em'
                                                                }}
                                                            
                                                            >
                                                                {video.description}
                                                            </p>
                                                        </Grid.Column >
                                                     </Grid.Row>
                                                    )
                                                } )
                          
                                            }
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
                                    fontSize: '25px'
                                }}

                            />

                        </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                        <Grid.Column>
                        <Segment style={{padding: '1em 1em'}}>
                        <iframe style={{maxWidth: 420, maxHeight: 315}} src="https://www.youtube.com/embed/qmEmfu2Xf5U?si=EklV4oDujZGLVlH4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                            </Segment>
                        </Grid.Column>

                    </Grid.Row>
                </Grid>
            </Container>

        </Segment>
    )
}
export default MobileVideo