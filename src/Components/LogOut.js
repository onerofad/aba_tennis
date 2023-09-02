import { useNavigate } from "react-router-dom"

const LogOut = () => {
    const navigate = useNavigate()

    sessionStorage.removeItem("em")
    sessionStorage.removeItem("db")
    sessionStorage.removeItem("fn")
    sessionStorage.removeItem("f")

    navigate("/")

}
export default LogOut