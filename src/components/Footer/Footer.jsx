import './Footer.css'
import fb from '../../assets/fb.svg'
import inst from '../../assets/insta.svg'
import group from '../../assets/Group.svg'
import Linke from '../../assets/Linkedin.svg'
function Footer (){
    return(
        <><footer className="site-footer">
        <div className="container">
          <div className="footer">
            <ul className="footer-list">
              <li className="footer-item">
                <a href="#" className="footer-link"><img className="footer-img" src={fb} alt="img" width={35} height={35}/></a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-link"><img className="footer-img" src={inst} alt="img" width={35} height={35}/></a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-link"><img className="footer-img" src={group} alt="img" width={35} height={35}/></a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-link"><img className="footer-img" src={Linke} alt="img" width={35} height={35}/></a>
              </li>
            </ul>
          </div>
          <p className="footer-text">Copyright ©2020 All rights reserved </p>
        </div>
      </footer></>
    )
}
export default Footer