import styled from 'styled-components';
import { Field } from 'formik';
export const InputBox = styled.div`
  min-width: 100%;
`;
export const InputField = styled(Field)`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  margin-bottom: 5px;
  border: 2px solid #ccc;

  &:focus {
    border: 1px solid #ccc;
    outline: none;
  }
`;
