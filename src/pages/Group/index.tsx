import React from 'react';

import FontAwesomeIcon5 from 'react-native-vector-icons/FontAwesome5';

import {
  SearchContainer,
  TabBottomContainer,
  TopMenuContainer,
  SearchTextInput,
  SearchTextContainer,
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
        <SearchTextContainer>
          <FontAwesomeIcon5 name="search" size={20} color="#f96052" />
          <SearchTextInput
            placeholder="SEARCH"
            placeholderTextColor="#f96052"
          ></SearchTextInput>
        </SearchTextContainer>
      </SearchContainer>

      <TabBottomContainer>
        <BottomTabBar />
      </TabBottomContainer>
    </>
  );
};

export default Group;
