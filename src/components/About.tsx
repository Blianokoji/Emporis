import React from "react";
import GridMotion from "./GridMotion";
import img1 from "../assets/grid_img_1.webp";
import img2 from "../assets/grid_img_2.webp";
import img3 from "../assets/grid_img_3.webp";

const About: React.FC = () => {
  return (
    <section id="about" className="relative fade-up text-center" style={{ background: '#F2F0EB' }}>
      <GridMotion
        items={[
          img1,
          img2,
          img3,
          "Quality",
          "Care",
          "Innovation",
          img2,
          img3,
          img1,
          "Integrity",
          "Excellence",
          img3,
          img2,
          img1,
          "Access",
          "Trust",
          img1,
          img2,
          img3,
          "Health",
          "Science",
          img2,
          img3,
          img1,
          "Safety",
          "Affordability",
          img1,
          img2,
          img3,
        ]}
        gradientColor="rgba(200,169,110,0.15)"
      >
        <div className="relative z-10 mx-auto px-6 py-20 max-w-6xl space-y-12">
          <div className="mb-12">
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 300,
                color: '#0A1628',
                letterSpacing: '-0.01em',
              }}
            >
              Where Quality Meets Care
            </h2>
            <p
              className="max-w-3xl mx-auto mt-4 leading-relaxed"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                fontWeight: 300,
                color: '#3D5068',
              }}
            >
              Emporis Health Care — a pharmaceutical company established with a vision to deliver high-quality, cost-effective, and accessible healthcare products that enhance everyday wellness.
            </p>
          </div>

          {/* Feature cards with custom warm glassmorphic styling */}
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {[
              {
                title: "Uncompromising Quality",
                desc: "Every formulation is manufactured under stringent quality standards and scientific precision.",
              },
              {
                title: "Cost-Effective Access",
                desc: "We believe healthcare should be equitable and affordable for all.",
              },
              {
                title: "Continuous Innovation",
                desc: "Our R&D-driven approach ensures modern, safe, and effective solutions for evolving health needs.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-left p-8 rounded-2xl border"
                style={{
                  background: 'rgba(232, 228, 220, 0.45)',
                  borderColor: 'rgba(10, 22, 40, 0.08)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                }}
              >
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.4rem',
                    fontWeight: 500,
                    color: '#0A1628',
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    lineHeight: 1.6,
                    color: '#3D5068',
                    fontWeight: 300,
                  }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Vision & Mission with same background and low-opacity glass */}
          <div className="grid md:grid-cols-2 gap-8 items-start mt-6">
            <div
              className="text-left p-8 rounded-2xl border"
              style={{
                background: 'rgba(232, 228, 220, 0.45)',
                borderColor: 'rgba(10, 22, 40, 0.08)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
              }}
            >
              <h2
                className="mb-4 pb-2"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.8rem',
                  fontWeight: 400,
                  color: '#0A1628',
                  borderBottom: '1px solid rgba(200, 169, 110, 0.3)',
                }}
              >
                Vision
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9375rem',
                  lineHeight: 1.75,
                  color: '#3D5068',
                  fontWeight: 300,
                }}
              >
                To be a trusted name in global healthcare, known for unmatched quality, innovation, and ethical excellence — improving lives with accessible and effective wellness products. We aim to set new benchmarks in safety and transparency, foster enduring partnerships with clinicians and communities, and continually invest in research to bring science-backed solutions to everyday health. Guided by empathy and integrity, our vision is a healthier world where better outcomes are within reach for everyone.
              </p>
            </div>

            <div
              className="text-left p-8 rounded-2xl border animate-fade-in"
              style={{
                background: 'rgba(232, 228, 220, 0.45)',
                borderColor: 'rgba(10, 22, 40, 0.08)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
              }}
            >
              <h2
                className="mb-4 pb-2"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.8rem',
                  fontWeight: 400,
                  color: '#0A1628',
                  borderBottom: '1px solid rgba(200, 169, 110, 0.3)',
                }}
              >
                Mission
              </h2>
              <ul
                className="list-disc pl-5 space-y-3"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9375rem',
                  lineHeight: 1.7,
                  color: '#3D5068',
                  fontWeight: 300,
                }}
              >
                <li>Develop and deliver scientifically proven, safe, and effective healthcare solutions.</li>
                <li>Bridge the gap between quality and affordability in pharma and nutraceutical markets.</li>
                <li>Empower individuals and healthcare professionals through trust and transparency.</li>
                <li>Expand globally through innovation and sustainable partnerships.</li>
              </ul>
            </div>
          </div>
        </div>
      </GridMotion>
    </section>
  );
};

export default About;
