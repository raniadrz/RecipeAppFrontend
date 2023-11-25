// Breadcrumbs.js

import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

const Breadcrumbs = ({ steps, currentStep, setCurrentStep }) => {
  
  return (
    <View style={{ flexDirection: 'row', marginVertical: 10 }}>
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          {index > 0 && <Button icon="chevron-right" mode="text" onPress={() => setCurrentStep(index + 1)}>
            {step}
          </Button>}
          {index === 0 && <Button mode="text" onPress={() => setCurrentStep(index + 1)}>
            {step}
          </Button>}
        </React.Fragment>
      ))}
    </View>
  );
};

export default Breadcrumbs;
