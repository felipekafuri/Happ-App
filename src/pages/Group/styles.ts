import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
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
  height: 60px;
  flex-direction: row;
  background-color: #f9f9f9;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border-color: #ccc;
  border-top-width: 1px;
`;
export const HelloText = styled.Text`
  color: #f96052;
  font-size: 20px;
  text-align: center;
`;

export const ProgressContainer = styled.View`
  border-radius: 5px;
  font-size: 16px;
  padding: 8px 24px;
  width: 100%;
  height: 60px;
  background: #f9f9f9;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  padding: 8px 20px;
  border-radius: 4px;
`;

export const TextDetails = styled.Text`
  color: #f96052;
  align-self: center;
  font-size: 16px;
  padding: 16px;
`;

export const ArrowButton = styled.TouchableOpacity`
  align-self: center;
`;

export const TipsButton = styled.TouchableOpacity`
  width: 90px;
  height: 90px;
  align-items: center;
  justify-content: center;
  background-color: #f7b2af;
  margin-right: 8px;
  border-radius: 4px;
  margin-bottom: 4px;
`;

export const EmojiContainer = styled.View`
  width: 100%;
  height: 90px;
  flex-direction: row;
  align-items: center;
  align-self: center;
`;
