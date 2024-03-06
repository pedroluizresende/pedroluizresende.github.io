import { useState } from 'react';

function useScroll() {
  const [elementPosition, setElementPosition] = useState({ bottom: 1000, left: 0 });

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    const element = document.getElementById('top');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getElementPosition = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const elementRect = element.getBoundingClientRect();
      const { top, left } = elementRect;
      return { top, left };
    }
    return null;
  };

  const handleScroll = (id:string) => {
    const element = document.getElementById(id);
    if (element) {
      const position = element.getBoundingClientRect();
      setElementPosition({ bottom: position.bottom, left: position.left });
    }
  };

  return {
    scrollToSection,
    scrollToTop,
    getElementPosition,
    handleScroll,
    elementPosition,
  };
}

export default useScroll;
