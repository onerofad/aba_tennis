import { Segment, List, Grid, Container, Header, Divider, Icon, Image } from "semantic-ui-react"
import { Link, useNavigate } from "react-router-dom"
const Footer = () => {
    const navigate = useNavigate()
    const openregister = () => {
        if(sessionStorage.getItem("em") === null){
            navigate("/signup")
        }else{
            navigate("/register")

        }
    }

    return(
        <Grid textAlign="center">
            <Grid.Row style={{fontWeight: 'normal', paddingBottom: '4em'}}>
                <Grid.Column width={4} >
                   <Image centered size="mini" src="/images/about/about.png" />
                    <List link relaxed
                        style={{
                            fontSize: '16px', 
                            fontWeight: 'normal', 
                            fontFamily: 'Poppins',
                        }}
                    >
                        <List.Item style={{color: '#000000'}} onClick={() => navigate("/search/profile") } as="a">Player profiles</List.Item>
                        <List.Item disabled style={{color: '#000000'}}>FAQ</List.Item>
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
                        fontSize: '16px', 
                        fontWeight: 'normal', 
                        fontFamily: 'Poppins',
                    }}
                    >
                        <List.Item style={{color: '#000000'}} onClick={() => openregister()} as='a'>Registration</List.Item>
                        <List.Item style={{color: '#000000'}} onClick={() => navigate("/ranking")} as='a'>League Rankings</List.Item>
                        <List.Item style={{color: '#000000'}} onClick={() => navigate("/results")} as='a'>Results</List.Item>
                        <List.Item disabled style={{color: '#000000'}} as='a'>Archives</List.Item>
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
                            fontSize: '16px', 
                            fontWeight: 'normal', 
                            fontFamily: 'Poppins',
                        }}
                    >
                        <List.Item disabled style={{color: '#000000'}} as='a'>Tournaments</List.Item>
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
                            fontSize: '16px', 
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
            <Grid.Row>
                <Grid.Column>
                    <Grid>
                        <Grid.Row >
                            <Grid.Column width={8}>

                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Grid>
                                    <Grid.Row>
                                        <Grid.Column width={4}>
                                        <Segment circular style={{backgroundColor: '#405092', width: '10px', height: '10px'}}>
                                        <Link to="https://web.facebook.com/profile.php?id=61551260060823"><Icon size="large" name="facebook f" style={{color: "#FFFFFF"}}/></Link> 
                                        </Segment>
                                        </Grid.Column>
                                        <Grid.Column width={4}>
                                        <Segment circular style={{backgroundColor: '#405092', width: '10px', height: '10px'}}>
                                        <Link to="https://instagram.com/abapltt?igshid=MWZjMTM2ODFkZg=="><Icon size="large" name="instagram" style={{color: "#FFFFFF"}}/></Link>
                                        </Segment>
                                        </Grid.Column>
                                        <Grid.Column width={4}>
                                        <Segment circular style={{backgroundColor: '#405092', width: '10px', height: '10px'}}>
                                        <Link to="https://youtube.com/@AbaPremierLeaugeTableTennis?si=UXra4njATRJK5rxx"><Icon size="large" name="youtube" style={{color: "#FFFFFF"}}/></Link>
                                        </Segment>
                                        </Grid.Column>
                                        <Grid.Column width={4} verticalAlign="middle">
                                            Privacy Term
                                        </Grid.Column>
                                       
                                    </Grid.Row>
                                </Grid>

                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
            </Grid.Row>
            </Grid>

    )

}
export default Footer

