import axios from "axios";
import { useState } from "react";
import { useAuthContext } from './useAuthContext';


export const useLogin = () =>{
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const login = async (email,password) =>{
        setIsLoading(true)
        setError(null)

        const response = await fetch('http://localhost:4000/api/user/login',{
            method: 'POST',
            header: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password}),
        })
        // const response = await axios.post('http://localhost:4000/api/user/signup', JSON.stringify({email, password}), {'Content-Type': 'application/json'})
        // .then((res)=>{
        //     console.log('The url is Correct') 
        //     console.log(res.status)})
        // .catch((error)=>{
        //     console.log(error)})

        console.log(JSON.stringify({email, password}))
        const json = await response.json()

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){
            // save the user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            //update the auth context 
            dispatch({type: 'LOGIN', payload: json})

            setIsLoading(false)
        }
    }
    return{ login, isLoading, error }
}