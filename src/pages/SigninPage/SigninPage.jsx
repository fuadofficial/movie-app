import './SigninPage.css'
const SigninPage = () => {
    return (
        <div className='sign-container'>
            <div className="sign-box">
                <h2>Sign in</h2>
                <div className="input-section">
                    <input type="email" placeholder='email' />
                </div>
                <div className="input-section">
                    <input type="text" placeholder='password' />
                </div>
                <div className="button">
                    <button>Signin</button>
                </div>
                <p className='forgot'>Forgot Password</p>
                <p className='sign'>New to Movie Logham? <span>Sign up now.</span></p>
            </div>
        </div>
    )
}

export default SigninPage