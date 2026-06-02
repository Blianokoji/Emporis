import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import type { ReactNode } from 'react';

interface GridMotionProps {
  items?: string[];
  gradientColor?: string;
  children?: ReactNode;
}

const GridMotion: React.FC<GridMotionProps> = ({ items = [], gradientColor = 'rgba(0,0,0,0.15)', children }) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mouseXRef = useRef<number>(typeof window !== 'undefined' ? window.innerWidth / 2 : 0);
  const scrollYRef = useRef<number>(typeof window !== 'undefined' ? window.scrollY : 0);

  const totalItems = 28;
  const defaultItems = Array.from({ length: totalItems }, (_, index) => `Item ${index + 1}`);
  const combinedItems = items.length > 0 ? items.slice(0, totalItems) : defaultItems;

  useEffect(() => {
    gsap.ticker.lagSmoothing(0);

    const handleMouseMove = (e: MouseEvent): void => {
      mouseXRef.current = e.clientX;
    };
    const handleScroll = (): void => {
      scrollYRef.current = window.scrollY;
    };

    const updateMotion = (): void => {
      const maxMoveAmount = 300; // horizontal travel based on mouse
      const maxScrollXMove = 200; // additional horizontal travel based on scroll
      const baseDuration = 0.8;
      const inertiaFactors = [0.6, 0.4, 0.3, 0.2];

      rowRefs.current.forEach((row, index) => {
        if (row) {
          const direction = index % 2 === 0 ? 1 : -1;
          const mouseXNorm = window.innerWidth ? mouseXRef.current / window.innerWidth : 0.5;
          const moveAmount = (mouseXNorm * maxMoveAmount - maxMoveAmount / 2) * direction;

          // scroll normalized across page height (use for horizontal parallax too)
          const scrollDen = Math.max(1, (document.documentElement.scrollHeight - window.innerHeight));
          const scrollNorm = scrollDen > 0 ? scrollYRef.current / scrollDen : 0;
          // per-row horizontal parallax: alternate directions and scale slightly by row
          const rowScale = 0.6 + (index % 4) * 0.15; // 0.6, 0.75, 0.9, 1.05
          const scrollMoveX = ((scrollNorm - 0.5) * 2) * maxScrollXMove * direction * rowScale;

          gsap.to(row, {
            x: moveAmount + scrollMoveX,
            y: 0,
            duration: baseDuration + inertiaFactors[index % inertiaFactors.length],
            ease: 'power3.out',
            overwrite: 'auto'
          });
        }
      });
    };

    const removeAnimationLoop = gsap.ticker.add(updateMotion);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      removeAnimationLoop();
    };
  }, []);

  const isImage = (content: string): boolean => {
    return (
      content.startsWith('http') ||
      content.startsWith('data:') ||
      /\.(png|jpe?g|gif|webp|svg)$/i.test(content)
    );
  };

  return (
    <div ref={gridRef} className="relative w-full min-h-[80vh] overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="w-full h-full overflow-hidden relative flex items-center justify-center"
          style={{
            background: `radial-gradient(circle, ${gradientColor} 0%, transparent 100%)`
          }}
        >
          <div className="absolute inset-0 pointer-events-none z-[1]" />
          <div className="gap-4 flex-none relative w-[150vw] h-[150vh] grid grid-rows-4 grid-cols-1 rotate-[-15deg] origin-center z-[0]">
            {Array.from({ length: 4 }, (_, rowIndex) => (
              <div
                key={rowIndex}
                className="grid gap-4 grid-cols-7"
                style={{ willChange: 'transform, filter' }}
                ref={el => {
                  if (el) rowRefs.current[rowIndex] = el;
                }}
              >
                {Array.from({ length: 7 }, (_, itemIndex) => {
                  const content = combinedItems[rowIndex * 7 + itemIndex];
                  return (
                    <div key={itemIndex} className="relative">
                      <div className="relative w-full h-full overflow-hidden rounded-[8px] bg-[#E8E4DC] flex items-center justify-center text-[#0A1628] font-normal text-[0.95rem]" style={{ border: '1px solid rgba(200,169,110,0.1)' }}>
                        {typeof content === 'string' && isImage(content) ? (
                          <div
                            className="w-full h-full bg-cover bg-center absolute top-0 left-0 opacity-40"
                            style={{ backgroundImage: `url(${content})` }}
                          />
                        ) : (
                          <div className="p-3 text-center z-[1] opacity-75" style={{ fontFamily: 'var(--font-body)', fontWeight: 400 }}>{content}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* semi-opaque overlay between the animated grid and the children to improve contrast */}
      <div className="absolute inset-0 z-0 bg-[#F2F0EB]/85 pointer-events-none" aria-hidden="true" />

      {/* Overlay content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GridMotion;
