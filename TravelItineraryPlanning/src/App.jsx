import Navbar from './components/Navbar'
import background from './assets/background.mp4'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import LoginSignup from './components/LoginSignup'
import './nav.css'
import './footer.css'
import './services.css'
import './card.css'
import AllDestinations from './components/AllDestinations'
import './allDestinations.css'
import './Login.css'
import './card.css'
import './bgvideo.css'
import './booking.css'
import './bookings.css'



function App() {

  return (
    <>
    <Navbar/>
    <div className='video-container'>
        <div className='text' style={{lineHeight:'-0px'}}>
          <p style={{marginTop:'200px',fontSize:'80px',textAlign:'center',color:'white',fontFamily:'sans-serif'}}>Adventure Awaits</p>
          <p style={{ fontSize:'2rem',textAlign:'center',color:'white',fontFamily:'sans-serif'}}>What are you waiting for ?</p>
        </div>
        <div className='btn-container'>
          <button className="button-start">Get Started</button>
          <button className="button-watch">
            Watch Trailer
            <i className="fa-regular fa-circle-play"></i>
          </button>
        </div>

        <video autoPlay loop muted className="background-video">
          <source src={background} />
          Your browser does not support the video tag.
        </video>
      </div>
    <HomePage />
    <Footer/>

    </>

  )
}

export default App
