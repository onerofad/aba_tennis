import { Icon, Container, Menu, Image, Dropdown } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"
import '../style.css'

const RegisterHeader = () => {

    return(
        <Menu
        size="medium"
        secondary
        style={{
                    fontFamily: 'Poppins', 
                    fontSize: '20px',
                    fontWeight: 'normal',
                    color:'#000000',
                }}
        
        >
        <Container>
                <Menu.Item  position="center" as="a">
                    <Image size="tiny" src="/images/about/about.png" />
                </Menu.Item>

                <Menu.Item position="right" as="a">Home</Menu.Item>
                <Menu.Item as="a">
                    <Dropdown  text="Premier League" floating>
                        <Dropdown.Menu pointing="bottom">
                            <Dropdown.Item 
                                text="Registration"             
                            />
                            <Dropdown.Item 
                                text="Results" 
                            />
                            <Dropdown.Item 
                                text="PL Stories" 
                            />
                        </Dropdown.Menu>

                    </Dropdown>                                    
                </Menu.Item>
                <Menu.Item as="a">
                    
                    <Dropdown  text="Competitions" floating>
                        <Dropdown.Menu pointing="bottom">
                            <Dropdown.Item 
                                text="Covernor's cup"             
                            />
                            <Dropdown.Item 
                                text="Chairman's cup" 
                            />
                        </Dropdown.Menu>

                    </Dropdown> 
                </Menu.Item>
                <Menu.Item as="a" position="right">
                    <Icon name="user" size="large"   />
                    <span style={{
                        display: 'block',
                        fontFamily: 'Poppins',
                        fontWeight: 'normal',
                        fontSize: '20px'
                        }}>
                            Oloh ogechi
                    </span>
                </Menu.Item>
        </Container>
</Menu>    
                               
    )
}
export default RegisterHeader