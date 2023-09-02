import axios from "axios";

export default function getsignupDetails(){
    return(
    axios.create({
        baseURL: "https://tennis-backend.vercel.app/api/signup/",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        }
        
    })
    )
}