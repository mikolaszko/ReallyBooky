import './App.scss';
import './Normalize.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './components/Homepage/Homepage';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          {/* <Route path='/addBook' element={CreateBook} />
          <Route path='/edit-book/:id' element={UpdateBookInfo} />
          <Route path='/show-book/:id' element={ShowBookDetails} /> */}
        </Routes>
    </BrowserRouter>
  );
}

export default App;
