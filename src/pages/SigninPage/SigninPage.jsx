import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../../context/authContext'
import './SigninPage.css'

const SigninPage = () => {
    const navigate = useNavigate()
    const { setAuth } = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        if (email === "" || password === "") {
            alert("Wrong credentials")
        } else {
            setAuth(true)
            navigate('/movie')
        }
    }

    return (
        <div className='sign-container'>
            <div className="sign-box">
                <form onSubmit={handleSubmit}>
                    <h2>Sign in</h2>
                    <div className="input-section">
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder='email'
                            value={email}
                            required
                        />
                    </div>
                    <div className="input-section">
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder='password'
                            value={password}
                            required
                        />
                    </div>
                    <div className="button">
                        <button type='submit'>Sign in</button>
                    </div>
                    <p className='forgot'>Forgot Password</p>
                    <p className='sign'>New to Movie World?  <span><Link to={'/login'} className='login'>Login now.</Link></span></p>
                </form>
            </div>
        </div>
    )
}

export default SigninPage
