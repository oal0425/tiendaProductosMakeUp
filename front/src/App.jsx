import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './App.css';
import Home from './pages/Home';
import Productos from './pages/Productos';
import About from './pages/About';
import CuidadoCapilar from './pages/CuidadoCapilar';
import CuidadoCorporal from './pages/CuidadoCorporal';
import CuidadoFacial from './pages/CuidadoFacial';
import Maquillaje from './pages/Maquillaje';
import Perfumeria from './pages/Perfumeria';
import Layout from './layout';



function App() {
  return (
    <BrowserRouter>
      <Layout>
          <Routes>
              <Route path='/' element= {<Home/>} />
              <Route path = 'productos' element = {<Productos/>}/>
              <Route path = 'about' element = {<About/>}/>
              <Route path = 'cuidadoCapilar' element={<CuidadoCapilar/>}/>
              <Route path = 'cuidadoCorporal'element={<CuidadoCorporal/>}/>
              <Route path = 'cuidadoFacial'element={<CuidadoFacial/>}/>
              <Route path = 'maquillaje' element={<Maquillaje/>}/>
              <Route path = 'perfumeria'element={<Perfumeria/>}/>
          </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
