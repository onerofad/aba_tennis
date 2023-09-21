import { useEffect, useState } from "react"
import { Grid, Pagination } from "semantic-ui-react"
import { useNavigate, useParams } from "react-router-dom"
import { getLatestNews } from "../services/API"
import '../style.css'

const PaginationComponent = () => {
    const [activePage, setactivePage] = useState()
    const [pageItem, setPageItem] = useState(0)
    const navigate = useNavigate()
    const params = useParams()
    let count = 0

    const [latestnews, setlatestnews] = useState([])
    useEffect(() => {
        getNews()
        setactivePage(params.pageno)
        getTotalPages()
    })

    const getNews = () => {
        getLatestNews().get("/")
        .then((res) => setlatestnews(res.data))
        .catch(console.error)
    }

    const handlePaginationChange = (activePage) => {
        setactivePage(activePage)
        navigate("/news/" + activePage)
    }
    const getTotalPages = () => {
        latestnews.map((news) => {
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
                            fontWeight: 'normal',
                            fontSize: '16px',
                        }}
                    />

                </Grid.Column>
            </Grid.Row>
    )
}
export default PaginationComponent