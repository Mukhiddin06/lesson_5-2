import React from 'react';
import './Work.css'
function Work(props) {
  const { works } = props;

  return (
    <section className="work-section">
      <div className="container">
        <div className="work">
          <h3 className="work-title">Featured works</h3>
          {works.map((work, index) => (
            <div className="work-item" key={index}>
              <img src={work.image} alt={work.alt} className="work-img" width={246} height={180}/>
              <div className="work-wrapper">
                <h3 className="work-title">{work.title}</h3>
                <p className="work-about"><strong className="work-time">{work.year}</strong> {work.category}</p>
                <p className="work-text">{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
