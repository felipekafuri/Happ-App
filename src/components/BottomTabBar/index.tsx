import React from 'react';

import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import { Container, IconContainer, IconText } from './styles';

const BottomTabBar: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <IconContainer>
        <Icon
          size={25}
          name="home"
          color="#f96052"
          onPress={() => navigation.navigate('GoodNews')}
        />
        <IconText>Good news</IconText>
      </IconContainer>
      <IconContainer>
        <Icon
          size={25}
          name="book"
          color="#f96052"
          onPress={() => navigation.navigate('Mood')}
        />
        <IconText>Diary</IconText>
      </IconContainer>
      <IconContainer>
        <FontAwesomeIcon
          size={28}
          name="lightbulb-o"
          color="#f96052"
          onPress={() => navigation.navigate('Tips')}
        />
        <IconText>Ideas</IconText>
      </IconContainer>
      <IconContainer>
        <AntDesignIcon
          size={25}
          name="rocket1"
          color="#f96052"
          onPress={() => navigation.navigate('Group')}
        />
        <IconText>Progress</IconText>
      </IconContainer>
      <IconContainer>
        <Icon
          size={25}
          name="phone"
          color="#f96052"
          onPress={() => navigation.navigate('Emergency')}
        />
        <IconText>Emergency</IconText>
      </IconContainer>
    </Container>
  );
};

export default BottomTabBar;
