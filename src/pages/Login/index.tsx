import React from 'react';
import { Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import LogoImg from '../../assets/LoginLogo.png';

import {
  Container,
  StyledTextInput,
  StyledTextInputContainer,
  GetInButtonContainer,
  GetInButtonText,
  ImageContainer,
} from './styles';

const Login: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <ImageContainer>
        <Image source={LogoImg} />
      </ImageContainer>
      <Container>
        <StyledTextInputContainer>
          <StyledTextInput placeholder="User" placeholderTextColor="#fff" />
        </StyledTextInputContainer>

        <StyledTextInputContainer>
          <StyledTextInput
            placeholder="Password"
            placeholderTextColor="#fff"
            secureTextEntry
          />
        </StyledTextInputContainer>

        <GetInButtonContainer onPress={() => navigation.navigate('Tips')}>
          <GetInButtonText>GET IN</GetInButtonText>
          <Icon size={20} name="arrow-right" color="#ffff" />
        </GetInButtonContainer>
      </Container>
    </>
  );
};

export default Login;
