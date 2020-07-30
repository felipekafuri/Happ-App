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

export const ExampleText = styled.Text`
  font-size: 18px;
  color: #000;
`;

export const TipsContainer = styled.View`
  flex: 1;
  padding: 16px;
`;

export const TipsButton = styled.TouchableOpacity`
  width: 120px;
  height: 120px;
  align-items: center;
  justify-content: center;
  background-color: #f7b2af;
  margin-right: 8px;
  border-radius: 8px;
`;

export const TipsDetailsContainer = styled.View`
  flex: 3;
  height: 100%;
`;

export const TipsDetails = styled.View`
  flex-direction: row;
  width: 100%;
  height: 120px;
  align-items: center;
  justify-content: center;
  background-color: #f7b2af;
  margin-bottom: 8px;
  padding: 8px;
  border-radius: 8px;
`;

export const TipsDescriptionContainer = styled.View`
  height: 100%;
  width: 80%;
  margin-left: 16px;
`;

export const TipsDetailsTitle = styled.Text`
  font-size: 22px;
  color: #fff;
  margin-right: 10px;
  font-weight: 700;
`;
export const TipsDetailsEnterprise = styled.Text`
  font-size: 20px;
  margin-top: 8px;
  color: #f96052;
`;
