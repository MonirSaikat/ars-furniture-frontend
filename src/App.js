import React from 'react';
import CustomReivew from './components/CustomReivew';
import Footer from './components/Footer';
import Header from './components/Header';
import Items from './components/Items';
import Navbar from './components/Navbar';
import TimeLine from './components/TimeLine';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Items />
      <TimeLine />
      <CustomReivew />
      <Footer />
    </div>
  );
}

export default App;
