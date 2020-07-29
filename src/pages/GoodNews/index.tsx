import React from 'react';
import { FaArrowLeft } from 'react-icons/fa'
import { Container, ExampleText } from './styles';


const GoodNews: React.FC = () => {
  return (
    <Container>
      <ExampleText>OIIIII</ExampleText>
      <FaArrowLeft size={30} />
    </Container>
  );
};

export default GoodNews;
