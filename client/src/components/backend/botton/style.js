import styled from 'styled-components';
const getColor = (type) => {
  const colors = {
    edit: '#9055fd',
    delete: '#e74c3c',
    submit: '#5585b5',
  };
  return colors[type] || colors.submit; // Default color if type is not recognized
};
const getHoverColor = (type) => {
  const colors = {
    edit: '#a92678',
    delete: '#5e8100',
    submit: '#156a90',
  };
  return colors[type] || colors.submit; // Default color if type is not recognized
};

const Button = styled.button`
  width: fit-content;
  padding: 1rem;
  background-color: ${(props) => getColor(props.type)};
  text-transform: capitalize;
  font-size: 0.9rem;
  font-weight: 600;
  color: #fff;
  border: none;
  transition: all ease 0.5s;
  &:hover {
    background-color: ${(props) => getHoverColor(props.type)};
  }
`;

export { Button };
