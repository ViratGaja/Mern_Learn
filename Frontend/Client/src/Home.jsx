import React, { useState } from "react";
import { Navbar } from "./Navbar";
import './index.css'
import { useEffect } from "react";
function Home() {
  const [activeCard, setActiveCard] = useState(null);
  const [cards, setCards] = useState([])
  const [error, setError] = useState(null);

useEffect(()=>{
  fetchCards()
})
  const fetchCards = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/forms')
      const result = await response.json()
      if (result.success) {
        setCards(result.data)
      }
      else {
        setError("Failed to fetch data")
      }

    }
    catch (err) {
      console.log(err)
    }
  }

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
          {cards.map((card, index) => (
            <div key={card._id} className="card"
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}>
                <div className="card-icon">
                  {index === 0 ? '⚛️' : index === 1 ? '⚡' : '🎨'}
                </div>
                <h3>{card.title}</h3>
                <p>{card.paragraph}</p>
                   <span className="card-date">
              {new Date(card.createdAt).toLocaleDateString()}
            </span>
            </div>
          ))}
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