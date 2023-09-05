import {Segment, Grid, Container, Header, Divider, Placeholder} from 'semantic-ui-react'

const MobileGallary = () => {

    return(
        <Segment vertical style={{backgroundColor: '#F6F6F6', padding: '6em 0em'}}>
        <Container>
            <Grid>
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
                    <Grid.Column width={8}>
                       
                                    <Placeholder fluid style={{ height: 200}}>
                                        <Placeholder.Image />
                                    </Placeholder>
                              
                    </Grid.Column>
                    <Grid.Column width={8}>
            
                                    <Placeholder fluid style={{ height: 200 }}>
                                        <Placeholder.Image />
                                    </Placeholder>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={8}>
                       
                                    <Placeholder fluid style={{ height: 200}}>
                                        <Placeholder.Image />
                                    </Placeholder>
                              
                    </Grid.Column>
                    <Grid.Column width={8}>
            
                                    <Placeholder fluid style={{ height: 200 }}>
                                        <Placeholder.Image />
                                    </Placeholder>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={8}>
                       
                                    <Placeholder fluid style={{ height: 200}}>
                                        <Placeholder.Image />
                                    </Placeholder>
                              
                    </Grid.Column>
                    <Grid.Column width={8}>
            
                                    <Placeholder fluid style={{ height: 200 }}>
                                        <Placeholder.Image />
                                    </Placeholder>
                    </Grid.Column>
                </Grid.Row>
                <Divider />
            </Grid>
        </Container>

    </Segment>

    )
}
export default MobileGallary