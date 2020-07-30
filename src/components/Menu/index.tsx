import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import {
  Container,
  LogoContainerMenu,
  IconContainerMenu,
  ImageLogo,
} from './styles';
import LogoImg from '../../assets/logo.png';

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
          size={30}
        />
      </IconContainerMenu>

      <LogoContainerMenu>
        <ImageLogo source={LogoImg} />
      </LogoContainerMenu>

      <IconContainerMenu>
        <Icon
          name="plus"
          color={colored ? '#fff' : '#f96052'}
          onPress={() => navigation.navigate('Profile')}
          size={30}
        />
      </IconContainerMenu>
    </Container>
  );
};

export default Menu;
