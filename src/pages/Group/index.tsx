import React, { useEffect, useState } from 'react';

import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesomeIcon5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import IoniIcon from 'react-native-vector-icons/Ionicons';

import {
  Container,
  TabBottomContainer,
  TopMenuContainer,
  SearchInputContainer,
  HelloText,
  ProgressContainer,
  TextDetails,
  ArrowButton,
  TipsButton,
  EmojiContainer,
  HummorText,
  BoldText,
  WordsText,
  TextContainer,
  CatText,
} from './styles';
import BottomTabBar from '../../components/BottomTabBar';
import Menu from '../../components/Menu';
import api from '../../services/api';

interface Notes {
  title: string;
  date: string;
  text: string;
  feeling: number;
}

const Group: React.FC = () => {
  const [notes, setNotes] = useState<Notes[]>([]);

  useEffect(() => {
    try {
      const username = 'amanda';

      api
        .get('/', { params: { username } })
        .then(response => setNotes(response.data.docs));
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <TopMenuContainer>
        <Menu />
      </TopMenuContainer>
      <SearchInputContainer>
        <HelloText>HELLO AMANDA, THIS IS YOUR PROGRESS!</HelloText>
      </SearchInputContainer>
      <Container showsVerticalScrollIndicator={false}>
        {notes.map(note => (
          <ProgressContainer
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
          >
            <FontAwesomeIcon5 name="microphone-alt" size={30} color="#f96052" />
            <TextDetails>
              {note.date.slice(8)} {note.title}
            </TextDetails>

            <FontAwesomeIcon name="lock" color="#898989" size={20} />
          </ProgressContainer>
        ))}

        <ArrowButton>
          <SimpleLineIcon name="arrow-down" size={20} color="#898989" />
        </ArrowButton>

        <EmojiContainer>
          <TipsButton activeOpacity={0.6}>
            <SimpleLineIcon name="emotsmile" size={50} color="#fff" />
          </TipsButton>
          <TextContainer>
            <HummorText>
              YOU WERE HAPPY <BoldText>67%</BoldText> OF THE TIME
            </HummorText>
            <WordsText>YOU USED THE WORDS</WordsText>
            <CatText>CATS, AFFECTION, AND SUN</CatText>
          </TextContainer>
        </EmojiContainer>
        <EmojiContainer>
          <TipsButton activeOpacity={0.6}>
            <IoniIcon name="md-sad-outline" size={50} color="#fff" />
          </TipsButton>
          <TextContainer>
            <HummorText>
              YOU WERE SAD <BoldText>58%</BoldText> OF THE TIME
            </HummorText>
            <WordsText>YOU USED THE WORDS</WordsText>
            <CatText>FAMILY, MONEY, NEIGBORS</CatText>
          </TextContainer>
        </EmojiContainer>
        <EmojiContainer>
          <TipsButton activeOpacity={0.6}>
            <IoniIcon name="md-sad-outline" size={50} color="#fff" />
          </TipsButton>
          <TextContainer>
            <HummorText>
              YOU WERE SAD <BoldText>58%</BoldText> OF THE TIME
            </HummorText>
            <WordsText>YOU USED THE WORDS</WordsText>
            <CatText>FAMILY, MONEY, NEIGBORS</CatText>
          </TextContainer>
        </EmojiContainer>
      </Container>

      <TabBottomContainer>
        <BottomTabBar />
      </TabBottomContainer>
    </>
  );
};

export default Group;
