import React, { useEffect } from 'react';
import './home.css'; // Import the CSS file for styling

const Home = () => {
  // Add a scroll animation effect for the description
  useEffect(() => {
    const description = document.querySelector('.description');
    const handleScroll = () => {
      if (description.getBoundingClientRect().top < window.innerHeight * 0.8) {
        description.style.opacity = '1';
        description.style.transform = 'translateY(0)';
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      {/* Marquee Section */}
      <div className="marquee" aria-label="Scrolling message about AR experience">
        🚀 Experience the Future of Art | AR-Powered Tourism Begins Here 🚀
      </div>

      {/* Hero Section */}
      <div className="hero">
        <h1>Step Into the Future of Art with AR</h1>
      </div>

      {/* Description Section */}
      <div className="description">
        <p>
          Welcome to the future of tourism! Explore Jehangir Art Gallery like never before with
          cutting-edge Augmented Reality. Witness paintings come to life, immerse yourself in the
          artist’s vision, and interact with history in a whole new dimension.
        </p>
        <p>
          Revolutionize your experience—step beyond reality and into the world of digital art.
        </p>
      </div>

      {/* Call-to-Action Button */}
      <a href="camera" className="cta-button" aria-label="Enter AR Experience">
        Enter AR Experience
      </a>
    </div>
  );
};

export default Home;