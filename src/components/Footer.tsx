import React from "react";

const Footer: React.FC = () => {
  return (
    <footer style={{ background: '#0A1628', borderTop: '1px solid rgba(200, 169, 110, 0.15)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
        {/* Main Footer Layout */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
                fontWeight: 300,
                color: '#F2F0EB',
                letterSpacing: '0.01em',
                marginBottom: '1rem',
              }}
            >
              Emporis Health Care
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                fontWeight: 300,
                lineHeight: 1.6,
                color: 'rgba(242, 240, 235, 0.65)',
                maxWidth: '38ch',
              }}
            >
              Advancing modern wellness through clinical precision, scientific integrity, and uncompromised care.
            </p>
          </div>

          {/* Quick links & Back to Top */}
          <div className="flex flex-wrap items-center gap-8 md:gap-12">
            <ul className="flex gap-6">
              {["Home", "Products", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="transition-colors duration-300 text-xs tracking-widest uppercase"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 500,
                      color: 'rgba(242, 240, 235, 0.65)',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#C8A96E'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(242, 240, 235, 0.65)'}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#home"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 focus:outline-none"
              style={{
                border: '1px solid rgba(200, 169, 110, 0.4)',
                background: 'transparent',
                color: '#C8A96E',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#C8A96E';
                e.currentTarget.style.color = '#0A1628';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#C8A96E';
              }}
              aria-label="Back to top"
              title="Back to top"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 5l-7 7m7-7l7 7m-7-7v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom divider and copyright */}
        <div
          className="mt-12 pt-8 flex flex-col sm:flex-row sm:justify-between items-center gap-4 text-xs"
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            fontFamily: 'var(--font-body)',
            fontWeight: 300,
            color: 'rgba(242, 240, 235, 0.4)',
          }}
        >
          <p>© {new Date().getFullYear()} Emporis Health Care. All rights reserved.</p>
          <p className="tracking-widest uppercase text-[0.6rem] text-[rgba(200,169,110,0.5)]">Luxury Clinical formulation</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
