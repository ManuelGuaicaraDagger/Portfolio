import React, { useState, useEffect, useRef, useCallback } from 'react';
import prev from "../../assets/images/flechaSig.png"
import next from "../../assets/images/flechaAnt.png"

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

  const handlePreviousImage = useCallback(() => {
    setIsTransitioning(true);
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      setIsTransitioning(false);
    }, 500); 
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextImage();
    }, 8000);

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
    <div className="w-9/12 mx-auto relative overflow-hidden">
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
      <div className="flex justify-center items-center mt-4">
        <img
          src={prev}
          alt="Anteior"
          onClick={handlePreviousImage}
          className="cursor-pointer h-auto w-5 mr-2"
        />
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => handleCircleClick(index)}
            className={`cursor-pointer h-2 w-2 mx-1 rounded-full ${
              currentIndex === index ? 'bg-pt-blue' : 'bg-gray-300'
            }`}
          ></span>
        ))}
        <img
          src={next}
          alt="Siguiente"
          onClick={handleNextImage}
          className="cursor-pointer h-auto w-5 ml-2"
        />
      </div>
    </div>
  );
};

export default Carousel;
