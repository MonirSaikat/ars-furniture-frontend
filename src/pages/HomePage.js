import React from 'react';
import CustomReivew from '../components/CustomReivew';
import Header from '../components/Header';
import Items from '../components/Items';
import TimeLine from '../components/TimeLine';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Items title="Featured" />
      <TimeLine />
      <CustomReivew />
    </div>
  );
}

export default HomePage;
