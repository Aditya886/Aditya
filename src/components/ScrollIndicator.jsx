import React, { useState, useEffect, useRef } from 'react';

export default function ScrollIndicator() {
  const thumbRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const isDraggingRef = useRef(false);
  const startYRef = useRef(0);
  const startScrollYRef = useRef(0);

  const ringSize = 28; // 28px diameter 3D circular hollow ring
  const padding = 12; // 12px padding from top and bottom

  useEffect(() => {
    let ticking = false;

    const updatePosition = () => {
      if (isDraggingRef.current || !thumbRef.current) return;
      const scrollY = window.scrollY;
      const docHeight = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      const trackHeight = window.innerHeight - ringSize - padding * 2;
      let newTop = padding;
      if (docHeight > 0 && trackHeight > 0) {
        const progress = Math.min(Math.max(scrollY / docHeight, 0), 1);
        newTop = padding + progress * trackHeight;
      }
      thumbRef.current.style.top = `${newTop}px`;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updatePosition);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    updatePosition();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    isDraggingRef.current = true;
    startYRef.current = e.clientY;
    startScrollYRef.current = window.scrollY;

    const handleMouseMove = (moveEvent) => {
      const deltaY = moveEvent.clientY - startYRef.current;
      const trackHeight = window.innerHeight - ringSize - padding * 2;
      const docHeight = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      if (trackHeight > 0 && docHeight > 0) {
        const deltaFraction = deltaY / trackHeight;
        const targetScroll = Math.min(Math.max(startScrollYRef.current + deltaFraction * docHeight, 0), docHeight);
        window.scrollTo(0, targetScroll);
        const progress = Math.min(Math.max(targetScroll / docHeight, 0), 1);
        if (thumbRef.current) {
          thumbRef.current.style.top = `${padding + progress * trackHeight}px`;
        }
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      isDraggingRef.current = false;
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleTrackClick = (e) => {
    if (e.target.classList.contains('holo-scroll-track-container')) {
      const clickY = e.clientY - padding;
      const trackHeight = window.innerHeight - ringSize - padding * 2;
      const docHeight = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      if (trackHeight > 0 && docHeight > 0) {
        const fraction = Math.min(Math.max(clickY / trackHeight, 0), 1);
        window.scrollTo({
          top: fraction * docHeight,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <div
      className="holo-scroll-track-container"
      onClick={handleTrackClick}
      aria-label="Scroll Track"
    >
      <div
        ref={thumbRef}
        className={`holo-ring-thumb ${isDragging ? 'active' : ''}`}
        style={{ top: `${padding}px` }}
        onMouseDown={handleMouseDown}
        title="Scroll Indicator"
        aria-label="Circular Holo Scroll Indicator"
      />
    </div>
  );
}
