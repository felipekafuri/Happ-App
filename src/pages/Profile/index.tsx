import React from 'react';

import {
  Container,
  ExampleText,
  TabBottomContainer,
  TopMenuContainer,
} from './styles';
import BottomTabBar from '../../components/BottomTabBar';
import Menu from '../../components/Menu';

const Profile: React.FC = () => {
  return (
    <>
      <TopMenuContainer>
        <Menu />
      </TopMenuContainer>
      <Container>
        <ExampleText>Profile!!!!!!!!</ExampleText>
      </Container>
      <TabBottomContainer>
        <BottomTabBar />
      </TabBottomContainer>
    </>
  );
};

export default Profile;
