import { useAuth } from '../../context/authContext'
import './SigninPage.css'
const SigninPage = () => {
    const { handleEmail, handlePassword, handleSubmit } = useAuth()
    return (
        <div className='sign-container'>
            <div className="sign-box">
                <form action="" onSubmit={handleSubmit}>
                    <h2>Sign in</h2>
                    <div className="input-section">
                        <input onChange={handleEmail} type="email" placeholder='email' />
                    </div>
                    <div className="input-section">
                        <input onChange={handlePassword} type="text" placeholder='password' />
                    </div>
                    <div className="button">
                        <button type='submit'>Signin</button>
                    </div>
                    <p className='forgot'>Forgot Password</p>
                    <p className='sign'>New to Movie Logham? <span>Sign up now.</span></p>
                </form>
            </div>
        </div>
    )
}

export default SigninPage