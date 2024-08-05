import './Footer.css'
import facebook from '../../assets/icons/facebook.png'
import instagram from '../../assets/icons/insta.png'
import twitter from '../../assets/icons/twitter.png'
import youtube from '../../assets/icons/youtube.png'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="section1">
                <p>Questions? Call 859390802</p>
                <p>FAQ</p>
                <p>Cookies Preferences</p>
                <select >
                    <option>English</option>
                    <option>Malayalam</option>
                </select>
            </div>
            <div className="section2">
                <p>Help Centers</p>
                <p>Cooperate informations</p>
            </div>
            <div className="section3">
                <p>Terms of Use</p>
                Frivacy
            </div>
            <div className="section4">
                <img className='facebook' src={facebook} alt="" />
                <img className='insta' src={instagram} alt="" />
                <img src={twitter} alt="" />
                <img src={youtube} alt="" />
            </div>
        </div>
    )
}

export default Footer