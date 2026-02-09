import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ScrollToTop from '../components/ScrollToTop.jsx';
import { Toaster } from '../components/ui/toaster';

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans antialiased">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default MainLayout;