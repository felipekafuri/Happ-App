import styled from 'styled-components/native';
import { Image } from 'react-native';

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

export const PhraseText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

export const PhraseContainer = styled.View`
  background-color: #f96052;
  height: 90px;
  width: 100%;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  padding: 8px;
  margin-top: 8px;
  padding: 12px;
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
`;

export const GoodNewsDetails = styled.View`
  flex-direction: row;
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: space-around;
  padding: 8px;
`;

export const GoodNewsDescriptionContainer = styled.View`
  height: 100%;
  width: 80%;
`;

export const GoodNewsDetailsTitle = styled.Text`
  font-size: 11px;
  color: #f96052;
  font-weight: 700;
  margin-left: 15px;
  margin-right: 40px;
`;
export const GoodNewsDetailsDescription = styled.Text`
  font-size: 10px;
  margin-top: 2px;
  color: #6f6f6f;
  margin-left: 15px; /**kkk */
  margin-right: 40px;
`;

export const NewsImage = styled(Image)`
  transform: scale(0.35);
  margin-left: -75px; /*kkkkk */
`;
