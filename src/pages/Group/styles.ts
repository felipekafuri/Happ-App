import styled from 'styled-components/native';

export const SearchContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
`;

export const TabBottomContainer = styled.View`
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
`;

export const TopMenuContainer = styled.View`
  align-items: center;
  justify-content: flex-start;
`;

export const SearchTextInput = styled.TextInput`
  font-size: 18px;
  padding: 0 24px;
  width: 100%;
  height: 50px;
  font-weight: 200;
`;

export const SearchTextContainer = styled.View`
  background-color: #f5eef5;
  align-items: center;
  flex-direction: row;
  padding: 0px 24px;

  border-top-width: 1px;
  border-color: #ccc;
`;
