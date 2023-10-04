import './components/main.css';
import './components/footer.css'
import Header from './components/header';
import Slider from './components/slider';
import Introduce from './components/Introduce';
import AudioBook from './components/audioBook';
import TruyenAudio from './components/truyenAudio';
import Banner from './components/banner';
import Contact from './components/contact';
import Footer from './components/footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="main">
      <Header></Header>
      <Slider></Slider>
      <Routes>
        <Route path="/" element={<Introduce/>} />
        <Route path="/AudioBook" element={<AudioBook />} />
        <Route path="/TruyenAudio" element={<TruyenAudio />} />
      </Routes>
      <Banner></Banner>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
