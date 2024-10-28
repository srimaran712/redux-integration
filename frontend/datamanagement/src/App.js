import React from 'react'
import {useState} from 'react'
import AboutForm from './AboutForm';
import AdditionalDetails from './AdditionalDetails';
import ListProducts from './ListProducts';
import {Routes,Route} from 'react-router-dom'


function App() {
  const[form,setForm]=useState('about')

  
  return (
    <div className="w-full">
      <Routes>

        <Route path='/' element={<AboutForm/>}/>
        <Route path='/additional' element={<AdditionalDetails/>}/>
        <Route path='/products' element={<ListProducts/>}/>
      </Routes> 
       
    </div>
  );
}

export default App;
