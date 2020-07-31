import React, { useCallback, useRef, useEffect } from 'react';

import FontAwesomeIcon5 from 'react-native-vector-icons/FontAwesome5';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import { Alert, ScrollView, Image, AppRegistry } from 'react-native';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';

import Input from '../../components/Input';

import api from '../../services/api';

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

interface FormData {
  username: string;
  title: string;
  text: string;
  feeling: number;
}

const Mood: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: FormData) => {
    try {
      const { title, feeling, text, username = 'amanda' } = data;

      const numberFeeling = Number(feeling);
      const post = { username, text, feeling: numberFeeling, title };

      const response = await api.post('/', post);

      Alert.alert(`Success!!`, 'Your note has been created!');
    } catch (err) {
      console.log(err);
    }
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
              multiline
              placeholderTextColor="#f96052"
            />
            <Input
              name="feeling"
              placeholder="0-9 what is your mood?"
              placeholderTextColor="#f96052"
              keyboardType="number-pad"
              maxLength={1}
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
