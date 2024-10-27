import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Header from "./Component/Header"
import Home from './Component/Home';
import Service from './Component/Service';
import Blog from './Component/Blog';
import About from './Component/About';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import SignUp from './Component/SignUp';
import Faqs from './Component/Faqs';
function App() {
  
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route exact path='/Home' Component={Home}/>
          <Route exact path='/Service' Component={Service}/>
          <Route exact path='/Blog' Component={Blog}/>
          <Route exact path='/About' Component={About}/>
          <Route exact path='/Contact' Component={Contact}/>  
          <Route exact path='/SignUp' Component={SignUp}/>
          <Route exact path='/Faqs' Component={Faqs}/>
        </Routes>
        <Footer/>
      </Router>
      
    </>
  )
}

export default App;
