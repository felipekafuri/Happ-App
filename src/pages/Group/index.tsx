import React from 'react';

import FontAwesomeIcon5 from 'react-native-vector-icons/FontAwesome5';

import {
  Container,
  TabBottomContainer,
  TopMenuContainer,
  SearchTextInput,
  SearchInputContainer,
} from './styles';
import BottomTabBar from '../../components/BottomTabBar';
import Menu from '../../components/Menu';

const Group: React.FC = () => {
  return (
    <>
      <TopMenuContainer>
        <Menu />
      </TopMenuContainer>
      <SearchInputContainer>
        <FontAwesomeIcon5
          name="search"
          size={30}
          color="#f96052"
          style={{ marginLeft: 8 }}
        />
        <SearchTextInput
          placeholder="PESQUISAR"
          placeholderTextColor="#f96052"
        />
      </SearchInputContainer>
      <Container />

      <TabBottomContainer>
        <BottomTabBar />
      </TabBottomContainer>
    </>
  );
};

export default Group;
