import React from 'react';

import {
  Container,
  TabBottomContainer,
  TopMenuContainer,
  DetailsContainer,
  TitleContainer,
  AudioButton,
  LiveText,
  ButtonContainer,
} from './styles';

import FontEntypo from 'react-native-vector-icons/Entypo';
import BottomTabBar from '../../components/BottomTabBar';
import Menu from '../../components/Menu';

const New: React.FC = () => {
  return (
    <>
      <TopMenuContainer>
        <Menu />
      </TopMenuContainer>
      <Container>
        <TitleContainer
          textAlignVertical="top"
          placeholder="TITLE"
          placeholderTextColor="#f96052"
          numberOfLines={5}
          multiline={true}
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,

            elevation: 3,
          }}
        />
        <DetailsContainer
          textAlignVertical="top"
          placeholder="TYPE #HASHTAGS ABOUT YOUR THEME"
          placeholderTextColor="#f96052"
          numberOfLines={5}
          multiline={true}
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            elevation: 3,
          }}
        />
        <ButtonContainer>
          <AudioButton>
            <FontEntypo name="video-camera" size={40} color="#f96052" />
          </AudioButton>

          <AudioButton>
            <LiveText>LIVE</LiveText>
          </AudioButton>
        </ButtonContainer>
      </Container>
      <TabBottomContainer>
        <BottomTabBar />
      </TabBottomContainer>
    </>
  );
};

export default New;
