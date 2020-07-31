import styled from 'styled-components/native';

export const TabBottomContainer = styled.View`
  align-items: center;
  justify-content: flex-end;
`;

export const TopMenuContainer = styled.View`
  align-items: center;
  justify-content: flex-start;
`;

export const TipsButton = styled.TouchableOpacity`
  width: 80px;
  height: 80px;
  align-items: center;
  justify-content: center;
  background-color: #f7b2af;
  margin-right: 8px;
  border-radius: 6px;
`;

export const MoodText = styled.Text`
  font-size: 20px;
  color: #f96052;
  align-self: center;
  font-weight: bold;
`;

export const TextFeelingContainer = styled.View`
  flex: 1;

  padding: 0 30px;
`;

export const TextFeeling = styled.TextInput`
  background: #f9f9f9;
  border-radius: 8px;
  font-size: 16px;
  padding: 8px 24px;
  margin-bottom: 40px;
  width: 100%;
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
  margin-top: 30px;
`;

export const TipsContainer = styled.View`
  padding: 0 10px;
`;
