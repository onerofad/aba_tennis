import { useNavigate } from "react-router-dom"

const LogOut = () => {

    const navigate = useNavigate()
    sessionStorage.removeItem("em")
    sessionStorage.removeItem("db")
    sessionStorage.removeItem("fn")


    navigate("/")

}
export default LogOut