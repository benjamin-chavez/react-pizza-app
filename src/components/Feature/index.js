import React from 'react';
import { FeatureContainer, FeaturButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Pizza of the day</h1>
      <p>Truffle Alfredo sauce topped with 24 carat gold dust.</p>
      <FeaturButton>Order Now</FeaturButton>
    </FeatureContainer>
  );
};

export default Feature;
