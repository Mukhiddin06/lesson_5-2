import './App.css'
import rec30 from './assets/Rectangle 30.png'
import rec32 from './assets/Rectangle 32.png'
import rec34 from './assets/Rectangle 34.png'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Post from './components/Post/Post'
import Footer from './components/Footer/Footer'
import Work from './components/Work/Work'

function App(){
  const works = [
    {
      image: rec30,
      alt: 'design',
      title: 'Designing Dashboards',
      year: '2020',
      category: 'Dashboard',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    {
      image: rec32,
      alt: 'vibrant',
      title: 'Vibrant Portraits of 2020',
      year: '2018',
      category: 'Illustration',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    {
      image: rec34,
      alt: 'day',
      title: '36 Days of Malayalam type',
      year: '2018',
      category: 'Typography',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    }
  ];
  return(
    <>
    <Header/>
    <main className="site-main">
      <Hero/>
      <Post/>
      <Work works={works}/>
    </main>
    <Footer/>
    </>
  )
}
export default App

