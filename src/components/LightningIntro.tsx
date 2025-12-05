import { useState, useEffect } from 'react';
import Lightning from './Lightning';
import './LightningIntro.css';

interface LightningIntroProps {
  onComplete: () => void;
}

const LightningIntro = ({ onComplete }: LightningIntroProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [nameVisible, setNameVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Show name after 1 second
    const nameTimer = setTimeout(() => {
      setNameVisible(true);
    }, 1000);

    // Start fade out after 4 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 4000);

    // Hide intro and call onComplete after 5 seconds
    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 5000);

    return () => {
      clearTimeout(nameTimer);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className={`lightning-intro ${fadeOut ? 'fade-out' : ''}`}>
      <Lightning 
        hue={220}
        xOffset={0}
        speed={1}
        intensity={1}
        size={1}
      />
      <div className={`intro-content ${nameVisible ? 'show' : ''}`}>
        <h1 className="intro-name">Ravishankar S</h1>
      </div>
    </div>
  );
};

export default LightningIntro;
