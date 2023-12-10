import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const SidebarContainer = styled.div`
  width: 100%;
  height: 100dvh;
  position: relative;
  padding: 1rem;
  overflow-y: auto;
  position: sticky;

  &::-webkit-scrollbar {
    display: none;
  }
`;

// css for logo
const LogoWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const SidebarNav = styled.div`
  width: 100%;
  margin:0 1rem;
  /* display: flex;
  justify-content: center; */
  /* margin-top: 3rem; */
`;
const OuterList = styled.ul`
  padding: 0.5rem;
`;

const OuterListItem = styled.li`
  width: 100%;
  margin-bottom: 0.75rem;
  font-size: 0.75rem;
  font-weight: 700;
  color: #2dcebe;
  text-transform: capitalize;
`;

const InnerList = styled.ul`
  margin-top: 0.5rem;
  padding: 0;
`;
const InnerListItem = styled.li`
  width: 100%;
  margin-top: 0.2rem;
  padding: 0.35rem 0.5rem;
  font-size: 0.85rem;
  transition: 0.5s;
  border: none;
  color: #313121;
  outline: none;
`;
const NavLinkItem = styled(NavLink)`
  &:hover li {
    background-color: #2dcebe;
    color: white;
    border-right: 5px solid blue;
  }

  &.active li {
    background-color: #2dcebe;
    color: white;
    border-right: 5px solid blue;
  }
`;

export {
  SidebarContainer,
  LogoWrapper,
  SidebarNav,
  OuterList,
  OuterListItem,
  InnerList,
  InnerListItem,
  NavLinkItem,
};
