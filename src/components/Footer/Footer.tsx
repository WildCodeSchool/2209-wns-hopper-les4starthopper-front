import './footer.scss'
import twitterLogo  from '../../assets/images/socialmedia/twitter.svg'
import facebookLogo  from '../../assets/images/socialmedia/facebook.svg'
import instagramLogo  from '../../assets/images/socialmedia/instagram.svg'

const Footer = () => {
  return(
    <footer className="footer">      
      <div className="footer__socialIcon">
      <img src={facebookLogo} alt="logo twitter" />
      <img src={twitterLogo} alt="logo twitter" />
      <img src={instagramLogo} alt="logo twitter" />
      </div>      
    </footer>
  )
}

export default Footer;