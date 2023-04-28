import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import CloudService from './components/Services/Cloud/CloudService';
import ConsultingService from './components/Services/Consulting/ConsultingService';
import DigitalMediaService from './components/Services/DigitalMedia/DigitalMediaService';
import './Index.scss';
import Contact from './components/Contact/Contact';



function App() {
  return (
    <>
      <Header/>
      <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/cloudService" element={<CloudService/>}/>
          <Route path="/consultingService" element={<ConsultingService/>}/>
          <Route path="/digitalService" element={<DigitalMediaService/>}/>
          <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
