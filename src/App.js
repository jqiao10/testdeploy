import './Clear.css';
import { Routes, BrowserRouter, Route, HashRouter } from 'react-router-dom';
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
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
       {/* change use state when there is acutal login
      <header className='stickyHeader'>
      <NavigationBar/>
      </header> */}

<BrowserRouter basename='/testdeploy'>
      <HashRouter>
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
      <Route path='/' element={<Landlord/>}></Route>

   

    
      </HashRouter>
      </BrowserRouter>
     
     <footer className='stickyFooter'> 
      <Footer/>
     </footer>
    </div>
  );
}

export default App;
