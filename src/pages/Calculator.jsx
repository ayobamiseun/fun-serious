
import React, { useState } from 'react';
import SeriousCalculator from '../components/SeriousCalculator/seriousCalculator';
import FunCalculator from '../components/FunCalculator/funCalculator';
import Toggle from '../components/Toggle/Toggle';

function Calculator() {
  const [isSerious, setIsSerious] = useState(true);
  //set toggle function ((🚀))
  const toggleForm = () => {
    setIsSerious(!isSerious);
  };

  return (
    <div>
    <div style={{ marginBottom: "20px",  }}>
      <Toggle
        label={isSerious ? "Serious Mode Activated" : "Fun Mode Activated"}
        toggled={!isSerious}
        onClick={toggleForm}
      />
      </div>
      {isSerious ? <SeriousCalculator /> : <FunCalculator />}
    </div>
  );
}

export default Calculator;

