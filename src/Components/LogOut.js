import { useNavigate } from "react-router-dom"

const LogOut = () => {
    const navigate = useNavigate()

    sessionStorage.removeItem("em")
    sessionStorage.removeItem("db")
    sessionStorage.removeItem("fn")
    sessionStorage.removeItem("f")
    sessionStorage.removeItem("handbat")
    sessionStorage.removeItem("country")
        
    navigate("/")

}
export default LogOut