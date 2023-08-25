import { Button, Container, Grid, Header, List, Segment } from "semantic-ui-react"

const GetFreePass = () => {
    return(
       <Segment>
        <Container>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={6} verticalAlign="middle">
                        <List relaxed size="huge">
                            <List.Item>
                                <List.Header>- valid for ranking match only</List.Header>  
                            </List.Item>
                            <List.Item>
                                <List.Header>- 50 limited tickets</List.Header>
                            </List.Item>
                            <List.Item>
                                <List.Header>
                                    - Expires 2nd october after which<br/>
                                    Game tickets cost 500Naira only
                                 </List.Header>
                            </List.Item>

                        </List>
                        <Button size="large" primary>
                            Get free pass
                        </Button>

                    </Grid.Column>
                    <Grid.Column verticalAlign="middle" width={5}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column>
                                <p style={{display: 'inline', fontSize: '3em', fontFamily: 'verdana'}}>
                                    ABA<br/>
                                    PLT<br/>
                                </p>
                                <span style={{fontSize: '1em', wordSpacing: '1.3em'}}>RANKING FREE TICKET PASS</span>

                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <p style={{fontSize: '1.5em', fontWeight: 'bold'}}>
                                       OCTOBER<br/>
                                       2ND 2023
                                    </p>
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <p style={{fontSize: '1em', fontWeight: 'normal' , wordSpacing: '1em'}}>
                                       ENTRY 2PM<br/>
                                       1 ADULT
                                    </p>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        
                    
                    </Grid.Column>
                    <Grid.Column verticalAlign="middle" width={5}>
                        <Grid divided>
                            <Grid.Row>
                                <Grid.Column width={5}>
                                    <p style={{textAlign: 'center', fontWeight: 'bold', fontSize: '1.5em'}}>
                                        SEC<br/>
                                        #
                                    </p>
                                </Grid.Column>
                                <Grid.Column width={5}>
                                    <p style={{textAlign: 'center',fontWeight: 'bold', fontSize: '1.5em'}}>
                                        ROW<br/>
                                        #
                                    </p>
                                </Grid.Column>
                                <Grid.Column width={5}>
                                    <p style={{textAlign: 'center', fontWeight: 'bold', fontSize: '1.5em'}}>
                                        SEAT<br/>
                                        #
                                    </p>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    <p style={{fontSize: '1em'}}>
                                        Benedon Event Centre, Umungasi, AbaBenedon Event<b/>
                                        Centre, Umungasi, Aba

                                    </p>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>

                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
       </Segment>
    )
}
export default GetFreePass