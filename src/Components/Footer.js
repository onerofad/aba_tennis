import { Segment, List, Grid, Container, Header, Divider, Icon, Image } from "semantic-ui-react"
import { Link } from "react-router-dom"
const Footer = () => {

    return(
    <Segment style={{padding: '2em 0em', backgroundColor: '#F4F6F6'}} vertical>
        <Container>
        <Grid stackable>
            <Grid.Row style={{fontWeight: 'normal'}}>
                <Grid.Column width={4} >
                    <Header
                    as='h4'
                    content='Player profiles'
                    />
                    <p>FAQ</p>
                   
                </Grid.Column>
                <Grid.Column width={4}>
                    <Header
                    as='h4'
                    content='Premier League'
                    
                    />
                    <List link style={{fontSize: '1.2em', fontWeight: 'normal', 
                                                margin: '2em 0em'}}>
                        <List.Item as='a'>Registration</List.Item>
                        <List.Item as='a'>League Rankings</List.Item>
                        <List.Item as='a'>Results</List.Item>
                        <List.Item as='a'>Archives</List.Item>
                    </List>

                </Grid.Column>
                <Grid.Column width={4}>
                    <Header
                    as='h4'
                    content='Competitions'
                    />
                    <List link style={{fontWeight: 'normal', fontSize: '1.2em',
                                                margin: '2em 0em'}}>
                        <List.Item as='a'>Tournaments</List.Item>
                        <List.Item as='a'>League Rankings</List.Item>
                        <List.Item as='a'>Results</List.Item>
                        <List.Item as='a'>Archives</List.Item>                
                    </List>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Header
                    as='h4'
                    content='Contact Us'
                    />
                    <List  link style={{fontSize: '1.2em', 
                        fontWeight: 'normal', margin: '2em 0em'}}>
                        <List.Item as='a'><Link to="/">enquiries@apit.com</Link></List.Item>
                    </List>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              
                <Grid.Column width={12} textAlign="right">
                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                               <Icon size="huge" name="facebook square" />
                                <Icon size="huge" name="linkedin square" />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Header 
                    as='h4' 
                    content='Privacy Term'
                    
                    />

                </Grid.Column>
            </Grid.Row>
            
            
            </Grid>
        </Container>

</Segment>

    )

}
export default Footer

