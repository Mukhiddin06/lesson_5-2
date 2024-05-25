import './Post.css'
function Post (){
    return(
        <><section className="post-section">
        <div className="container">
          <div className="post">
            <div className="recent">
              <h3 className="recent-title">Recent posts</h3>
              <a href="#" className="recent-link">View all</a>
            </div>
            <div className="card-wrapper">
              <div className="card">
                <h3 className="card-title">Making a design system from scratch</h3>
                <p className="card-time">12 Feb 2020 <strong className="card-about">Design, Pattern</strong></p>
                <p className="card-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </div>
              <div className="card">
                <h3 className="card-title">Creating pixel perfect icons in Figma</h3>
                <p className="card-time">12 Feb 2020 <strong className="card-about">Figma, Icon Design</strong></p>
                <p className="card-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </div>
            </div>
          </div>
        </div>
      </section></>
    )
}
export default Post