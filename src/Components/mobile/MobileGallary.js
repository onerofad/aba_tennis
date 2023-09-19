import {Image, Segment, Grid, Container, Header, Divider, Placeholder} from 'semantic-ui-react'
import { useEffect, useState } from 'react'
import { getUploadedImages } from '../../services/API'

const MobileGallary = () => {

    const [uploadimages, setuploadimages] = useState([])

    useEffect(() => {
        getuploadImages()
    }, [])

    const getuploadImages = () => {
        getUploadedImages().get("/")
        .then((res) => setuploadimages(res.data))
        .catch(console.error)
    }

    return(
        <Segment vertical style={{backgroundColor: '#F6F6F6', padding: '6em 0em'}}>
        <Container>
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                    <Header 
                        content = "IMAGE GALLERY"
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
                {
                        
                        uploadimages.map((image) => {
                            return(
                                <Grid.Column width={8}>
                                    <Placeholder fluid style={{ height: 240, width: 200 }}>
                                        <Image style={{ height: 240, width: 200 }}  src={"https://res.cloudinary.com/du3ck2joa/" + image.imageurl} />
                                    </Placeholder>
                                    <br/>
                                </Grid.Column>

                            )
                        })
                    
                
                }
                </Grid.Row>
              
                <Divider />
            </Grid>
        </Container>

    </Segment>

    )
}
export default MobileGallary