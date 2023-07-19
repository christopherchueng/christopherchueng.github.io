import { BrowserRouter } from 'react-router-dom'
import Content from './components/SplashPage/Content'
import Header from './components/SplashPage/Header'
import Footer from './components/SplashPage/Footer'
import './index.css'

const App = () => (
  <BrowserRouter>
    <Header />
    <Content />
    <Footer />
  </BrowserRouter>
)

export default App
