import React, { useState, useEffect, useRef, useCallback } from 'react';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleNextImage = useCallback(() => {
    setIsTransitioning(true);
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      setIsTransitioning(false);
    }, 500); 
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextImage();
    }, 6000);

    return () => clearInterval(interval);
  }, [handleNextImage]);

  const handleCircleClick = (index: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsTransitioning(true);
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 500); 
  };

  return (
    <div className="w-4/5 mx-auto relative overflow-hidden">
      <div
        className={`whitespace-nowrap transition-transform duration-500 ${isTransitioning ? 'transform -translate-x-full' : ''}`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="inline-block w-full h-auto max-h-[700px]"
          />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => handleCircleClick(index)}
            className={`cursor-pointer h-2 w-2 mx-1 rounded-full ${
              currentIndex === index ? 'bg-pt-blue' : 'bg-gray-300'
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
