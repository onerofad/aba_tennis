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

export function getRanking(){
    return(
    axios.create({
        baseURL: "https://tennis-backend.vercel.app/api/ranking/",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        }
        
    })
    )
}

export function getUploadedImages(){
    return(
    axios.create({
        baseURL: "https://tennis-backend.vercel.app/api/uploadedimages/",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        }
        
    })
    )
}

export function getTournamentUploadedVideos(){
    return(
    axios.create({
        baseURL: "https://tennis-backend.vercel.app/api/uploadedtournamentvideos/",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        }
        
    })
    )
}

export function getHighlightUploadedVideos(){
    return(
    axios.create({
        baseURL: "https://tennis-backend.vercel.app/api/uploadedhighlightvideos/",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        }
        
    })
    )
}

export function getTeamUploadedVideos(){
    return(
    axios.create({
        baseURL:"https://tennis-backend.vercel.app/api/uploadedteamvideos/",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        }
        
    })
    )
}


