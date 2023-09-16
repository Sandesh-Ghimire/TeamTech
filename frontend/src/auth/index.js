import {API} from "../backend"


export const signup = async (user) => {
    console.log(API,"APPII")
    console.log(user)
    const res = await fetch(`${API}/signup`,{
        method:"POST",
        headers:{
            'Accept':'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(user)
    })
    const data = await res.json()
    return data

    // .then(response => {
    //     const res = await response.json()
    // }).catch(err => console.log("Error:",err))
    
}
export const signin = async (user) => {
    const res = await fetch(`${API}/signin`,{
        method:"POST",
        headers:{
            "Accept":"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    })
    const data = await res.json()
    return data
    
}

export const authenticate = (data,next) => {
    if(typeof window !== "undefined"){
        localStorage.setItem("jwt",JSON.stringify(data))
        next()
    }
}   

export const signout = (next) => {
    if(typeof window !== "undefined"){
        localStorage.removeItem("jwt")
        next()

        return fetch(`${API}/signout`,{
            method:"GET"
        })
        .then(response => console.log("signout success"))
        .catch(err => console.log(err))
    }    
}

export const isAuthenticated = () => {
    if(typeof window == "undefined"){
        return false
    }
    if(localStorage.getItem("jwt")){
        return JSON.parse(localStorage.getItem("jwt"))

    }else{
        return false
    }
}