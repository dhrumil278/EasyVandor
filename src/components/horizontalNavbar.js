import { useLogout } from '../hooks/useLogout'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import '../Style/horizontalNavbar.less';

export const HorizontalNavbar = () => {

    const { logout } = useLogout()
    const { user } = useAuthContext()


    const handleClick = () => {
        logout()
    }
    return (
        <>
            <header>
                <div className="container">
                    <div className='EasyVandor-div'>
                        <Link to='/' className='EasyVandor'>EasyVandor</Link>
                    </div>
                    {user && (
                        <div className='login-signup-div'>
                            <span>{user.email}</span>
                            <button onClick={handleClick}>Log out</button>
                        </div>
                    )}
                    {!user && (
                        <div className='login-signup-div'>
                            <Link to='/login' className='hNavHeader'>Login</Link>
                            <Link to='/signup' className='hNavHeader'>Signup</Link>
                        </div>
                    )}
                </div>
            </header>
        </>
    )
}

