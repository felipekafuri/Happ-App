import React from 'react';
import { Linking } from 'react-native';
import {
  Container,
  EmergencyButtonContainer,
  ButtonText,
  EmergencyText,
  HelpText,
  TopMenuContainer,
  TabBottomContainer,
} from './styles';

import BottomTabBar from '../../components/BottomTabBar';
import Menu from '../../components/Menu';

const handleButtonPress = () => {
  Linking.openURL('tel:192');
};

const Emergency: React.FC = () => {
  return (
    <>
      <TopMenuContainer>
        <Menu colored />
      </TopMenuContainer>
      <Container>
        <EmergencyText> Emergency</EmergencyText>

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

      <TabBottomContainer>
        <BottomTabBar />
      </TabBottomContainer>
    </>
  );
};

export default Emergency;
