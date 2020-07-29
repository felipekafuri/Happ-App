import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { Container, ExampleText } from './styles';

const GoodNews: React.FC = () => {
  return (
    <Container>
      <ExampleText>OIIIII</ExampleText>
      <Icon size={30} name="arrow-right" />
    </Container>
  );
};

export default GoodNews;
