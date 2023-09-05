import { Table, Input, Select, Sidebar, Menu, Container, Button, Segment, Icon, Image , Grid, Header, Divider, Placeholder, List} from "semantic-ui-react"
import { Link } from "react-router-dom"

const MobileFooter = () => {
    return(
        <Segment  style={{margin: 0, border: 0,padding: '3em 0em', backgroundColor: '#F6F6F6'}}>
        <Container>
        <Grid textAlign="center" stackable>
          
            <Grid.Row style={{fontWeight: 'normal', paddingBottom: '4em'}}>
                <Grid.Column width={4} >
                   <Image centered size="tiny" src="/images/about/about.png" />
                    <List link relaxed
                        style={{
                            fontSize: '14px', 
                            fontWeight: 'normal', 
                            fontFamily: 'Poppins',
                        }}
                    >
                        <List.Item style={{color: '#000000'}}>Player profiles</List.Item>
                        <List.Item style={{color: '#000000'}}>FAQ</List.Item>
                    </List>
                   
                </Grid.Column>
                <Grid.Column width={4}>
                    <Header
                    as='h4'
                    content='Premier League'
                    style={{
                        fontSize: '20px', 
                        fontWeight: 'bold', 
                        fontFamily: 'Poppins',
                    }}
                    
                    />
                    <List link relaxed style={{
                        fontSize: '14px', 
                        fontWeight: 'normal', 
                        fontFamily: 'Poppins',
                    }}
                    >
                        <List.Item style={{color: '#000000'}} as='a'>Registration</List.Item>
                        <List.Item style={{color: '#000000'}} as='a'>League Rankings</List.Item>
                        <List.Item style={{color: '#000000'}} as='a'>Results</List.Item>
                        <List.Item style={{color: '#000000'}} as='a'>Archives</List.Item>
                    </List>

                </Grid.Column>
                <Grid.Column width={4}>
                    <Header
                    as='h4'
                    content='Competitions'
                    style={{
                        fontSize: '20px', 
                        fontWeight: 'bold', 
                        fontFamily: 'Poppins',
                    }}
                    />
                    <List link relaxed
                        style={{
                            fontSize: '14px', 
                            fontWeight: 'normal', 
                            fontFamily: 'Poppins',
                        }}
                    >
                        <List.Item style={{color: '#000000'}} as='a'>Tournaments</List.Item>
                        <List.Item style={{color: '#000000'}} as='a'>League Rankings</List.Item>
                        <List.Item style={{color: '#000000'}} as='a'>Results</List.Item>
                        <List.Item style={{color: '#000000'}} as='a'>Archives</List.Item>                
                    </List>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Header
                    as='h4'
                    content='Contact Us'
                    style={{
                        fontSize: '20px', 
                        fontWeight: 'bold', 
                        fontFamily: 'Poppins',
                    }}
                    />
                    <List relaxed 
                    style={{
                            fontSize: '14px', 
                            fontWeight: 'normal', 
                            fontFamily: 'Poppins',
                    }}
                    >
                        <List.Item as='a'><Link to="/">enquiries@apit.com</Link></List.Item>
                    </List>
                </Grid.Column>
            </Grid.Row>  
            </Grid>
            <Grid>  
            <Grid.Row> 
            <Grid.Column width={2}>
            </Grid.Column>            
            <Grid.Column width={4}>
                <Segment circular style={{backgroundColor: '#405092', width: '10px', height: '10px'}}>
                         <Icon size="large" name="facebook f" style={{color: "#FFFFFF"}}/>
                </Segment>                         
            </Grid.Column>
            <Grid.Column width={4}>
                 <Segment circular style={{backgroundColor: '#405092', width: '10px', height: '10px'}}>
                         <Icon size="large" name="instagram" style={{color: "#FFFFFF"}}/>
                 </Segment>
            </Grid.Column>
            <Grid.Column width={4}>
                 <Segment circular style={{backgroundColor: '#405092', width: '10px', height: '10px'}}>
                         <Icon size="large" name="youtube" style={{color: "#FFFFFF"}}/>
                 </Segment>
            </Grid.Column>
            <Grid.Column width={2}>
            </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column textAlign="center" width={4}>
                </Grid.Column>
                <Grid.Column textAlign="center" width={4}>
                    <span style={{fontFamily:'Poppins', fontSize: '16px', fontWeight: 'normal'}}>Privacy</span>
                </Grid.Column>
                <Grid.Column textAlign="center" width={4}>
                    <span style={{fontFamily:'Poppins', fontSize: '16px', fontWeight: 'normal'}}>Terms</span>
                </Grid.Column>
                <Grid.Column textAlign="center" width={4}>
                </Grid.Column>
            </Grid.Row>
            </Grid>
            </Container>
        </Segment>
    )
}
export default MobileFooter