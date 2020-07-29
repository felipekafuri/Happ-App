import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Container, ExampleText, StyledContainer } from './styles';

const Emergency: React.FC = () => {
  return (
    <StyledContainer>
      < Text>Emergency</Text>

      < Text>SAMU</Text>

      <TouchableOpacity>
        <Text>192</Text>
      </TouchableOpacity>

    </StyledContainer>
  );
};

export default Emergency;