import React, { useState, useEffect } from 'react';

import { ScrollView, Image, View } from 'react-native';

import data from '../../../Data.js';

import NewsImg from '../../assets/vacina.png';

import {
  Container,
  TabBottomContainer,
  TopMenuContainer,
  PhraseContainer,
  PhraseText,
  HelloText,
  GoodNewsText,
  GoodNewsDetails,
  GoodNewsDescriptionContainer,
  GoodNewsDetailsTitle,
  GoodNewsDetailsDescription,
  GoodNewsContainer,
  NewsImage,
} from './styles';

import BottomTabBar from '../../components/BottomTabBar';
import Menu from '../../components/Menu';

interface Data {
  goodNews: {
    id: string;
    title: string;
    description: string;
    image: string;
  }[];
}

const GoodNews: React.FC = () => {
  const [goodnews, setGoodNews] = useState<Data>({} as Data);

  useEffect(() => {
    setGoodNews(data.data);
  }, []);

  return (
    <>
      <TopMenuContainer>
        <Menu />
      </TopMenuContainer>
      <Container>
        <PhraseContainer>
          <PhraseText>
            KEEP YOUR EYES ON THE SKY AND YOUR FEET ON THE GROUND
          </PhraseText>
        </PhraseContainer>

        <HelloText>HELLO, AMANDA</HelloText>
        <GoodNewsText>SOME GOOD NEWS FOR YOU</GoodNewsText>

        <GoodNewsContainer>
          <ScrollView
            contentContainerStyle={{ padding: 10 }}
            style={{ flex: 1 }}
          >
            {data.data.goodNews.map(goodNew => (
              <GoodNewsDetails key={goodNew.id}>
                <View style={{ width: '80%' }}>
                  <NewsImage source={NewsImg} />
                </View>
                <GoodNewsDescriptionContainer>
                  <GoodNewsDetailsTitle>{goodNew.title}</GoodNewsDetailsTitle>
                  <GoodNewsDetailsDescription>
                    {goodNew.description}
                  </GoodNewsDetailsDescription>
                </GoodNewsDescriptionContainer>
              </GoodNewsDetails>
            ))}
          </ScrollView>
        </GoodNewsContainer>
      </Container>
      <TabBottomContainer>
        <BottomTabBar />
      </TabBottomContainer>
    </>
  );
};

export default GoodNews;
