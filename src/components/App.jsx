import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import ElipseBackground from "./ElipseBackground";
import Footer from '../components/Footer';
import Services from '../pages/Services';
import Portfolio from '../pages/Portfolio';
import Blog from '../pages/Blog';
import ContactUsModal from './ContactUsModal';
import styles from '../css/app.module.css';
import BlogDetail from "./BlogDetail";
import {blogs} from "../data/blogs";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <BrowserRouter>
      <Navbar isModalOpen={isModalOpen} openModal={openModal} />
      <Header openModal={openModal} />
      <ElipseBackground />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/service" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog/:id" element={<BlogDetail blogs={blogs} />} />
      </Routes>

      <Footer openModal={openModal} />
      <ContactUsModal isOpen={isModalOpen} onClose={closeModal} />
    </BrowserRouter>
  );
}

export default App;
