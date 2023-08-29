import { Segment, List, Grid, Container, Header, Divider, Icon, Image } from "semantic-ui-react"
import { Link } from "react-router-dom"
const Footer = () => {

    return(
  
        <Grid textAlign="center">
            <Grid.Row style={{fontWeight: 'normal'}}>
                <Grid.Column width={4} >
                   <Image centered size="tiny" src="/images/logo/logo.jpg" />
                    <List link
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
                    <List link style={{
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
                    <List link 
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
                    <List  link  
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

    )

}
export default Footer

