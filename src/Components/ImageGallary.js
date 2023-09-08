import {Segment, Grid, Container, Header, Divider, Placeholder} from 'semantic-ui-react'
import Footer from './Footer'
import Headers from './Headers'

const ImageGallary = () => {

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
                    <Header 
                        content = "IMAGE GALLERY"
                        style={{
                            fontFamily: 'AGRESSIVE',
                            fontWeight: 'bold',
                            fontSize: '25px',
                        }}
                    
                    />
                    <Divider />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column>
                                    <Placeholder fluid style={{ height: 240, width: 200 }}>
                                        <Placeholder.Image />
                                    </Placeholder>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    <Placeholder fluid style={{height: 240, width: 200}}>
                                        <Placeholder.Image />
                                    </Placeholder>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Grid>
                    <Grid.Row>
                                <Grid.Column>
                                    <Placeholder fluid style={{ height: 150, width: 200 }}>
                                        <Placeholder.Image />
                                    </Placeholder>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    <Placeholder fluid style={{height: 150, width: 200}}>
                                        <Placeholder.Image />
                                    </Placeholder>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    <Placeholder fluid style={{height: 150, width: 200}}>
                                        <Placeholder.Image />
                                    </Placeholder>
                                </Grid.Column>
                            </Grid.Row>
                            </Grid>
                    </Grid.Column>
                    <Grid.Column width={4}>
                    <Grid>
                    <Grid.Row>
                                <Grid.Column>
                                    <Placeholder fluid style={{ height: 150, width: 200 }}>
                                        <Placeholder.Image />
                                    </Placeholder>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    <Placeholder fluid style={{height: 150, width: 200}}>
                                        <Placeholder.Image />
                                    </Placeholder>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    <Placeholder fluid style={{height: 150, width: 200}}>
                                        <Placeholder.Image />
                                    </Placeholder>
                                </Grid.Column>
                            </Grid.Row>
                            </Grid>

                    </Grid.Column>
                    <Grid.Column width={4}>
                    <Grid>
                            <Grid.Row>
                                <Grid.Column>
                                    <Placeholder fluid style={{ height: 240, width: 200 }}>
                                        <Placeholder.Image />
                                    </Placeholder>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    <Placeholder fluid style={{height: 240, width: 200}}>
                                        <Placeholder.Image />
                                    </Placeholder>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>

                    </Grid.Column>

                </Grid.Row>
                
                
                <Grid.Row style={{padding: '6em 6em 2em'}}>
                    <Grid.Column>
                        <Footer />
                    </Grid.Column>
                </Grid.Row>
            </Grid>

    </Segment>

    )
}
export default ImageGallary