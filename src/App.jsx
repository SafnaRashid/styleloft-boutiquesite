import { Routes ,Route} from 'react-router-dom'
import './App.css'
import Landingpage from './pages/Landingpage'
import Home from './pages/Home'
import History from './pages/History'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
   {/* path for landing(http://http://localhost:5174/),home(http://http://localhost:5174/home),history(http://http://localhost:5174/history) */}
   <Header/>
   <Routes>
    <Route path ='/' element={<Landingpage/>}/>
    <Route path ='/home' element={<Home/>}/>
    <Route path ='/history' element={<History/>}/>
   </Routes>
    
    <Footer/>
    </>
  )
}

export default App
