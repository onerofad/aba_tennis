import { Table, Input, Select, Sidebar, Menu, Container, Button, Segment, Icon, Image , Grid, Header, Divider, Placeholder, List} from "semantic-ui-react"
import { Link, useNavigate } from "react-router-dom"

const MobileFooter = () => {

    const navigate = useNavigate()
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
                        <List.Item style={{color: '#000000'}} onClick={() => navigate("/search/player/profile")}>Player profiles</List.Item>
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
                        <List.Item style={{color: '#000000'}} as='a' onClick={() => navigate("/player/ranking")}>League Rankings</List.Item>
                        <List.Item style={{color: '#000000'}} as='a' onClick={() => navigate("/results")}>Results</List.Item>
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
                        <List.Item as='a'>
                        <a href="mailto:info@abaplt.com">info@abaplt.com</a>

                        </List.Item>
                    </List>
                </Grid.Column>
            </Grid.Row>  
            </Grid>
            <Grid>  
            <Grid.Row> 
            <Grid.Column width={2}>
            </Grid.Column>            
            <Grid.Column width={4}>
                <Segment circular style={{backgroundColor: '#405092', width: '8px', height: '8px'}}>
                        <Link to="https://web.facebook.com/profile.php?id=61551260060823"><Icon size="large" name="facebook f" style={{color: "#FFFFFF"}}/></Link> 
                </Segment>                         
            </Grid.Column>
            <Grid.Column width={4}>
                 <Segment circular style={{backgroundColor: '#405092', width: '8px', height: '8px'}}>
                         <Link to="https://instagram.com/abapltt?igshid=MWZjMTM2ODFkZg=="><Icon size="large" name="instagram" style={{color: "#FFFFFF"}}/></Link>

                 </Segment>
            </Grid.Column>
            <Grid.Column width={4}>
                 <Segment circular style={{backgroundColor: '#405092', width: '8px', height: '8px'}}>
                         <Link to="https://youtube.com/@AbaPremierLeaugeTableTennis?si=UXra4njATRJK5rxx"><Icon size="large" name="youtube" style={{color: "#FFFFFF"}}/></Link>
                 </Segment>
            </Grid.Column>
            <Grid.Column width={2}>
            </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column textAlign="center">
                    <span style={{fontFamily:'Poppins', fontSize: '16px', fontWeight: 'normal', cursor: 'pointer'}} onClick={() => navigate("/terms")}>Privacy Terms</span>
                </Grid.Column>
            </Grid.Row>
            </Grid>
            </Container>
        </Segment>
    )
}
export default MobileFooter