import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #f96052;
  padding: 0 70px;
`;

export const EmergencyButtonContainer = styled.TouchableOpacity`
  height: 46px;
  width: 100%;
  border-color: #fff;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-width: 2px;
  margin-bottom: 56px;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #fff;
`;

export const EmergencyText = styled.Text`
  font-weight: bold;
  font-size: 30px;
  color: #fff;
  margin-bottom: 26px;
`;

export const HelpText = styled.Text`
  font-size: 16px;
  color: #fff;
  margin-bottom: 6px;
  text-align: center;
`;

export const TabBottomContainer = styled.View`
  align-items: center;
  justify-content: flex-end;
`;

export const TopMenuContainer = styled.View`
  align-items: center;
  justify-content: flex-start;
`;
