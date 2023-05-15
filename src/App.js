import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Exchanges from './components/Exchanges'
import Cryptocurrencies from './components/Cryptocurrencies'
import CryptoDetails from './components/CryptoDetails'
import News from './components/News'
import Homepage from './components/Homepage'
import './App.css'
import { Layout, Space, Typography } from 'antd'

const App = () => {
  return (
    <div className="app">
    <Router>
      <div className="navbar">
      <Navbar />
      </div>
      <div className="main">
        <Layout>
      <div className="routes">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/exchanges' element={<Exchanges />} />
        <Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
        <Route path='/crypto/:nanoid' element={<CryptoDetails />} />
        <Route path='/news' element={<News />} />
      </Routes>
      </div>
      </Layout>
      <div className="footer" level={5}>
        <Typography.Title style={{color: 'white', textAlign: 'center'}}>
          Cryptoverse <br />
          Al rights reserved
          <Space>
            <Link to='/'>Home</Link>
            <Link to='/exchanges'>Exchanges</Link>
            <Link to='/news'>News</Link>
          </Space>
        </Typography.Title>
      </div>
      </div>
    </Router>
    </div>
  )
}

export default App
