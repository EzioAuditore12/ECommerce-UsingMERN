import React, { useState, useEffect, useCallback } from "react";
import PropTypes from 'prop-types';

const Carousel = ({ autoplayInterval = 3000 }) => {
  // ...existing code...

  const handleTouchMove = useCallback((e) => {
    if (!touchPosition) return;
    const diff = touchPosition - e.touches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
      setTouchPosition(null);
    }
  }, [touchPosition, nextSlide]);

  useEffect(() => {
    const timer = setInterval(nextSlide, autoplayInterval);
    return () => {
      clearInterval(timer);
      setTouchPosition(null); // Clean up touch position on unmount
    };
  }, [nextSlide, autoplayInterval]);

  // ...existing code...
};

Carousel.propTypes = {
  autoplayInterval: PropTypes.number
};

export default Carousel;
