import styled from 'styled-components';
import { flex } from '../../../styles/mixins';

export const CategoryContainer = styled.div`
  width: 100%;
  height: 100%; /* height: 100dvh; */
  padding: 2rem;
  background-color: #fff;
`;
export const CategoryHeaderWrapper = styled.div`
  ${flex({
    justifyContent: 'space-between',
    alignItems: 'center',
  })}/* other styles... */
`;

export const CategoryTableWrapper = styled.div`
  width: 100%;
  margin-top: 1rem;
  border: 1px solid blue;
`;
