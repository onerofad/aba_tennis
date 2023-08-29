import { Grid, Segment, Image } from "semantic-ui-react"

const Video = () => {

    return(
        <Grid>
            <Grid.Row>
                <Grid.Column>
                    <Segment>
                        <Image centered size="large" src="/images/youtube.svg" />
                    </Segment>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )

}
export default Video