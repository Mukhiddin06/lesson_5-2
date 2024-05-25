import './Hero.css'
import john from '../../assets/Ellipse 1.png'
function Hero (){
    return(
   <>
    <section className="hero-section">
        <div className="container">
          <div className="hero">
            <div className="hero-content-wrapper">
              <h2 className="hero-title">Hi, I am John, Creative Technologist</h2>
              <p className="hero-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              <a href="#" className="hero-link">Download Resume</a>
            </div>
            <div className="hero-img-wrapper"><img src={john} alt="John" className="hero-img" width={243} height={243}/></div>
          </div>
        </div>
    </section>
   </>
    )
}
export default Hero