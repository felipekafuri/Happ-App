import React, { useState, useEffect } from 'react';

import { ScrollView } from 'react-native';
import FatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import {
  Container,
  TabBottomContainer,
  TopMenuContainer,
  TipsButton,
  TipsContainer,
  TipsDetails,
  TipsDetailsContainer,
  TipsDetailsTitle,
  TipsDetailsEnterprise,
  TipsDescriptionContainer,
} from './styles';

import data from '../../../Data.js';

import BottomTabBar from '../../components/BottomTabBar';
import Menu from '../../components/Menu';

interface Data {
  curses: {
    id: string;
    title: string;
    enterprise: string;
    isLive: boolean;
  }[];
  health: {
    id: string;
    title: string;
    enterprise: string;
    isLive: boolean;
  }[];
}

const Tips: React.FC = () => {
  const [tips, setTips] = useState<Data>({} as Data);

  useEffect(() => {
    setTips(data.data);
  }, []);

  return (
    <>
      <TopMenuContainer>
        <Menu />
      </TopMenuContainer>
      <Container>
        <TipsContainer>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ padding: 20 }}
          >
            <TipsButton activeOpacity={0.6}>
              <FontAwesomeIcon5 name="book" size={50} color="#fff" />
            </TipsButton>
            <TipsButton activeOpacity={0.6}>
              <FontAwesomeIcon5
                name="hand-holding-medical"
                size={50}
                color="#fff"
              />
            </TipsButton>
            <TipsButton activeOpacity={0.6}>
              <FontAwesomeIcon5 name="recycle" size={50} color="#fff" />
            </TipsButton>
            <TipsButton activeOpacity={0.6}>
              <FontAwesomeIcon5 name="hat-cowboy" size={50} color="#fff" />
            </TipsButton>
            <TipsButton activeOpacity={0.6}>
              <FontAwesomeIcon name="soccer-ball-o" size={50} color="#fff" />
            </TipsButton>
            <TipsButton activeOpacity={0.6}>
              <FontAwesomeIcon name="car" size={50} color="#fff" />
            </TipsButton>
            <TipsButton activeOpacity={0.6}>
              <FontAwesomeIcon name="globe" size={50} color="#fff" />
            </TipsButton>
            <TipsButton activeOpacity={0.6}>
              <FontAwesomeIcon name="cloud" size={50} color="#fff" />
            </TipsButton>
          </ScrollView>
        </TipsContainer>

        <TipsDetailsContainer>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ padding: 10 }}
            style={{ flex: 1 }}
          >
            {data.data.curses.map(curse => (
              <TipsDetails key={curse.id}>
                <FontAwesomeIcon5 name="book" size={50} color="#fff" />
                <TipsDescriptionContainer>
                  <TipsDetailsTitle>{curse.title}</TipsDetailsTitle>
                  <TipsDetailsEnterprise>
                    {curse.enterprise}
                  </TipsDetailsEnterprise>
                </TipsDescriptionContainer>
              </TipsDetails>
            ))}
          </ScrollView>
        </TipsDetailsContainer>
      </Container>

      <TabBottomContainer>
        <BottomTabBar />
      </TabBottomContainer>
    </>
  );
};

export default Tips;
