import styled from 'styled-components';

const NavbarWrapper = styled.div`
  max-width: 100%;
  height: auto;
  margin-bottom: 1.5rem;
  padding: 0.85rem 1rem;
  background-color: white;
  display: flex;
  justify-content: space-between;
`;

const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;
const GreatingMessage = styled.div`
  h1 {
    font-size: 1rem;
    span {
      font-weight: 700;
      margin: 0 5px;
      text-transform: capitalize;
      font-weight: bold;
    }
  }
`;
const InputBox = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  border: 1px solid gray;
  padding: 0.65rem 1rem;
  input {
    font-size: 1rem;
    padding: 0;
    margin: 0;
    border: none;
    outline: none;
  }
  .search-icon {
    cursor: pointer;

    &:hover {
      color: olivedrab;
    }
  }
`;

const NavbarRight = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const ImgWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px solid lightblue;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export {
  NavbarWrapper,
  NavbarLeft,
  GreatingMessage,
  InputBox,
  NavbarRight,
  ImgWrapper,
};
