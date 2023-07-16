import './App.css';
import { Route, Routes } from 'react-router-dom';

import Landing from './Views/Landing/landing';
import Form from './Views/Form/Form';
import Home from './Views/Home/home';
import Detail from './Views/Detail/Detail';


import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/form" element={<Form />} />
        <Route path="/detail/:countryId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;