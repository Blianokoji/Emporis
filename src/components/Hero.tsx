import React from "react";
import labImg from "../assets/lab_img.webp";

const Hero: React.FC = () => {
  const handleNavigateProducts = () => {
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center text-white"
      style={{
        backgroundImage: `url(${labImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* dark overlay with navy tint for readable text */}
      <div className="absolute inset-0 bg-[#0A1628]/60" aria-hidden="true" />
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-24">
          <div className="max-w-3xl pl-2 md:pl-4">
            <h1
              className="fade-up text-raise pb-2 md:pb-3"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 6.5vw, 4.8rem)',
                fontWeight: 300,
                lineHeight: 1.1,
                color: '#F2F0EB',
              }}
            >
              Redefining Wellness.<br />
              <span style={{ color: '#C8A96E' }}>Restoring Trust.</span>
            </h1>

            <p
              className="fade-up text-raise mt-6"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
                fontWeight: 300,
                lineHeight: 1.8,
                color: 'rgba(242, 240, 235, 0.75)',
                maxWidth: '48ch',
              }}
            >
              We are driven by science and compassion, committed to building a healthier tomorrow through innovation, integrity, and excellence.
            </p>

            <button
              onClick={handleNavigateProducts}
              className="group mt-10 inline-flex items-center gap-3 px-8 py-3.5 transition-all duration-300 hover:shadow-lg focus:outline-none"
              style={{
                background: '#C8A96E',
                color: '#0A1628',
                fontFamily: 'var(--font-body)',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                border: '1px solid #C8A96E',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#C8A96E';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#C8A96E';
                e.currentTarget.style.color = '#0A1628';
              }}
            >
              <span>Explore Our Products</span>
              <svg
                className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1.5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
