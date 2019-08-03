import { useState, useEffect } from 'react';

export default () => {
  const getSize = () => ({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  });

  const [windowSize, setWindowSize] = useState(getSize());

  useEffect(() => {
    const handleResize = () => setWindowSize(getSize);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  })

  return windowSize;
}