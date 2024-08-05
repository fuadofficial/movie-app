import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'
import { AuthProvider } from './context/authContext.jsx'
import { MovieProvider } from './context/movieContext.jsx'
import { ThemeContext } from './context/themeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeContext>
        <MovieProvider>
            <AuthProvider>
                <App />
            </AuthProvider>
        </MovieProvider>
    </ThemeContext>
)
