import {Icon, Sidebar, Form, Modal, Dropdown, Segment, Grid, Menu, Container, Image, Button, Header, Divider, Placeholder } from "semantic-ui-react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useEffect, useReducer, useState } from "react"
import MobileFooter from "./MobileFooter"
import MobilePrivacy from "./MobilePrivacy"

const MobilePrivacyPolicy = () => {

    const [ sidebarOpened, setSidebarOpened ] = useState()
    const navigate = useNavigate()

    const logout = () => {
        sessionStorage.removeItem("em")
        sessionStorage.removeItem("db")
        sessionStorage.removeItem("fn")
        sessionStorage.removeItem("f")
        sessionStorage.removeItem("handbat")
        sessionStorage.removeItem("country")

        sessionStorage.removeItem("currenteam")
            sessionStorage.removeItem("lastchamp")
            sessionStorage.removeItem("datelastchamp")
            sessionStorage.removeItem("locatelastchamp")
            sessionStorage.removeItem("favoriteplayer")
            sessionStorage.removeItem("points")

        navigate("/")
    }

    const checkregister = () => {
        if(sessionStorage.getItem("em") === null){
             navigate("/signup")
        }else{
            navigate("/register")
        }
    }

    if(sessionStorage.getItem("em") === null ){
    return(
        <div>
           <Sidebar.Pushable>
            <Sidebar
            as={Menu}
            animation="overlay"
            vertical
            inverted
            onHide={() => setSidebarOpened(false)}
            visible={sidebarOpened}   
            
            style={{
                fontFamily: 'Poppins', 
                fontSize: '14px',
                fontWeight: 'normal',
                maxHeight: 560,
                minWidth: 200,
                backgroundColor: '#000000'
            }}       
            >
              
                <Menu.Item as='a' onClick={() => navigate("/")}>
                    Home
                </Menu.Item>
                <Menu.Item as='a'>
                        <Dropdown  text= "Premier League" floating>
                                <Dropdown.Menu pointing="bottom">
                                    <Dropdown.Item 
                                        text="Registration"           
                                        onClick={() => checkregister()}  
                                    />
                                    <Dropdown.Item 
                                        text="Results" 
                                        onClick={() => navigate("/results") }
                                    />
                                     <Dropdown.Item 
                                        text="PL Stories" 
                                        disabled
                                    />
                                </Dropdown.Menu>
                        </Dropdown> 
                </Menu.Item>
                <Menu.Item as='a'>
                <Dropdown  text= "Competition" floating>
                                <Dropdown.Menu pointing="bottom">
                                    <Dropdown.Item 
                                        text="Governor's cup"           
                                        disabled  
                                    />
                                     <Dropdown.Item 
                                         text="Chairman's cup"           
                                         disabled  
                                    />
                                </Dropdown.Menu>
                        </Dropdown> 
                </Menu.Item>

                <Menu.Item as='a' onClick={() => navigate("/player/ranking")}>
                Player Ranking
                </Menu.Item>
                <Menu.Item as='a'  onClick={() => navigate("/video")}>
                    Watch Videos
                </Menu.Item>
                <Menu.Item as='a' onClick={() => navigate("/search/player/profile")}>
                    Player Profiles
                </Menu.Item>
                <Menu.Item as='a'  onClick={() => navigate("/gallary")}>
                    Image Gallery
                </Menu.Item>
                <Menu.Item as='a'  onClick={() => navigate("/results")}>
                    Results
                </Menu.Item>
          
                    <Grid.Row>
                        <Grid.Column style={{paddingTop: '4em'}}>
                            <p style={{ paddingBottom: '1.5em'}}>
                                <Link style={{
                                    fontFamily: 'Poppins',
                                    fontWeight: 'normal',
                                    fontSize: '14px',
                                    color: '#FFFFFF',
                                    paddingLeft: '1em',
                            
                                }} to="/signup">
                                    Register
                                </Link>
                            </p>
                            <p style={{paddingLeft: '1em'}}>
                                <Link  style={{
                                    fontFamily: 'Poppins',
                                    fontWeight: 'normal',
                                    fontSize: '14px',
                                    color: '#FFFFFF',
                            
                                }} to="/login">
                                    Login
                                </Link>
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{padding: '3em 1em'}}>
                        <Grid>
                        <Grid.Row>
                                <Grid.Column width={5}>
                                    <Link to="https://instagram.com/abapltt?igshid=MWZjMTM2ODFkZg==">
                                        <Icon size="large" style={{color: '#FFFFFF'}} name="instagram" />
                                    </Link>
                                </Grid.Column>
                                <Grid.Column width={5}>
                                    <Link to="https://web.facebook.com/profile.php?id=61551260060823">
                                        <Icon size="large" style={{color: '#FFFFFF'}} name="facebook f" />

                                    </Link>
                                </Grid.Column>
                                <Grid.Column width={5}>
                                    <Link to="https://youtube.com/@AbaPremierLeaugeTableTennis?si=UXra4njATRJK5rxx">
                                     <Icon size="large" style={{color: '#FFFFFF'}} name="youtube" />

                                    </Link>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                       
                    </Grid.Row>
              
                
            
            </Sidebar>
            <Sidebar.Pusher dimmed={sidebarOpened}>
                <Segment
                 textAlign='center'
                 vertical
                 style={{border: 0, backgroundColor: '#F6F6F6', padding: '3em 0.5em'}}           

                >
                    <Menu
                     fixed='top'
                     size="medium"
                     secondary
                     pointing
                     style={{border: 0, backgroundColor: '#F6F6F6', paddingTop: '0.5em', paddingLeft: '1em', paddingRight: '0.5em'}}           
                    >
                        <Container>
                        <Image onClick={() => navigate("/")}  size="mini" src="../../images/about/about.png" />
                                    
                            <Menu.Item as="a" position="right" onClick={() => setSidebarOpened(true)}>
                                 <Icon size="large" verticalAlign="middle" name="sidebar" />
                            </Menu.Item> 
                            
                        </Container>
                    </Menu>
                </Segment>
                <MobilePrivacy />
             
            </Sidebar.Pusher>
               
                <MobileFooter />
          
        </Sidebar.Pushable>
        </div>
    )
    }else{
        return(
            <div>
               <Sidebar.Pushable>
                <Sidebar
                as={Menu}
                animation="overlay"
                vertical
                inverted
                onHide={() => setSidebarOpened(false)}
                visible={sidebarOpened}   
                
                style={{
                    fontFamily: 'Poppins', 
                    fontSize: '14px',
                    fontWeight: 'normal',
                    maxHeight: 560,
                    minWidth: 200,
                    backgroundColor: '#000000'
                }}       
                >
                  
                    <Menu.Item as='a' onClick={() => navigate("/")}>
                        Home
                    </Menu.Item>
                    <Menu.Item as='a'>
                        <Dropdown  text= "Premier League" floating>
                                <Dropdown.Menu pointing="bottom">
                                    <Dropdown.Item 
                                        text="Registration"           
                                        onClick={() => checkregister()}  
                                    />
                                    <Dropdown.Item 
                                        text="Results" 
                                        onClick={() => navigate("/results") }
                                    />
                                     <Dropdown.Item 
                                        text="PL Stories" 
                                        disabled
                                    />
                                </Dropdown.Menu>
                        </Dropdown> 
                </Menu.Item>
                <Menu.Item as='a'>
                <Dropdown  text= "Competition" floating>
                                <Dropdown.Menu pointing="bottom">
                                    <Dropdown.Item 
                                        text="Governor's cup"           
                                        disabled  
                                    />
                                     <Dropdown.Item 
                                         text="Chairman's cup"           
                                         disabled  
                                    />
                                </Dropdown.Menu>
                        </Dropdown> 
                </Menu.Item>
    
                    <Menu.Item as='a' onClick={() => navigate("/player/ranking")}>
                    Player Ranking
                    </Menu.Item>
                    <Menu.Item as='a'  onClick={() => navigate("/video")}>
                        Watch Videos
                    </Menu.Item>
                    <Menu.Item as='a'  onClick={() => navigate("/search/player/profile")}>
                        Player Profiles
                    </Menu.Item>
                    <Menu.Item as='a'  onClick={() => navigate("/gallary")}>
                        Image Gallery
                    </Menu.Item>
                    <Menu.Item as='a'  onClick={() => navigate("/results")}>
                        Results
                    </Menu.Item>
              
                    <Grid.Row>
                        <Grid.Column style={{paddingTop: '4em'}}>
                            <p style={{ 
                                paddingBottom: '1.5em',
                                    fontFamily: 'Poppins',
                                    fontWeight: 'normal',
                                    fontSize: '14px',
                                    color: '#FFFFFF', 
                                    paddingLeft: '1em'                               
                                }}>
                            <Icon name="user" size="large"  />
                            <Dropdown  text= {sessionStorage.getItem("f")} floating>
                                <Dropdown.Menu pointing="bottom">
                                    <Dropdown.Item 
                                        text="Profile"           
                                        onClick={() => navigate("/player/profile/edit")}  
                                    />
                                    <Dropdown.Item 
                                        text="Log Out" 
                                        onClick={() => logout() }
                                    />
                                </Dropdown.Menu>
                            </Dropdown> 
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                        <Grid.Row style={{padding: '3em 1em'}}>
                            <Grid>
                            <Grid.Row>
                                <Grid.Column width={5}>
                                    <Link to="https://instagram.com/abapltt?igshid=MWZjMTM2ODFkZg==">
                                        <Icon size="large" style={{color: '#FFFFFF'}} name="instagram" />
                                    </Link>
                                </Grid.Column>
                                <Grid.Column width={5}>
                                    <Link to="https://web.facebook.com/profile.php?id=61551260060823">
                                        <Icon size="large" style={{color: '#FFFFFF'}} name="facebook f" />

                                    </Link>
                                </Grid.Column>
                                <Grid.Column width={5}>
                                    <Link to="https://youtube.com/@AbaPremierLeaugeTableTennis?si=UXra4njATRJK5rxx">
                                     <Icon size="large" style={{color: '#FFFFFF'}} name="youtube" />

                                    </Link>
                                </Grid.Column>
                            </Grid.Row>
                            </Grid>
                           
                        </Grid.Row>
                  
                    
                
                </Sidebar>
                <Sidebar.Pusher dimmed={sidebarOpened}>
                    <Segment
                     textAlign='center'
                     vertical
                     style={{border: 0, backgroundColor: '#F6F6F6', padding: '3em 0.5em'}}           
    
                    >
                        <Menu
                         fixed='top'
                         size="medium"
                         secondary
                         pointing
                         style={{border: 0, backgroundColor: '#F6F6F6', paddingTop: '0.5em', paddingLeft: '1em', paddingRight: '0.5em'}}           
                        >
                            <Container>
                            <Image onClick={() => navigate("/")}  size="mini" src="../../images/about/about.png" />
                                        
                                <Menu.Item as="a" position="right" onClick={() => setSidebarOpened(true)}>
                                     <Icon size="large" verticalAlign="middle" name="sidebar" />
                                </Menu.Item> 
                                
                            </Container>
                        </Menu>
                    </Segment>
                 <MobilePrivacy />
                </Sidebar.Pusher>
                   
                    <MobileFooter />
              
            </Sidebar.Pushable>
            </div>
        )

    }
}
export default MobilePrivacyPolicy