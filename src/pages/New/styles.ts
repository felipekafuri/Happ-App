import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #ffff;
  padding: 26px;
`;

export const TabBottomContainer = styled.View`
  align-items: center;
  justify-content: flex-end;
`;

export const TopMenuContainer = styled.View`
  align-items: center;
  justify-content: flex-start;
`;

export const ExampleText = styled.Text`
  font-size: 18px;
  color: #000;
`;

export const TitleContainer = styled.TextInput`
  border-radius: 4px;
  font-size: 16px;
  padding: 8px 24px;
  width: 100%;
  height: 50px;
  background: #f9f9f9;
  margin-bottom: 20px;
`;

export const DetailsContainer = styled.TextInput`
  border-radius: 4px;
  font-size: 16px;
  padding: 8px 24px;
  width: 100%;
  height: 80px;
  background: #f9f9f9;
  margin-bottom: 10px;
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
  margin-right: 20px;
  margin-left: 20px;
`;

export const LiveText = styled.Text`
  color: #f96052;
  font-size: 20px;
  font-weight: 700;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
`;
