import React from 'react';

import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import { Container, IconContainer } from './styles';

const BottomTabBar: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <IconContainer>
        <Icon
          size={25}
          name="star"
          color="#f96052"
          onPress={() => navigation.navigate('Tips')}
        />
      </IconContainer>
      <IconContainer>
        <Icon
          size={25}
          name="play"
          color="#f96052"
          onPress={() => navigation.navigate('Group')}
        />
      </IconContainer>
      <IconContainer>
        <Icon
          size={25}
          name="home"
          color="#f96052"
          onPress={() => navigation.navigate('GoodNews')}
        />
      </IconContainer>
      <IconContainer>
        <Icon
          size={25}
          name="book"
          color="#f96052"
          onPress={() => navigation.navigate('Mood')}
        />
      </IconContainer>
      <IconContainer>
        <Icon
          size={25}
          name="phone"
          color="#f96052"
          onPress={() => navigation.navigate('Emergency')}
        />
      </IconContainer>
    </Container>
  );
};

export default BottomTabBar;
