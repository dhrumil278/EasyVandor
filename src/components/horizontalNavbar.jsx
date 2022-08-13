import { useLogout } from '../hooks/useLogout'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'

export const HorizontalNavbar = () => {

    const { logout } = useLogout()
    const {user} = useAuthContext()


    const handleClick = () => {
        logout()
    }
    return (
        <>
            <header>
                <div className="container">
                    <Link to='/'>
                        <p>EasyVandor</p>
                    </Link>
                    { user && (
                        <div>
                            <span>{user.email}</span>
                            <button onClick={handleClick}>Log out</button>
                        </div>
                    )}
                    { !user && (
                        <div>
                            <Link to='/login'>
                                <p>Login</p>
                            </Link>
                            <Link to='/signup'>
                                <p>Signup</p>
                            </Link>
                        </div>
                    )}
                </div>
            </header>
        </>
    )
}

