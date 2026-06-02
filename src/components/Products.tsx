import React, { useRef, useState, useEffect } from 'react';
import embiotinImg from '../assets/embiotin.webp';
import emflatImg from '../assets/emflat.webp';
import emproteinImg from '../assets/emprotein.webp';

interface Product {
  index: string;
  name: string;
  tagline: string;
  desc: string;
  image: string;
  comingSoon?: boolean;
  anchor?: string;
  category: string;
}

const products: Product[] = [
  {
    index: '01',
    name: 'Embiotin™',
    tagline: 'Advanced Hair Growth Supplement by Emporis',
    desc: 'Emporis Embiotin™ is a premium clinical biotin formulation fortified with essential vitamins and minerals. Embiotin™ strengthens hair from the root, enhances shine, and promotes healthy regrowth — helping restore confidence naturally.',
    image: embiotinImg,
    anchor: 'embiotin',
    category: 'Nutraceutical',
  },
  {
    index: '02',
    name: 'Emflat™',
    tagline: 'Simethicone Syrup for Abdominal Discomfort by Emporis',
    desc: 'Emporis Emflat™ provides fast, gentle relief from gas, bloating, and abdominal discomfort. Its premium simethicone-based formula is safe for all age groups, ensuring effective digestive comfort for the whole family.',
    image: emflatImg,
    comingSoon: true,
    category: 'Gastrointestinal',
  },
  {
    index: '03',
    name: 'Emprotino™',
    tagline: 'Advanced Whey Protein Formula by Emporis',
    desc: 'Emporis Emprotino™ is a scientifically developed whey protein supplement designed to meet increased protein requirements in special populations.',
    image: emproteinImg,
    comingSoon: true,
    category: 'Nutritional',
  },
];

// Intersection observer hook for scroll-triggered reveals
function useInView(threshold = 0.15) {
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

interface ProductRowProps {
  product: Product;
  flip: boolean;
  isLast: boolean;
}

const ProductRow: React.FC<ProductRowProps> = ({ product, flip, isLast }) => {
  const { ref, inView } = useInView(0.12);
  const [hovered, setHovered] = useState(false);

  const imageCol = (
    <div
      className="relative overflow-hidden w-full h-[320px] sm:h-[400px] md:h-full"
      style={{ minHeight: '320px' }}
    >
      {/* Product image */}
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out"
        style={{ transform: hovered ? 'scale(1.04)' : 'scale(1)' }}
      >
        <img
          src={product.image}
          alt={`Emporis ${product.name} - ${product.tagline}`}
          className="w-full h-full object-cover object-center"
          style={{ filter: product.comingSoon ? 'saturate(0.6) brightness(0.85)' : 'none' }}
        />
      </div>

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: flip
            ? 'linear-gradient(to left, rgba(10,22,40,0.55) 0%, transparent 60%)'
            : 'linear-gradient(to right, rgba(10,22,40,0.55) 0%, transparent 60%)',
        }}
      />

      {/* Product index watermark */}
      <div
        className="absolute select-none pointer-events-none"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(4rem, 12vw, 9rem)',
          fontWeight: 300,
          lineHeight: 1,
          color: 'rgba(200,169,110,0.18)',
          bottom: '-0.15em',
          right: flip ? 'auto' : '-0.05em',
          left: flip ? '-0.05em' : 'auto',
          letterSpacing: '-0.04em',
        }}
      >
        {product.index}
      </div>

      {/* Coming soon badge */}
      {product.comingSoon && (
        <div
          className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5"
          style={{
            border: '1px solid rgba(200,169,110,0.5)',
            background: 'rgba(10,22,40,0.7)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.65rem',
              fontWeight: 500,
              letterSpacing: '0.14em',
              color: '#C8A96E',
              textTransform: 'uppercase',
            }}
          >
            Launching Soon
          </span>
        </div>
      )}
    </div>
  );

  const contentCol = (
    <div
      className="flex flex-col justify-center px-6 md:px-14 lg:px-16 py-10 md:py-14 w-full"
      style={{
        background: '#0A1628',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Category tag */}
      <div
        className="mb-5 flex items-center gap-3"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(16px)',
          transition: 'opacity 0.55s ease 0.1s, transform 0.55s ease 0.1s',
        }}
      >
        <div style={{ width: '28px', height: '1px', background: '#C8A96E', flexShrink: 0 }} />
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
          Emporis &bull; {product.category}
        </span>
      </div>

      {/* Product name */}
      <h3
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.4rem, 4vw, 3.5rem)',
          fontWeight: 400,
          lineHeight: 1.05,
          letterSpacing: '-0.01em',
          color: '#F2F0EB',
          marginBottom: '0.6rem',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s',
        }}
      >
        {product.name}
      </h3>

      {/* Tagline */}
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.8rem',
          fontWeight: 400,
          letterSpacing: '0.06em',
          color: '#8A9BAD',
          textTransform: 'uppercase',
          marginBottom: '1.5rem',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease 0.28s, transform 0.6s ease 0.28s',
        }}
      >
        {product.tagline}
      </p>

      {/* Divider */}
      <div
        style={{
          width: '100%',
          height: '1px',
          background: 'rgba(255,255,255,0.08)',
          marginBottom: '1.5rem',
          opacity: inView ? 1 : 0,
          transition: 'opacity 0.6s ease 0.35s',
        }}
      />

      {/* Description */}
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.9375rem',
          fontWeight: 300,
          lineHeight: 1.75,
          color: 'rgba(226,201,154,0.7)',
          maxWidth: '42ch',
          marginBottom: '2rem',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(16px)',
          transition: 'opacity 0.6s ease 0.38s, transform 0.6s ease 0.38s',
        }}
      >
        {product.desc}
      </p>

      {/* CTA */}
      <div
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(12px)',
          transition: 'opacity 0.55s ease 0.48s, transform 0.55s ease 0.48s',
        }}
      >
        {!product.comingSoon && product.anchor ? (
          <a
            href={`#${product.anchor}`}
            className="inline-flex items-center gap-3 group"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.78rem',
              fontWeight: 500,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#C8A96E',
              textDecoration: 'none',
            }}
          >
            <span>View Formula</span>
            <span
              className="relative overflow-hidden"
              style={{
                display: 'inline-block',
                width: '36px',
                height: '1px',
                background: '#C8A96E',
                transition: 'width 0.3s ease',
              }}
            >
              {/* Arrow head */}
              <svg
                style={{
                  position: 'absolute',
                  right: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '6px',
                  height: '10px',
                }}
                viewBox="0 0 6 10"
                fill="none"
              >
                <polyline points="1,1 5,5 1,9" stroke="#C8A96E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        ) : product.comingSoon ? (
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.78rem',
              fontWeight: 400,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(138,155,173,0.5)',
            }}
          >
            In Development
          </span>
        ) : null}
      </div>
    </div>
  );

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2"
      style={{
        borderBottom: isLast ? 'none' : '1px solid rgba(200,169,110,0.1)',
        opacity: inView ? 1 : 0,
        transition: 'opacity 0.4s ease',
      }}
    >
      <div className={`w-full order-1 ${flip ? 'md:order-2' : 'md:order-1'}`}>
        {imageCol}
      </div>
      <div className={`w-full order-2 ${flip ? 'md:order-1' : 'md:order-2'}`}>
        {contentCol}
      </div>
    </div>
  );
};

const Products: React.FC = () => {
  const { ref: headRef, inView: headInView } = useInView(0.3);

  return (
    <section id="products" style={{ background: '#0A1628' }}>
      {/* Editorial header band */}
      <div
        ref={headRef}
        className="max-w-7xl mx-auto px-6 md:px-10"
        style={{
          paddingTop: 'clamp(3.5rem, 8vw, 6rem)',
          paddingBottom: 'clamp(2.5rem, 5vw, 4rem)',
          borderBottom: '1px solid rgba(200,169,110,0.15)',
        }}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          {/* Left: eyebrow + title */}
          <div>
            <div
              className="flex items-center gap-3 mb-4"
              style={{
                opacity: headInView ? 1 : 0,
                transform: headInView ? 'translateX(0)' : 'translateX(-20px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease',
              }}
            >
              <div style={{ width: '28px', height: '1px', background: '#C8A96E' }} />
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: '#C8A96E',
                  fontWeight: 500,
                }}
              >
                Product Portfolio
              </span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.8rem, 6vw, 5rem)',
                fontWeight: 300,
                lineHeight: 1.0,
                letterSpacing: '-0.02em',
                color: '#F2F0EB',
                opacity: headInView ? 1 : 0,
                transform: headInView ? 'translateY(0)' : 'translateY(24px)',
                transition: 'opacity 0.65s ease 0.1s, transform 0.65s ease 0.1s',
              }}
            >
              Our Products
            </h2>
          </div>

          {/* Right: count indicator */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8rem',
              letterSpacing: '0.1em',
              color: '#8A9BAD',
              textTransform: 'uppercase',
              paddingBottom: '0.2rem',
              opacity: headInView ? 1 : 0,
              transition: 'opacity 0.6s ease 0.25s',
            }}
          >
            {products.length} Formulations
          </p>
        </div>
      </div>

      {/* Product rows — asymmetric zig-zag */}
      {products.map((p, i) => (
        <ProductRow
          key={p.index}
          product={p}
          flip={i % 2 !== 0}
          isLast={i === products.length - 1}
        />
      ))}
    </section>
  );
};

export default Products;
