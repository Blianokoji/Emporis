import React, { useRef, useState, useEffect } from 'react';
import embiotin2 from '../assets/embiotin_2.webp';

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

interface IngredientRow {
  name: string;
  dosage: string;
  role: string;
}

const ingredients: IngredientRow[] = [
  { name: 'Calcium Pantothenate', dosage: '100 mg', role: 'The Follicle Nourisher' },
  { name: 'N-Acetylcysteine (NAC)', dosage: '50 mg', role: 'The Cellular Guardian' },
  { name: 'Zinc Oxide (Elemental Zinc)', dosage: '22.5 mg', role: 'Growth & Repair Catalyst' },
  { name: 'Biotin', dosage: '10 mg / 10,000 mcg', role: 'The Keratin Architect' },
  { name: 'Cupric Oxide (Elemental Copper)', dosage: '3 mg', role: 'Structural & Pigment Anchor' },
  { name: 'Sodium Selenite (Elemental Selenium)', dosage: '65 mcg', role: 'Scalp Health Regulator' },
];

const pillars = [
  {
    letter: 'B',
    word: 'Build',
    text: 'Providing the essential raw materials necessary for construction of strong keratin structures and rapid cellular division that fuels the Anagen growth phase.',
  },
  {
    letter: 'P',
    word: 'Protect',
    text: 'Deploying a powerful antioxidant shield to defend the delicate hair follicle cells from damaging effects of oxidative stress, preserving their function and extending the growth cycle.',
  },
  {
    letter: 'N',
    word: 'Nourish',
    text: 'Delivering key nutrients that support the health of the scalp, improve moisture retention within the hair shaft, and ensure optimal blood flow to the follicle.',
  },
];

const EmbiotinSection: React.FC = () => {
  const { ref: heroRef, inView: heroInView } = useInView(0.1);
  const { ref: pillarsRef, inView: pillarsInView } = useInView(0.1);
  const { ref: tableRef, inView: tableInView } = useInView(0.08);
  const { ref: purityRef, inView: purityInView } = useInView(0.15);

  return (
    <section
      id="embiotin"
      style={{
        background: '#F2F0EB',
        fontFamily: 'var(--font-body)',
      }}
    >
      {/* ─── HERO STRIP ─────────────────────────────────────────────────────── */}
      <div
        ref={heroRef}
        style={{
          background: '#0A1628',
          paddingTop: 'clamp(5rem, 10vw, 9rem)',
          paddingBottom: 0,
          overflow: 'hidden',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Eyebrow */}
          <div
            className="flex items-center gap-3 mb-6"
            style={{
              opacity: heroInView ? 1 : 0,
              transform: heroInView ? 'translateX(0)' : 'translateX(-18px)',
              transition: 'opacity 0.55s ease, transform 0.55s ease',
            }}
          >
            <div style={{ width: '28px', height: '1px', background: '#C8A96E' }} />
            <span
              style={{
                fontSize: '0.65rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#C8A96E',
                fontWeight: 500,
              }}
            >
              Product Spotlight
            </span>
          </div>

          {/* Big Title */}
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.6rem, 6.5vw, 5.5rem)',
              fontWeight: 300,
              lineHeight: 1.0,
              letterSpacing: '-0.02em',
              color: '#F2F0EB',
              maxWidth: '16ch',
              marginBottom: '0',
              opacity: heroInView ? 1 : 0,
              transform: heroInView ? 'translateY(0)' : 'translateY(28px)',
              transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
            }}
          >
            EMBIOTIN™
            <br />
            <em style={{ fontStyle: 'italic', fontWeight: 300, fontSize: '0.7em', color: '#C8A96E' }}>
              Six-Pillar Approach to Hair Revitalisation
            </em>
          </h2>

          {/* Image + intro text row */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-0 mt-10 md:mt-16 items-end"
          >
            {/* Product image — bleeds into cream below */}
            <div
              style={{
                opacity: heroInView ? 1 : 0,
                transform: heroInView ? 'translateY(0)' : 'translateY(40px)',
                transition: 'opacity 0.8s ease 0.25s, transform 0.8s ease 0.25s',
              }}
            >
              <img
                src={embiotin2}
                alt="Emporis Embiotin advanced clinical biotin formulation packaging"
                style={{
                  display: 'block',
                  width: '100%',
                  maxHeight: '420px',
                  objectFit: 'contain',
                  objectPosition: 'bottom center',
                }}
              />
            </div>

            {/* Intro copy — sits next to the image */}
            <div
              className="flex flex-col justify-end py-10 md:py-16 md:pl-12 lg:pl-20"
              style={{
                opacity: heroInView ? 1 : 0,
                transform: heroInView ? 'translateY(0)' : 'translateY(24px)',
                transition: 'opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s',
              }}
            >
              <p
                style={{
                  fontSize: '1rem',
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: 'rgba(226,201,154,0.75)',
                }}
              >
                In the landscape of hair health supplements, one ingredient has achieved unparalleled recognition: Biotin. Its reputation as a cornerstone nutrient for hair is well-deserved, forming an essential part of the keratin production process.
              </p>
              <p
                style={{
                  fontSize: '1rem',
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: 'rgba(226,201,154,0.55)',
                  marginTop: '1rem',
                }}
              >
                Developed by Emporis Health Care—alongside our specialized formulations like Emflat™ digestive syrup and Emprotino™ whey protein—Embiotin™ honours this legacy by offering a complete six-pillar approach to hair health.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ─── THREE PILLARS ───────────────────────────────────────────────────── */}
      <div
        ref={pillarsRef}
        style={{
          background: '#F2F0EB',
          paddingTop: 'clamp(4rem, 8vw, 7rem)',
          paddingBottom: 'clamp(4rem, 8vw, 7rem)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Section label */}
          <div
            className="flex items-center gap-3 mb-10"
            style={{
              opacity: pillarsInView ? 1 : 0,
              transition: 'opacity 0.5s ease',
            }}
          >
            <div style={{ width: '28px', height: '1px', background: '#C8A96E' }} />
            <span
              style={{
                fontSize: '0.65rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#C8A96E',
                fontWeight: 500,
              }}
            >
              The Embiotin Philosophy
            </span>
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
              color: '#0A1628',
              marginBottom: '3rem',
              maxWidth: '28ch',
              opacity: pillarsInView ? 1 : 0,
              transform: pillarsInView ? 'translateY(0)' : 'translateY(18px)',
              transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s',
            }}
          >
            Comprehensive care targeting three critical domains of hair vitality
          </h3>

          {/* Pillar list — stacked with dividers */}
          <div
            style={{
              borderTop: '1px solid rgba(10,22,40,0.12)',
            }}
          >
            {pillars.map((pillar, i) => (
              <div
                key={pillar.letter}
                style={{
                  padding: 'clamp(1.5rem, 4vw, 2.5rem) 0',
                  borderBottom: '1px solid rgba(10,22,40,0.12)',
                  opacity: pillarsInView ? 1 : 0,
                  transform: pillarsInView ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.6s ease ${0.15 + i * 0.12}s, transform 0.6s ease ${0.15 + i * 0.12}s`,
                }}
              >
                {/* Mobile: letter + label inline; Desktop: 3-col grid */}
                <div className="flex items-start gap-4 md:gap-8 mb-3 md:mb-0">
                  {/* Large ghost letter */}
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
                      fontWeight: 300,
                      lineHeight: 0.9,
                      color: 'rgba(200,169,110,0.22)',
                      letterSpacing: '-0.04em',
                      minWidth: '3rem',
                      userSelect: 'none',
                      flexShrink: 0,
                    }}
                  >
                    {pillar.letter}
                  </div>

                  <div className="flex-1">
                    {/* Label */}
                    <p
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.3rem, 2.5vw, 1.9rem)',
                        fontWeight: 500,
                        letterSpacing: '0.01em',
                        color: '#0A1628',
                        marginBottom: '0.4rem',
                      }}
                    >
                      {pillar.word}
                    </p>
                    <div style={{ width: '24px', height: '1px', background: '#C8A96E', marginBottom: '0.75rem' }} />

                    {/* Description — inline on mobile, no separate column */}
                    <p
                      style={{
                        fontSize: '0.9375rem',
                        fontWeight: 300,
                        lineHeight: 1.75,
                        color: '#3D5068',
                      }}
                    >
                      {pillar.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── FORMULA TABLE ───────────────────────────────────────────────────── */}
      <div
        ref={tableRef}
        style={{
          background: '#0A1628',
          paddingTop: 'clamp(4rem, 8vw, 7rem)',
          paddingBottom: 'clamp(4rem, 8vw, 7rem)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Header */}
          <div
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"
            style={{
              opacity: tableInView ? 1 : 0,
              transform: tableInView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
            }}
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div style={{ width: '28px', height: '1px', background: '#C8A96E' }} />
                <span
                  style={{
                    fontSize: '0.65rem',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: '#C8A96E',
                    fontWeight: 500,
                  }}
                >
                  Formula at a Glance
                </span>
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                  fontWeight: 400,
                  color: '#F2F0EB',
                  lineHeight: 1.05,
                }}
              >
                EMBIOTIN™
              </h3>
            </div>
            <p
              style={{
                fontSize: '0.8rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#8A9BAD',
              }}
            >
              {ingredients.length} Active Ingredients
            </p>
          </div>

          {/* Proper HTML table — horizontally scrollable on mobile */}
          <div style={{ overflowX: 'auto', borderTop: '1px solid rgba(200,169,110,0.2)' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                minWidth: '520px',
              }}
            >
              <thead>
                <tr
                  style={{
                    borderBottom: '1px solid rgba(200,169,110,0.18)',
                  }}
                >
                  <th
                    scope="col"
                    style={{
                      padding: '0.75rem 1rem 0.75rem 0',
                      textAlign: 'left',
                      fontSize: '0.62rem',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: '#8A9BAD',
                      fontWeight: 500,
                      width: '2.5rem',
                    }}
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    style={{
                      padding: '0.75rem 1.5rem 0.75rem 0',
                      textAlign: 'left',
                      fontSize: '0.62rem',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: '#8A9BAD',
                      fontWeight: 500,
                    }}
                  >
                    Ingredient
                  </th>
                  <th
                    scope="col"
                    style={{
                      padding: '0.75rem 1.5rem 0.75rem 0',
                      textAlign: 'left',
                      fontSize: '0.62rem',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: '#8A9BAD',
                      fontWeight: 500,
                    }}
                  >
                    Dosage per Tablet
                  </th>
                  <th
                    scope="col"
                    style={{
                      padding: '0.75rem 0',
                      textAlign: 'left',
                      fontSize: '0.62rem',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: '#8A9BAD',
                      fontWeight: 500,
                    }}
                  >
                    Primary Role in Hair Revitalisation
                  </th>
                </tr>
              </thead>
              <tbody>
                {ingredients.map((ing, i) => (
                  <tr
                    key={i}
                    style={{
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                      opacity: tableInView ? 1 : 0,
                      transform: tableInView ? 'translateY(0)' : 'translateY(10px)',
                      transition: `opacity 0.5s ease ${0.07 * i + 0.2}s, transform 0.5s ease ${0.07 * i + 0.2}s`,
                    }}
                  >
                    {/* Row number */}
                    <td
                      style={{
                        padding: 'clamp(0.85rem, 2vw, 1.2rem) 1rem clamp(0.85rem, 2vw, 1.2rem) 0',
                        verticalAlign: 'top',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '1rem',
                          fontWeight: 300,
                          color: 'rgba(200,169,110,0.35)',
                          userSelect: 'none',
                        }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </td>

                    {/* Ingredient name */}
                    <td
                      style={{
                        padding: 'clamp(0.85rem, 2vw, 1.2rem) 1.5rem clamp(0.85rem, 2vw, 1.2rem) 0',
                        verticalAlign: 'top',
                        fontSize: '0.9375rem',
                        fontWeight: 400,
                        color: '#F2F0EB',
                        lineHeight: 1.45,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {ing.name}
                    </td>

                    {/* Dosage — italic serif accent */}
                    <td
                      style={{
                        padding: 'clamp(0.85rem, 2vw, 1.2rem) 1.5rem clamp(0.85rem, 2vw, 1.2rem) 0',
                        verticalAlign: 'top',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '1.05rem',
                          fontWeight: 400,
                          fontStyle: 'italic',
                          color: '#C8A96E',
                          lineHeight: 1.3,
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {ing.dosage}
                      </span>
                    </td>

                    {/* Role */}
                    <td
                      style={{
                        padding: 'clamp(0.85rem, 2vw, 1.2rem) 0',
                        verticalAlign: 'top',
                        fontSize: '0.875rem',
                        fontWeight: 300,
                        color: '#8A9BAD',
                        lineHeight: 1.5,
                      }}
                    >
                      {ing.role}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ─── PURITY STATEMENT ────────────────────────────────────────────────── */}
      <div
        ref={purityRef}
        style={{
          background: '#F2F0EB',
          paddingTop: 'clamp(4rem, 8vw, 7rem)',
          paddingBottom: 'clamp(4rem, 8vw, 7rem)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-16 items-start">
            {/* Label column */}
            <div
              style={{
                opacity: purityInView ? 1 : 0,
                transition: 'opacity 0.6s ease',
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div style={{ width: '28px', height: '1px', background: '#C8A96E' }} />
                <span
                  style={{
                    fontSize: '0.65rem',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: '#C8A96E',
                    fontWeight: 500,
                  }}
                >
                  Purity & Potency
                </span>
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.7rem, 3vw, 2.5rem)',
                  fontWeight: 400,
                  lineHeight: 1.1,
                  color: '#0A1628',
                }}
              >
                The Embiotin Standard
              </h3>
            </div>

            {/* Quote-style text */}
            <div
              style={{
                opacity: purityInView ? 1 : 0,
                transform: purityInView ? 'translateY(0)' : 'translateY(18px)',
                transition: 'opacity 0.65s ease 0.15s, transform 0.65s ease 0.15s',
              }}
            >
              <div
                style={{
                  width: '1px',
                  height: '3rem',
                  background: 'linear-gradient(to bottom, #C8A96E, transparent)',
                  marginBottom: '1.5rem',
                }}
              />
              <blockquote
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.1rem, 2.2vw, 1.45rem)',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  lineHeight: 1.7,
                  color: '#0A1628',
                  borderLeft: 'none',
                  padding: 0,
                  margin: 0,
                  maxWidth: '60ch',
                }}
              >
                The Emporis Embiotin™ standard dictates the use of only high-grade, premium raw materials to ensure maximum bioavailability and effectiveness. Like all clinical solutions by Emporis Health Care—including Emflat™ and Emprotino™—Embiotin™ contains precisely the ingredients listed on the label, in the exact therapeutic dosages specified in the formulation, without deviation.
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmbiotinSection;
