import { Icon, Container, Grid, Header, Segment, Divider, Input } from "semantic-ui-react"
import Footer from "./Footer"
import Headers from "./Headers"
import { useEffect, useState } from "react"
import getsignupDetails from "../services/API"
import { useNavigate, useParams } from "react-router-dom"

const SearchProfile = () => {

    const navigate = useNavigate()
    useEffect(() => {
        getdetails()
    })

    const params = useParams()

    const [loader, setloader] = useState(false)
    const [search, setsearch] = useState("")
    const [details, setdetails] = useState([])
    const [is_search, setis_search] = useState(false)
    const [search_array, set_search_array] = useState([])


    let str_val = ""

    const getdetails = () => {
        getsignupDetails().get("/")
        .then((res) => setdetails(res.data))
    }


   /* const handleChange = (value) => {
        setsearch(value)
        details.map((detail) => {
            str_val = detail.fname
            if(str_val.toLowerCase() === search.toLowerCase()){
                setloader(true)
                setTimeout(() => {
                   navigate("/search/profile/result/" + detail.id)
                   setloader(false)
                }, 5000)
            }
        })
      
    }*/

    const handleChange = (value) => {
        setsearch(value)
        setloader(true)  
        setTimeout(() => {
            details.map((detail) => {
                let search_str = detail.fname
                let search_str_l = search_str.toLowerCase()
                if(search_str_l.substring(0,2) === value.toLowerCase()){
                    set_search_array(
                        [
                            {
                                "id" : detail.id,
                                "fn" : detail.fname,
                                "ln" : detail.lname
                            }
                        ]
                    )
                    setis_search(true)
                }
            })
            setloader(false)         
        }, 5000)
    }

    return(
        <Segment vertical style={{backgroundColor: '#F6F6F6'}}>
            <Container>
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <Headers />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                        <Header 
                            content = "PLAYER PROFILES"
                            style={{
                                fontFamily: 'AGRESSIVE',
                                fontWeight: 'bold',
                                fontSize: '25px',
                            }}
                        
                        />
                        <Divider />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <Input 
                                fluid 
                                placeholder="Search for player"
                                loading = {loader}
                                onChange={(e, {value}) => handleChange(value)}
                            />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{paddingBottom: '9em'}}>
                        <Grid.Column textAlign="center">
                            {
                                is_search ? 
                                
                                    search_array.map((search) => {
                                        return(
                                            <Segment textAlign='left' vertical style={{padding: '1em', fontFamily: 'Poppins', fontSize: '18px', backgroundColor: '#000000', color: '#FAFAFA'}}>
                                            <Grid>
                                                <Grid.Row>
                                                    <Grid.Column width={8}>
                                                        {search.fn} {search.ln}
                                                    </Grid.Column>
                                                    <Grid.Column textAlign='right' width={8}>
                                                        <span style={{cursor: 'pointer'}} onClick={() => navigate("/view/profile/" + search.id)}>
                                                           View full profile <Icon name="right angle" />
                                                        </span>
                                                    </Grid.Column>
                                                </Grid.Row>
                                            </Grid>
                                        </Segment>
                                        )
                                    })
                                   
                                :
                                <span style={{
                                        fontFamily: 'Poppins',
                                        fontWeight: 'normal',
                                        fontSize: '20px'
                                    }}
                                    
                                    >
                                        use the search bar to begin you search
                                    </span>
                                   
                            } 
                           
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{padding: '2em 6em'}}>
                        <Grid.Column>
                            <Footer />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>

        </Segment>
    )
}
export default SearchProfile