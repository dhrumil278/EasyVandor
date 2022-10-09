import { useLogout } from '../hooks/useLogout'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import { Button } from 'antd';
import '../Style/horizontalNavbar.less';

export const HorizontalNavbar = () => {
const navigate = useNavigate()
    const { logout } = useLogout()
    const { user } = useAuthContext()


    const handleClick = () => {
        logout()
        navigate('/shop',{replace:true})

    }
    return (
        <>
            <header>
                <div className="container">
                    <div className='EasyVandor-div'>
                        <Link to='shop' className='EasyVandor'>EasyVandor</Link>
                    </div>
                    {user && (
                        <div className='login-signup-div'>
                            <Button onClick={handleClick} style={{backgroundColor:'#FFCACA',color:'#251B37'}}>Log out</Button>
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

