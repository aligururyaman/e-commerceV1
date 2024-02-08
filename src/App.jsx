import './App.css'
import * as React from "react";
import { BrowserRouter as Rauter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';
import PagesContainer from './container/PagesContainer';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import Search from './pages/Search';

function App() {


  return (
    <>
      <PagesContainer>
        <Rauter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/> 
            <Route path="/products/:id" element={<Detail />}/> 
            <Route path="/sepet" element={<Cart />}/> 
            <Route path="/products/:search" element={<Search />}/> 
          </Routes>
        </Rauter>
      </PagesContainer>
    </>
  )
}

export default App
