import React, { useState } from 'react';
import FactorSelection from '../FactorSelection';
import DecisionTable from '../DecisionTable';
import DecisionLogic from '../DecisionLogic';
import NavBar from '../Navbar';
import '../../App.css';

const DecisionApp = () => {
  const [factors, setFactors] = useState(null);
  
  const handleFactorSelection = (selectedFactors) => {
    setFactors(selectedFactors);
  };

  return (
    <div>
      <FactorSelection onSelectFactors={handleFactorSelection} />
      {factors && (
        <div>
          <DecisionTable decisions={[{ ...factors, conclusion: DecisionLogic(factors) }]} />
        </div>
      )}
    </div>
  );
};

export default DecisionApp;
