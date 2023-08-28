import { Button, Container, Grid, Header, Menu, Segment, Image } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"
import '../style.css'

const Headers = () => {
    return(
                        <Menu
                                size="huge"
                                secondary
                                style={{
                                            fontFamily: 'Poppins', 
                                            fontSize: '20px',
                                            fontWeight: 'medium',
                                            color:'#000000',
                                            lineSpacing: '30px',
                                            characterSpacing: '0px'
                                            
                                        }}
                                
                        >
                            <Container>
                                    <Menu.Item position="center" as="a">
                                        <Image size="tiny" src="/images/logo/logo.jpg" />
                                    </Menu.Item>

                                    <Menu.Item position="right" as="a">Home</Menu.Item>
                                    <Menu.Item as="a">Premier League</Menu.Item>
                                    <Menu.Item as="a">Competitions</Menu.Item>
                                    <Menu.Item as="a" position="right">Login</Menu.Item>
                                    <Menu.Item as="a">
                                        <Button style={{
                                                            backgroundColor: '#193275', 
                                                            fontSize: '20px',
                                                            fontWeight: 'medium',
                                                            fontFamily: 'Poppins',
                                                            color: '#FFFFFF',
                                                            lineSpacing: '30',
                                                            characterSpacing: '0'
                                                    }}>
                                            Register
                                        </Button>
                                    </Menu.Item>
                            </Container>
                        </Menu>            
    )
}
export default Headers