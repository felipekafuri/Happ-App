import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Title,
  StyledTextInput,
  StyledTextInputContainer,
  GetInButtonContainer,
  GetInButtonText,
} from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Title>User</Title>
      <StyledTextInputContainer>
        <StyledTextInput />
      </StyledTextInputContainer>

      <GetInButtonContainer onPress={() => navigation.navigate('GoodNews')}>
        <GetInButtonText>GET IN</GetInButtonText>
        <Icon size={20} name="arrow-right" color="#ffff" />
      </GetInButtonContainer>
    </Container>
  );
};

export default Home;
