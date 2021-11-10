
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar } from './components';
import { Homepage, Exchanges, Cryptocurrensies, CryptoDetails, News } from './pages'
import './App.css'
import { formatCountdown } from 'antd/lib/statistic/utils';


function App() {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar/>
      </div>
      <div className='main'>
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Homepage/>}/>
              <Route exact path="/exchanges" element={<Exchanges/>}/>
              <Route exact path="/cryptocurrensies" element={<Cryptocurrensies/>}/>
              <Route exact path="/crypto/:coinId" element={<CryptoDetails/>}/>
              <Route exact path="/news" element={<News/>}/>
            </Routes>
          </div>
        </Layout>
        <div className='footer' >
          <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
                Cryptoverse <br/>
                All Rights reserved
          </Typography.Title>
          <Space>
            <Link to='/'>Home</Link>
            <Link to='/cryptocurrensies'>Cryptocurrensies</Link>
            <Link to='/exchanges'>Exchanges</Link>
            <Link to='/news'>News</Link>

          </Space>
        </div>

      </div>

    </div>
  );
}

export default App;
