import './App.scss';
import './Normalize.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './components/Homepage/Homepage';
import ChallengePage from './components/ReadingChallengePage/ReadingChallengePage'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/challenge' element={<ChallengePage />} />
          {/* <Route path='/edit-book/:id' element={UpdateBookInfo} />
          <Route path='/show-book/:id' element={ShowBookDetails} /> */}
        </Routes>
    </BrowserRouter>
  );
}

export default App;
