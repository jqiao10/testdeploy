//   "homepage": "https://jqiao.github.io/testdeploy/",
import './Clear.css';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './Pages/UplaodProcess/UploadTitle';
import Info from './Pages/UplaodProcess/UploadInfo';
import Feature from './Pages/UplaodProcess/UploadFeature';
import Amentities from './Pages/UplaodProcess/UploadAmentities';
import Safety from './Pages/UplaodProcess/UplaodSafety';
import Description from './Pages/UplaodProcess/UploadDescription';
import Cleaning from './Pages/UplaodProcess/UploadCleaning';
import Image from './Pages/UplaodProcess/UploadImg';
import Address from './Pages/UplaodProcess/UploadAddress';
import Price from './Pages/UplaodProcess/UploadPrice';
import License from './Pages/UplaodProcess/UploadLicense';
import Success from './Pages/UplaodProcess/UploadSuccess';
import Landlord from './Pages/LandlordSection/LandlordPage';
import Footer from './Components/Footer';
import NavigationBar from './Components/NavigationBar';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Previous from './Pages/LandlordSection/Previous';
import Upcoming from './Pages/LandlordSection/Upcoming';
import Current from './Pages/LandlordSection/Current';
import PropertyPreview from './Pages/LandlordSection/PropertyPreview';
import UploadSetting from './Pages/UplaodProcess/UploadSetting';
import AccountSetting from './Pages/LandlordSection/AccountSetting';
import CleaningFeedback from './Pages/LandlordSection/CleaningFeedback';



function App() {
  return (
    <div className="App">
       {/* change use state when there is acutal login */}
      <header className='sticky top-0 z-10'>
      <NavigationBar/>
      </header>
<main className='flex-glow'>
{/* basename='/testdeploy' */}
<BrowserRouter>
<div className="min-h-[90vh]">
      <Routes>
      <Route path='/uploadlisting/title' element={<Title/>}></Route>
      <Route path='/uploadlisting/info' element={<Info/>}></Route>
      <Route path='/uploadlisting/feature' element={<Feature/>}></Route>
      <Route path='/uploadlisting/amentities' element={<Amentities/>}></Route>
      <Route path='/uploadlisting/safety' element={<Safety/>}></Route>
      <Route path='/uploadlisting/description' element={<Description/>}></Route>
      <Route path='/uploadlisting/cleaning' element={<Cleaning/>}></Route>
      <Route path='/uploadlisting/img' element={<Image/>}></Route>
      <Route path='/uploadlisting/address' element={<Address/>}></Route>
      <Route path='/uploadlisting/price' element={<Price/>}></Route>
      <Route path='/uploadlisting/license' element={<License/>}></Route>
      <Route path='/uploadlisting/finish' element={<Success/>}></Route>
      <Route path='/previoust' element={<Previous/>}></Route>
      <Route path='/upcomingt' element={<Upcoming/>}></Route>
      <Route path='/currentt' element={<Current/>}></Route>
      <Route path='/previewproperty/:id' element={<PropertyPreview/>}></Route>
      <Route path='/settingproperty/:id' element={<UploadSetting/>}></Route>
      <Route path='/accountsettingl' element={<AccountSetting/>}></Route>
      <Route path='/cfeedback' element={<CleaningFeedback/>}></Route>

      <Route path='/' element={<Landlord/>}></Route>

   

    
      </Routes>
      </div>

      </BrowserRouter>
      </main>
     
     <footer className='fix bottom-0'> 
      <Footer/>
     </footer>
    </div>
  );
}

export default App;
