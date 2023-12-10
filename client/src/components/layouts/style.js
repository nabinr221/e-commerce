import styled from 'styled-components';

const LayoutContainer = styled.div`
  max-width: 100%;
  height: 100dvh;
  display: flex;
  /* gap: 1rem; */
  background-color: #f7f7f7;
`;
const SidebarWrapper = styled.div`
  max-width: 16%;
  height: 100dvh;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
`;
const MainContentWrapper = styled.div`
  min-width: 84%;
  padding: 0 0.5rem;
  position: relative;
`;
export { LayoutContainer, SidebarWrapper, MainContentWrapper };
