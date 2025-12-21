import React, { useState } from "react";
import { Navbar } from "./Navbar";
import './index.css'
function Home() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <>
      



      {/* Banner */}
      <section className="banner">
        <div className="banner-content">
          <h1>Welcome to My Website</h1>
          <p>Building beautiful experiences with React & Vite</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      {/* About */}
      <section className="about">
        <h2>About Us</h2>
        <p>
          We craft modern, responsive, and lightning-fast web applications 
          using cutting-edge technologies like React and Vite. Our mission 
          is to deliver exceptional digital experiences.
        </p>
      </section>

      {/* Cards */}
      <section className="cards">
        <h2>Our Services</h2>
        <div className="card-container">
          <div 
            className="card"
            onMouseEnter={() => setActiveCard(0)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div className="card-icon">⚛️</div>
            <h3>React</h3>
            <p>Component-based UI development with modern React patterns and hooks</p>
          </div>
          <div 
            className="card"
            onMouseEnter={() => setActiveCard(1)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div className="card-icon">⚡</div>
            <h3>Vite</h3>
            <p>Lightning-fast build tool with instant hot module replacement</p>
          </div>
          <div 
            className="card"
            onMouseEnter={() => setActiveCard(2)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div className="card-icon">🎨</div>
            <h3>UI Design</h3>
            <p>Beautiful, accessible, and responsive user interface design</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 All Rights Reserved | Gajapathi K</p>
      </footer>
    </>
  );
}

export default Home;