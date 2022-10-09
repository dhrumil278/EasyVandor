import { useState } from "react";
import { useAuthContext } from './useAuthContext';
import { useNavigate } from "react-router-dom";


export const useSignup = () =>{
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()
    const nevigate = useNavigate()

    const signup = async (email,password) =>{
        setIsLoading(true)
        setError(null)

        const response = await fetch('http://localhost:4000/api/user/signup',{
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password}),
        })

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
            nevigate('/shop')
        }
    }
    return{ signup, isLoading, error }
}