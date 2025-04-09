import React from 'react';
import s from './Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={s.home}>
      <div className={s.home_container}></div>
    </div>
  );
};

export default Home;
