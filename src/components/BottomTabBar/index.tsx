import React from 'react';
import { View } from 'react-native';
import { FaArrowLeft } from 'react-icons/fa'

import { Container } from './styles';

const BottomTabBar: React.FC = () => {
  return (
    <Container>
      <FaArrowLeft />
    </Container>
  )
}

export default BottomTabBar;