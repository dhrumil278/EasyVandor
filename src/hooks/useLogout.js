import { useAuthContext } from "./useAuthContext"

export const useLogout =()=>{
    const logout = () =>{
        //remove user from LocalStorage

        localStorage.removeItem('user')

        //dispatch logout action

        dispatchEvent({type:'LOGOUT'})
    }

    return {logout}
} 