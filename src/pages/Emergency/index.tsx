import React from 'react';
import { Linking } from 'react-native';
import {
  Container,
  EmergencyButtonContainer,
  ButtonText,
  EmergencyText,
  HelpText,
} from './styles';

const handleButtonPress = () => {
  Linking.openURL('tel:192');
};

const Emergency: React.FC = () => {
  return (
    <Container>
      <EmergencyText>Emergency</EmergencyText>

      <HelpText>Samu</HelpText>

      <EmergencyButtonContainer onPress={handleButtonPress}>
        <ButtonText>192</ButtonText>
      </EmergencyButtonContainer>

      <HelpText>THE NATIONAL SUICIDE PREVENTION LIFELINE</HelpText>

      <EmergencyButtonContainer>
        <ButtonText>188</ButtonText>
      </EmergencyButtonContainer>

      <HelpText>WOMAN, DENUNCIATE!</HelpText>

      <EmergencyButtonContainer>
        <ButtonText>180</ButtonText>
      </EmergencyButtonContainer>
    </Container>
  );
};

export default Emergency;
