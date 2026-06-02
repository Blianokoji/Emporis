import React from "react";
import SpotlightCard from "./SpotlightCard";
import edgeImg from "../assets/emporis_edge.webp";

const Edge: React.FC = () => {
  return (
    <section id="edge" className="relative fade-up min-h-[80vh]" style={{ background: '#F2F0EB' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-6rem)]">
        {/* Left half: Deep navy spotlight content */}
        <div className="relative h-full">
          <SpotlightCard
            className="h-full w-full flex items-center p-8 md:p-16 rounded-none"
            style={{
              background: '#0A1628',
              border: 'none',
              color: '#F2F0EB',
            }}
            spotlightColor="rgba(200, 169, 110, 0.15)"
          >
            <div className="relative z-10 max-w-2xl">
              {/* Category flag */}
              <div className="mb-4 flex items-center gap-3">
                <div style={{ width: '24px', height: '1px', background: '#C8A96E' }} />
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.65rem',
                    fontWeight: 500,
                    letterSpacing: '0.2em',
                    color: '#C8A96E',
                    textTransform: 'uppercase',
                  }}
                >
                  Corporate Distinction
                </span>
              </div>

              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
                  fontWeight: 300,
                  lineHeight: 1.1,
                  color: '#F2F0EB',
                  marginBottom: '1.5rem',
                }}
              >
                The Emporis Edge
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  lineHeight: 1.8,
                  fontWeight: 300,
                  color: 'rgba(242, 240, 235, 0.75)',
                  marginBottom: '1rem',
                }}
              >
                At Emporis, we don’t just manufacture formulations — we build long-term trust through absolute scientific integrity, transparency, and ethical standards.
              </p>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  lineHeight: 1.8,
                  fontWeight: 300,
                  color: 'rgba(242, 240, 235, 0.6)',
                  marginBottom: '2rem',
                }}
              >
                We are steadily expanding our portfolio across therapeutic areas, focusing on nutritional, gastrointestinal, and general wellness segments to serve every phase of care.
              </p>

              <ul
                className="space-y-3"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  fontWeight: 400,
                  color: '#C8A96E',
                  letterSpacing: '0.04em',
                }}
              >
                <li className="flex items-center gap-3">
                  <span style={{ fontSize: '0.6rem' }}>●</span>
                  <span>Developed under certified WHO-GMP standard facilities</span>
                </li>
                <li className="flex items-center gap-3">
                  <span style={{ fontSize: '0.6rem' }}>●</span>
                  <span>Rigorous batch validation ensuring maximum purity</span>
                </li>
                <li className="flex items-center gap-3">
                  <span style={{ fontSize: '0.6rem' }}>●</span>
                  <span>Consistent therapeutic release profiling</span>
                </li>
                <li className="flex items-center gap-3">
                  <span style={{ fontSize: '0.6rem' }}>●</span>
                  <span>Uncompromised bio-equivalence value</span>
                </li>
              </ul>
            </div>
          </SpotlightCard>
        </div>

        {/* Right half: Full-bleed image */}
        <div className="relative h-[320px] md:h-auto overflow-hidden">
          <img
            src={edgeImg}
            alt="Emporis Edge illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Edge;
