import { Button, Container, Grid, Header, Menu, Segment, Image } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"

const Headers = () => {
    return(
        <Segment vertical  style={{backgroundColor: '#f4f6f6',paddingBottom: '1em', border: 0}}>
                        <Menu
                                size="huge"
                                secondary
                                style={{backgroundColor: '#f4f6f6'}}
                                
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
                                        <Button color="blue">
                                            Register
                                        </Button>
                                    </Menu.Item>
                            </Container>
                        </Menu>    
       
        </Segment>
        
    )
}
export default Headers