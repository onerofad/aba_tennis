import { useEffect, useState } from "react"
import { Grid, Pagination } from "semantic-ui-react"
import getProducts from "./Db"
import { useNavigate, useParams } from "react-router-dom"
import getNews from "./Db"
import '../style.css'

const PaginationComponent = () => {
    const [activePage, setactivePage] = useState()
    const [pageItem, setPageItem] = useState(0)
    const navigate = useNavigate()
    const params = useParams()
    let count = 0

    useEffect(() => {
        setactivePage(params.pageno)
        getTotalPages()
    }, [])

    const handlePaginationChange = (activePage) => {
        setactivePage(activePage)
        navigate("/" + activePage)
    }
    const getTotalPages = () => {
        getNews().map((news) => {
          ++count
        })
        let item = Math.ceil(count/4)
        setPageItem(item)
    }
    return(
         <Grid.Row>
                <Grid.Column>
                    <Pagination
                        onPageChange={(e, {activePage}) => handlePaginationChange(activePage)}
                        totalPages={pageItem}
                        activePage={activePage}
                        
                        style={{
                            fontFamily: "Poppins",
                            color: '#000000',
                            fontWeight: 'Regular',
                            fontSize: '16px',
                            characterSpacing: 0,
                            lineSpacing: 30
                        }}
                    />

                </Grid.Column>
            </Grid.Row>
    )
}
export default PaginationComponent