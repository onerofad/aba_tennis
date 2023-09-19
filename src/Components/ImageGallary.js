import {Segment, Grid, Container, Header, Divider, Placeholder, Image} from 'semantic-ui-react'
import Footer from './Footer'
import Headers from './Headers'
import { getUploadedImages } from '../services/API'
import { useEffect, useState } from 'react'

const ImageGallary = () => {

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
        <Segment vertical style={{backgroundColor: '#F6F6F6', padding: '0em 6em'}}>
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <Headers />
                    </Grid.Column>
                </Grid.Row>
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
                                    <Grid.Column width={4}>
                                        <Placeholder fluid style={{ height: 240, width: 200 }}>
                                            <Image style={{ height: 240, width: 200 }}  src={"https://res.cloudinary.com/du3ck2joa/" + image.imageurl} />
                                        </Placeholder>
                                        <br/>
                                    </Grid.Column>
                                   

                                )
                            })
                        
                    
                    }
                </Grid.Row>
                
                <Grid.Row style={{padding: '6em 6em 2em'}}>
                    <Grid.Column>
                        <Footer />
                    </Grid.Column>
                </Grid.Row>
            </Grid>

    </Segment>

    )
}
export default ImageGallary