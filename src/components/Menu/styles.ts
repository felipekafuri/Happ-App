import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #356f;
`;

export const StyledMenu = styled.Text`
 width: 100%;

height: 94px;

z-index: 100;



display: flex;

justify-content: space-between;

align-items: center;



position: fixed;

top: 0;

left: 0;

right: 0;

padding-left: 5%;

padding-right: 5%;



background: var(--black);

border-bottom: 2px solid var(--primary);
`;
