import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../../context/authContext'
import './Login.css'

const Login = () => {
    const navigate = useNavigate()
    const { setAuth } = useAuth()
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (event) => {
        event.preventDefault()

        if (userName === "fuad" && password === "1234") {
            setAuth(true);
            localStorage.setItem('userName', userName);
            navigate('/movie');
        } else {
            setAuth(false);
        }
    }

    return (
        <div className='sign-container'>
            <div className="sign-box">
                <form onSubmit={handleLogin}>
                    <h2>Login</h2>
                    <div className="input-section">
                        <input
                            onChange={(e) => setUserName(e.target.value)}
                            type="text"
                            placeholder='user name'
                            value={userName}
                            required
                        />
                    </div>
                    <div className="input-section">
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type="number"
                            placeholder='password'
                            value={password}
                            required
                        />
                    </div>
                    <div className="button">
                        <button type='submit'>Login</button>
                    </div>
                    <p className='forgot'>Forgot Password</p>
                    <p className='sign'>New to Movie World?  <span><Link to={'/'} className='login'>Sign in now.</Link></span></p>
                </form>
            </div>
        </div>
    )
}

export default Login