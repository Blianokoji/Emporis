import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import logo from "../assets/emporis_logo.webp";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="fade-up p-8 md:p-14" style={{ background: '#F2F0EB' }}>
      <div className="relative max-w-7xl mx-auto">
        {/* Top Row: Logo (left) and Company Name (right) */}
        <div className="flex items-center justify-between gap-6 pb-6" style={{ borderBottom: '1px solid rgba(10,22,40,0.08)' }}>
          <img src={logo} alt="Emporis logo" className="w-12 h-12 object-contain" />
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
              fontWeight: 400,
              color: '#0A1628',
              letterSpacing: '0.02em',
            }}
          >
            Emporis Health Care
          </div>
        </div>

        {/* Main content: address + email (single column on mobile, left column on md) */}
        <div className="mt-8 max-w-3xl">
          <h3
            className="mb-6"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              fontWeight: 300,
              color: '#0A1628',
            }}
          >
            Connect With Us
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#C8A96E',
                }}
              >
                Registered Address
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  fontWeight: 300,
                  lineHeight: 1.6,
                  color: '#3D5068',
                }}
              >
                Door No: 32/422, Rajeev Nagar Road,<br />
                Puthupallypuram, Edappally,<br />
                Kochi - 682024, Kerala, India
              </p>
            </div>

            <div className="space-y-2">
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#C8A96E',
                }}
              >
                General Inquiry
              </div>
              <p>
                <a
                  href="mailto:info@emporishealthcare.com"
                  className="transition-colors duration-300"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1.05rem',
                    fontWeight: 400,
                    color: '#0A1628',
                    textDecoration: 'underline',
                    textUnderlineOffset: '4px',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#C8A96E'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#0A1628'}
                >
                  info@emporishealthcare.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Follow Us: centered on mobile, bottom-right on md+ */}
        <div className="w-full mt-10 md:mt-0 flex justify-center md:justify-end md:absolute md:bottom-0 md:right-0">
          <div className="flex items-center gap-4">
            <span
              className="hidden md:inline text-xs font-semibold uppercase tracking-widest text-[#8A9BAD]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Follow
            </span>
            <a
              href="#"
              aria-label="LinkedIn"
              className="transition-colors duration-300 text-xl"
              style={{ color: '#0A1628' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#C8A96E'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#0A1628'}
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="transition-colors duration-300 text-xl"
              style={{ color: '#0A1628' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#C8A96E'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#0A1628'}
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="transition-colors duration-300 text-xl"
              style={{ color: '#0A1628' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#C8A96E'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#0A1628'}
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
