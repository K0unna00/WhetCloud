import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import CloudService from './components/Services/Cloud/CloudService';
import ConsultingService from './components/Services/Consulting/ConsultingService';
import DigitalMediaService from './components/Services/DigitalMedia/DigitalMediaService';
import MobileAppService from './components/Services/MobileApp/MobileAppService';
import './Index.scss';
import Contact from './components/Contact/Contact';
import WebDesignService from './components/Services/WebDesign/WebDesign';
import CompanyOverview from './components/Footer/components/CompanyOverview';
import TermsServices from './components/Footer/components/TermsServices';
import PrivacyPolicy from './components/Footer/components/PrivacyPolicy';




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
          <Route path="/mobileAppService" element={<MobileAppService/>}/>
          <Route path="/webDesignService" element={<WebDesignService/>}/>
          <Route path="/companyOverview" element={<CompanyOverview/>}/>
          <Route path="/termsServices" element={<TermsServices/>}/>
          <Route path="/privacyPolicy" element={<PrivacyPolicy/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
