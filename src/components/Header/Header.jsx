import "./Header.css"
import menu from '../../assets/menu.svg'
function Header(){
    return(
     <>
    <header className="site-header">
      <div className="container">
        <div className="header">
          <ul className="header-list">
            <li className="header-item"><a href="#" className="header-link">Works</a></li>
            <li className="header-item"><a href="#" className="header-link">Blog</a></li>
            <li className="header-item"><a href="#" className="header-link">Contact</a></li>
          </ul>
          <img src={menu} alt="menu" className="header-img" width={30} height={18}/>
        </div>
      </div>
    </header>
     </>
    )
}
export default Header