import styled from 'styled-components/native';
import { Image } from 'react-native';

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

export const ExampleText = styled.Text`
  font-size: 18px;
  color: #000;
`;

export const ProflieImage = styled(Image)`
  border-radius: 350px;
  transform: scale(0.2);
  margin-top: -360px;
`;

export const ProfileText = styled.Text`
  color: #f96052;
  font-size: 18px;
  margin-bottom: 34px;
`;
