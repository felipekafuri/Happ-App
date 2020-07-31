import React, { useCallback, useRef } from 'react';

import FontAwesomeIcon5 from 'react-native-vector-icons/FontAwesome5';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';

import Input from '../../components/Input';

import api from '../../services/api';

interface FormData {
  username: string;
  title: string;
  text: string;
  feeling: number;
}

import { ScrollView, Image } from 'react-native';
import {
  TabBottomContainer,
  TopMenuContainer,
  TipsButton,
  TipsContainer,
  TextFeeling,
  TextFeelingContainer,
  MoodText,
  AudioButton,
  ButtonContainer,
  StyledButton,
  InputContainer,
} from './styles';
import BottomTabBar from '../../components/BottomTabBar';
import Menu from '../../components/Menu';

const Mood: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: FormData) => {
    const { title, feeling, text, username } = data;

    console.log(title, Number(feeling), text, username);

    // await api.post('/', { username, text, feeling, title });
  }, []);

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
        <Form ref={formRef} onSubmit={handleSubmit} style={{ width: '100%' }}>
          <InputContainer>
            <Input
              name="title"
              placeholder="TITLE"
              placeholderTextColor="#f96052"
            />
            <Input
              name="text"
              placeholder="WHAT ARE YOU THINKING TODAY?"
              numberOfLines={10}
              multiline={true}
              placeholderTextColor="#f96052"
            />

            <StyledButton
              onPress={() => {
                formRef.current?.submitForm();
              }}
            >
              <EntypoIcon name="paper-plane" size={30} color="#f96052" />
            </StyledButton>
          </InputContainer>
        </Form>

        <MoodText>SAY SOMETHING</MoodText>
        <AudioButton>
          <FontAwesomeIcon5 name="microphone-alt" size={60} color="#f96052" />
        </AudioButton>
      </TextFeelingContainer>

      <TabBottomContainer>
        <BottomTabBar />
      </TabBottomContainer>
    </>
  );
};

export default Mood;
