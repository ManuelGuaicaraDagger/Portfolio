import { useEffect } from "react";

const useSmoothScrollWithOffset = (offset: number) => {
    useEffect(() => {
      const handleAnchorClick = (event: Event) => {
        const target = event.target as HTMLAnchorElement;
        if (target.tagName === 'A' && target.hash !== '') {
          event.preventDefault();
          const element = document.querySelector(target.hash);
          if (element) {
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition - offset;
            window.scrollBy({
              top: offsetPosition,
              behavior: 'smooth',
            });
          }
        }
      };
  
      document.addEventListener('click', handleAnchorClick);
      return () => {
        document.removeEventListener('click', handleAnchorClick);
      };
    }, [offset]);
  };
  
  export default useSmoothScrollWithOffset;