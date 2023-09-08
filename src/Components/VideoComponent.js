import { Container, Grid, Segment, Image, Header } from "semantic-ui-react"

const VideoComponent = () => {
    return(
        <Segment vertical style={{backgroundColor: '#F6F6F6', padding: '2em 0em'}}>
                <Grid>
                   
                    <Grid.Row>
                        <Grid.Column>
                            <Segment style={{padding: '1em 2em'}}>
                            <iframe style={{minWidth: 1100, minHeight: 560}} src="https://www.youtube.com/embed/qmEmfu2Xf5U?si=EklV4oDujZGLVlH4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                            </Segment>

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
        </Segment>
    )
}
export default VideoComponent