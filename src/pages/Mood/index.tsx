import React from 'react';

import FontAwesomeIcon5 from 'react-native-vector-icons/FontAwesome5';

import { ScrollView } from 'react-native';

import {
  TabBottomContainer,
  TopMenuContainer,
  TipsButton,
  TipsContainer,
  TextFeeling,
  TextFeelingContainer,
  MoodText,
  AudioButton,
} from './styles';

import BottomTabBar from '../../components/BottomTabBar';
import Menu from '../../components/Menu';

const Mood: React.FC = () => {
  return (
    <>
      <TopMenuContainer>
        <Menu />
      </TopMenuContainer>

      <MoodText>MOOD</MoodText>

      <TipsContainer>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ padding: 20 }}
        >
          <TipsButton activeOpacity={0.6}>
            <FontAwesomeIcon5 name="grimace" size={40} color="#fff" />
          </TipsButton>
          <TipsButton activeOpacity={0.6}>
            <FontAwesomeIcon5 name="grin-alt" size={40} color="#fff" />
          </TipsButton>
          <TipsButton activeOpacity={0.6}>
            <FontAwesomeIcon5 name="grin-tears" size={40} color="#fff" />
          </TipsButton>
          <TipsButton activeOpacity={0.6}>
            <FontAwesomeIcon5 name="frown" size={40} color="#fff" />
          </TipsButton>
          <TipsButton activeOpacity={0.6}>
            <FontAwesomeIcon5 name="grin-stars" size={40} color="#fff" />
          </TipsButton>
          <TipsButton activeOpacity={0.6}>
            <FontAwesomeIcon5 name="flushed" size={40} color="#fff" />
          </TipsButton>
          <TipsButton activeOpacity={0.6}>
            <FontAwesomeIcon5 name="grin-tongue-wink" size={40} color="#fff" />
          </TipsButton>
          <TipsButton activeOpacity={0.6}>
            <FontAwesomeIcon5
              name="grin-tongue-squint"
              size={50}
              color="#fff"
            />
          </TipsButton>
        </ScrollView>
      </TipsContainer>

      <TextFeelingContainer>
        <TextFeeling
          placeholder="WHAT ARE YOU THINKING TODAY?"
          placeholderTextColor="#f96052"
          numberOfLines={5}
        />
      </TextFeelingContainer>

      <MoodText>SAY ANYTHING YOU WANT</MoodText>
      <AudioButton>
        <FontAwesomeIcon5 name="microphone-alt" size={60} color="#f96052" />
      </AudioButton>

      <TabBottomContainer>
        <BottomTabBar />
      </TabBottomContainer>
    </>
  );
};

export default Mood;
