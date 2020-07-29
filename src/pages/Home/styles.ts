import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 0 16px;
`;
export const Title = styled.Text`
  font-size: 20px;
  color: #f96052;
  font-family: 'Roboto-Slab';
  font-weight: 500;
  margin-bottom: 8px;
`;
export const StyledTextInputContainer = styled.View`
  height: 46px;
  width: 100%;
  margin-bottom: 16px;
`;

export const StyledTextInput = styled.TextInput`
  background-color: #f7b2af;
  border-radius: 24px;
  flex: 1;
  color: #ffff;
  font-size: 18px;
  padding: 0 24px;
`;

export const GetInButtonContainer = styled.TouchableOpacity`
  height: 46px;
  width: 100%;
  background-color: #f96052;
  border-radius: 24px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
export const GetInButtonText = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #fff;
  margin-right: 16px;
`;
