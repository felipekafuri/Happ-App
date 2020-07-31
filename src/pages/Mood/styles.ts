import styled from 'styled-components/native';

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
  padding: 16px;
`;

export const TipsButton = styled.TouchableOpacity`
  width: 80px;
  height: 80px;
  align-items: center;
  justify-content: center;
  background-color: #f7b2af;
  margin-right: 8px;
  border-radius: 8px;
`;

export const MoodText = styled.Text`
  font-size: 20px;
  color: #f96052;
  align-self: center;
`;

export const TextFeelingContainer = styled.View`
  flex: 1;
  padding: 16px;
`;

export const TextFeeling = styled.TextInput`
  background-color: #f5eef5;
  border-radius: 12px;
  font-size: 16px;
  padding: 0 24px;
`;

export const AudioButton = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  border-color: #f96052;
  border-radius: 50px;
  border-width: 3px;
  align-items: center;
  justify-content: center;
  align-self: center;
`;
