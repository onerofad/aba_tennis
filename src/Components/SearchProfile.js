import { Container, Grid, Header, Segment, Divider, Input } from "semantic-ui-react"
import Footer from "./Footer"
import Headers from "./Headers"
import { useEffect, useState } from "react"
import getsignupDetails from "../services/API"
import { useNavigate } from "react-router-dom"

const SearchProfile = () => {

    const navigate = useNavigate()
    useEffect(() => {
        getdetails()
        handleChange(search)
    })


    const [loader, setloader] = useState(false)
    const [search, setsearch] = useState("")
    const [details, setdetails] = useState([])
    let str_val = ""

    const getdetails = () => {
        getsignupDetails().get("/")
        .then((res) => setdetails(res.data))
    }


    const handleChange = (value) => {
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
                            <span style={{
                                fontFamily: 'Poppins',
                                fontWeight: 'normal',
                                fontSize: '20px'
                            }}>
                                use the search bar to begin you search
                            </span>
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