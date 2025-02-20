import React, { useEffect } from 'react';
import './home.css'; // Import the CSS file for styling
// import bgImage from '../assets/bg.jpg'; // Update the path as needed

const Home = () => {
  // Add a scroll animation effect for the description
  useEffect(() => {
    const description = document.querySelector('.description');
    const instructions = document.querySelector('.instructions');
    const handleScroll = () => {
      if (description.getBoundingClientRect().top < window.innerHeight * 0.8) {
        description.style.opacity = '1';
        description.style.transform = 'translateY(0)';
      }
      if (instructions.getBoundingClientRect().top < window.innerHeight * 0.8) {
        instructions.style.opacity = '1';
        instructions.style.transform = 'translateY(0)';
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openSnapLens = (e) => {
    e.preventDefault();
    window.location.href = 'https://lens.snap.com/experience/95db1c02-c52c-4010-a3b3-2afbd1644d26';
  };

  return (
    <div className="App">
      {/* Background Image */}
      {/* <div className="background-container">
        <img src={bgImage} alt="" className="background-image" />
      </div> */}

      {/* Marquee Section */}
      <div className="marquee" aria-label="Scrolling message about AR experience">
        🚀 Experience the Future of Art | AR-Powered Tourism Begins Here 🚀
      </div>
      
      {/* Hero Section */}
      <div className="hero">
        <div className="flex flex-col items-center justify-center gap-6">
          <h1 className="text-6xl font-montserrat animate-scrollUp leading-tight">
            Welcome to Jehangir Art Gallery Mumbai
          </h1>
          <h2 className="text-4xl font-montserrat animate-scrollUpDelayed">
            Step Into the Future of Art with AR
          </h2>
        </div>
      </div>

      {/* Description Section */}
      <div className="description">
        <p>
          Welcome to the future of tourism! Explore Jehangir Art Gallery like never before with
          cutting-edge Augmented Reality. Witness paintings come to life, immerse yourself in the
          artist's vision, and interact with history in a whole new dimension.
        </p>
        <p>
          Revolutionize your experience—step beyond reality and into the world of digital art.
        </p>
      </div>

      {/* Instructions Section */}
      <div className="instructions">
        <h2>How to Use the AR Experience</h2>
        <ol>
          {/* <li><strong>Scan the QR Code:</strong> Use Google Lens or any QR code scanner to scan the QR code.</li> */}
          {/* <li><strong>Scroll Down to Web:</strong> After scanning, scroll down to the web section.</li> */}
          <li><strong>Click on "Enter AR Experience":</strong> Tap the button to launch the AR experience.</li>
          <li><strong>Select the Suitable Camera:</strong> Choose the camera you want to use for scanning(front, rear).</li>
          <li><strong>Point Your Camera Towards the Art:</strong> Aim your camera at the artwork to activate the AR experience.</li>
          <li><strong>Enjoy the AR Experience:</strong> Interact with the augmented reality elements and enjoy!</li>
        </ol>
      </div>

      {/* Call-to-Action Button */}
      <a href="#" onClick={openSnapLens} className="cta-button" aria-label="Enter AR Experience">
        Enter AR Experience
      </a>
    </div>
  );
};

export default Home;