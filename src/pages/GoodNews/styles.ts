import styled from 'styled-components/native';
import { Image } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #ffff;
  padding: 0 16px;
`;

export const TabBottomContainer = styled.View`
  align-items: center;
  justify-content: flex-end;
`;

export const TopMenuContainer = styled.View`
  align-items: center;
  justify-content: flex-start;
`;

export const PhraseText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

export const PhraseContainer = styled.View`
  background-color: #f96052;
  height: 100px;
  width: 100%;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  padding: 8px;
  margin-top: 8px;
`;

export const HelloText = styled.Text`
  font-size: 18px;
  color: #f96052;
  text-align: center;
  padding: 22px;
`;

export const GoodNewsText = styled.Text`
  font-size: 20px;
  color: #6f6f6f;
  text-align: center;
  font-weight: bold;
`;

export const GoodNewsContainer = styled.View`
  flex: 3;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
`;

export const GoodNewsDetails = styled.View`
  flex-direction: row;
  width: 100%;
  height: 150px;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;

export const GoodNewsDescriptionContainer = styled.View`
  height: 100%;
  width: 100%;
`;

export const GoodNewsDetailsTitle = styled.Text`
  font-size: 11px;
  color: #f96052;
  font-weight: 700;
`;
export const GoodNewsDetailsDescription = styled.Text`
  font-size: 11px;
  margin-top: 8px;
  padding: 8px;
  color: #6f6f6f;
  flex: 1;
`;

export const NewsImage = styled(Image)`
  transform: scale(0.4);
`;
