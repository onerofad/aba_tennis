import { Button, Container, Grid, Header, Menu, Segment, Image, Dropdown, Icon } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"
import '../style.css'
import {useNavigate} from 'react-router-dom'

const Headers = () => {

    const navigate = useNavigate()
    
    const logout = () => {
            sessionStorage.removeItem("em")
            sessionStorage.removeItem("db")
            sessionStorage.removeItem("fn")
            sessionStorage.removeItem("f")
            sessionStorage.removeItem("handbat")
            sessionStorage.removeItem("country")
            navigate("/")
    }

    if(sessionStorage.getItem("em") === null ){
        return(
            <Menu
            size="medium"
            secondary
            style={{
                        fontFamily: 'Poppins', 
                        fontSize: '18px',
                        fontWeight: 'normal',
                        color:'#000000',
                    }}
            
            >
                  
                    <Menu.Item  position="center" onClick={() => navigate("/")}>
                        <Image size="tiny" src="/images/about/about.png" />
                    </Menu.Item>
                    <Menu.Item>

                    </Menu.Item>
                    <Menu.Item>
                        
                    </Menu.Item>
                    <Menu.Item position="right" onClick={() => navigate("/")} as="a">
                        Home
                    </Menu.Item>
                    <Menu.Item as="a">
                        <Dropdown  text="Premier League" floating>
                            <Dropdown.Menu pointing="bottom">
                                <Dropdown.Item 
                                    text="Registration" 
                                    onClick={() => navigate("/signup") }          
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
                    
                    <Menu.Item as="a" position="right" onClick={() => navigate("/login")}>
                        Login
                    </Menu.Item>
                    <Menu.Item>
                        <Button 
                            onClick={() => navigate("/signup")}
                            style={{
                                                backgroundColor: '#193275', 
                                                fontSize: '20px',
                                                fontWeight: 'normal',
                                                fontFamily: 'Poppins',
                                                color: '#FFFFFF',
                            }}
                        >
                            Register
                        </Button>
                    </Menu.Item>
    </Menu>    
                                   
        )

    }else{
        return(
            <Menu
            size="medium"
            secondary
            style={{
                        fontFamily: 'Poppins', 
                        fontSize: '18px',
                        fontWeight: 'normal',
                        color:'#000000',
                    }}
            
            >
                    <Menu.Item  position="center" as="a">
                        <Image size="tiny" src="/images/about/about.png" />
                    </Menu.Item>
                    <Menu.Item>

                    </Menu.Item>
                    <Menu.Item>
                        
                    </Menu.Item>
                    <Menu.Item onClick={() => navigate("/")} as="a">
                        Home
                    </Menu.Item>
                    <Menu.Item as="a">
                        <Dropdown  text="Premier League" floating>
                            <Dropdown.Menu pointing="bottom">
                                <Dropdown.Item 
                                    text="Registration" 
                                    onClick={() => navigate("/signup") }          
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
                    <Menu.Item position="right">
                      
                       <Icon name="user" size="large"  />
                       <Dropdown  text= {sessionStorage.getItem("f")} floating>
                            <Dropdown.Menu pointing="bottom">
                                <Dropdown.Item 
                                    text="Profile"           
                                    onClick={() => navigate("/profile")}  
                                />
                                <Dropdown.Item 
                                    text="Log Out" 
                                    onClick={() => logout() }
                                />
                            </Dropdown.Menu>
                            </Dropdown> 
                      
                    </Menu.Item>
    </Menu>    
                                   
        )

    }
    
}
export default Headers