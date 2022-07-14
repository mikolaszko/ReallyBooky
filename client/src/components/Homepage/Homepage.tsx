import React from 'react';
import Navbar from '../reusable/Navbar/Navbar';
import Sidebar from '../reusable/Sidebar/Sidebar';
import MainContent from './MainContent/MainContent';

function HomePage() {
  return (
    <div className='homePage'>
      <Navbar />
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default HomePage;
