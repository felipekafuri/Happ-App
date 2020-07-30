import React from 'react';

import FontAwesomeIcon5 from 'react-native-vector-icons/FontAwesome5';

import {
  SearchContainer,
  TabBottomContainer,
  TopMenuContainer,
  SearchTextInput,
} from './styles';
import BottomTabBar from '../../components/BottomTabBar';
import Menu from '../../components/Menu';

const Group: React.FC = () => {
  return (
    <>
      <TopMenuContainer>
        <Menu />
      </TopMenuContainer>

      <SearchContainer>
        <FontAwesomeIcon5 name="search" size={40} color="#f96052" />
        <SearchTextInput
          placeholder="PESQUISAR"
          placeholderTextColor="#f96052"
        />
      </SearchContainer>

      <TabBottomContainer>
        <BottomTabBar />
      </TabBottomContainer>
    </>
  );
};

export default Group;
