
import React from 'react';
import { Route, Routes ,Switch , Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar, Homepage, Exchanges, CryptoCurrennsies, CryptoDetails } from './components';
import './App.css'


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
              <Route exact path="/">
                <Homepage/>
              </Route>
              <Route exact path="/exchanges">
                <Exchanges/>
              </Route>
              <Route exact path="/cryptocurrensies">
                <CryptoCurrennsies/>
              </Route>
              <Route exact path="/crypto/:coinId">
                <CryptoDetails/>
              </Route>
            </Routes>

          </div>
        </Layout>
      </div>

      <div className='footer'>

      </div>

    </div>
  );
}

export default App;
