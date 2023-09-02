import axios from "axios";

export default function getsignupDetails(){
    return(
    axios.create({
        baseURL: "http://localhost:8000/api/signup/",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        }
        
    })
    )
}