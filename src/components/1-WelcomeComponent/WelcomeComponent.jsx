import React from 'react';
import { useNavigate } from 'react-router-dom';
import ComponentHeader from '../0-ComponentHeader/ComponentHeader';
import './WelcomeComponent.scss';

export default function WelcomeComponent() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
  };

  const handleBack = () => {
    navigate('/welcome');
  };

  const handleNext = () => {
    navigate('/intro');
  };

  return (
    <div className="welcome-container">
      <div className="component-card">
        <ComponentHeader
          onClose={handleClose}
          onBack={handleBack}
          onNext={handleNext}
          showBack={true}
          showNext={true}
        >
          <h1>Welcome Component</h1>
          
        </ComponentHeader>
      </div>
    </div>
  );
}


