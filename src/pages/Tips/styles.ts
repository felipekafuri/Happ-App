import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #ffff;
`;

export const TabBottomContainer = styled.View`
  align-items: center;
  justify-content: flex-end;
`;

export const TopMenuContainer = styled.View`
  align-items: center;
  justify-content: flex-start;
`;

export const TipsContainer = styled.View`
  flex: 1;
  padding: 0 16px;
`;

export const TipsButton = styled.TouchableOpacity`
  width: 90px;
  height: 90px;
  align-items: center;
  justify-content: center;
  background-color: #f7b2af;
  margin-right: 8px;
  border-radius: 4px;
`;

export const TipsDetailsContainer = styled.View`
  flex: 3;
  height: 100%;
  padding: 16px;
`;

export const TipsDetails = styled.View`
  flex-direction: row;
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: center;
  background-color: #f96052;
  margin-bottom: 8px;
  padding: 8px 36px;
  border-radius: 4px;
`;

export const TipsDescriptionContainer = styled.View`
  height: 100%;
  width: 80%;
  margin-left: 16px;
`;

export const TipsDetailsTitle = styled.Text`
  font-size: 16px;
  color: #fff;
  margin-right: 10px;
  font-weight: 700;
`;
export const TipsDetailsEnterprise = styled.Text`
  font-size: 16px;
  margin-top: 6px;
  color: #fff;
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
