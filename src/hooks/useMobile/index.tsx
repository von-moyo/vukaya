/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

interface MobileProps {
  size?: number;
  onMobile?: () => void;
  onDesktop?: () => void;
}

const useMobile = ({ size = 800, onMobile, onDesktop }: MobileProps) => {
  const [isMobile, setMobile] = useState(false);

  const screenSizeUpdate = () => {
    if (window.innerWidth <= size) {
      setMobile(true);
      if (onMobile) {
        onMobile();
      }
    } else if (window.innerWidth > size) {
      setMobile(false);
      if (onDesktop) {
        onDesktop();
      }
    }
  };

  useEffect(() => {
    screenSizeUpdate();
    window.addEventListener('resize', screenSizeUpdate);
    window.addEventListener('onload', screenSizeUpdate);

    return () => {
      window.removeEventListener('resize', screenSizeUpdate);
      window.removeEventListener('onload', screenSizeUpdate);
    };
  }, [size]);

  return { isMobile };
};

export { useMobile };
