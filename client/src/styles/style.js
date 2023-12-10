import styled from 'styled-components';
import { flex } from '../styles/mixins';

export const Container = styled.div`
  width: 100%;
  height: 100%; /* height: 100dvh; */
  padding: 2rem;
  background-color: #fff;
`;
export const TitleWrapper = styled.div`
  ${flex({
    justifyContent: 'space-between',
    alignItems: 'center',
  })}/* other styles... */
`;
