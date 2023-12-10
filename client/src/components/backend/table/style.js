import styled from 'styled-components';
import { flex } from '../../../styles/mixins';

export const TableWrapper = styled.div`
  overflow-x: auto;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  /* margin: 20px 0; */
`;

export const TableHeader = styled.th`
  width: fit-content;
  background-color: #5585b5;
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  text-transform: capitalize;
  padding: 1rem;
  text-align: left;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const TableCell = styled.td`
  width: fit-content;
  padding: 10px;
  border-bottom: 2px solid lightblue;
  text-transform: capitalize;
`;
export const ImageWrapper = styled.div`
  width: 80px;
  height: 80px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ActionButtonWrapper = styled.div`
  width: fit-content;
  ${flex({
    justifyContent: 'space-between',
    alignItems: 'center',
  })}
`;
