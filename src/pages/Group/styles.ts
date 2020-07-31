import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: row;
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

export const SearchInputContainer = styled.View`
  width: 100%;
  height: 56px;
  flex-direction: row;
  background-color: #f5eef5;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border-color: #ccc;
  border-top-width: 1px;
`;

export const SearchTextInput = styled.TextInput`
  background: transparent;
  font-size: 18px;
  width: 90%;
  padding: 0 24px;
`;
