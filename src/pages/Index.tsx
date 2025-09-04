import React from 'react';
import Navigation from '../components/ui/navigation';
import HeroSection from '../components/HeroSection';
import ImageGenerator from '../components/ImageGenerator';
import ImageGallery from '../components/ImageGallery';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ImageGenerator />
      <ImageGallery />
      <Footer />
    </div>
  );
};

export default Index;