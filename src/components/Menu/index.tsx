import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import {
  Container,
  LogoContainerMenu,
  IconContainerMenu,
  ImageLogo,
} from './styles';

import LogoImg from '../../assets/logo.png';
import LogoWhite from '../../assets/logoBranco.png';

interface MenuProps {
  colored?: boolean;
}

const Menu: React.FC<MenuProps> = ({ colored }, ...rest) => {
  const navigation = useNavigation();

  return (
    <Container isColored={colored} {...rest}>
      <IconContainerMenu>
        <Icon
          name="user"
          color={colored ? '#fff' : '#f96052'}
          onPress={() => navigation.navigate('New')}
          size={40}
        />
      </IconContainerMenu>
      <Image source={colored ? LogoWhite : LogoImg} />

      <IconContainerMenu>
        <Icon
          name="plus"
          color={colored ? '#fff' : '#f96052'}
          onPress={() => navigation.navigate('Profile')}
          size={40}
        />
      </IconContainerMenu>
    </Container>
  );
};

export default Menu;
