import React from 'react';

import {
  Container,
  TabBottomContainer,
  TopMenuContainer,
  ProflieImage,
  ProfileText,
} from './styles';
import BottomTabBar from '../../components/BottomTabBar';
import Menu from '../../components/Menu';

import profileImg from '../../assets/amanda.jpg';

const Profile: React.FC = () => {
  return (
    <>
      <TopMenuContainer>
        <Menu />
      </TopMenuContainer>
      <Container>
        <ProflieImage source={profileImg} />
        <ProfileText>@amanda</ProfileText>
      </Container>
      <TabBottomContainer>
        <BottomTabBar />
      </TabBottomContainer>
    </>
  );
};

export default Profile;
