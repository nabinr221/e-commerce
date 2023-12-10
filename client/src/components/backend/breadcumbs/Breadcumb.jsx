import { TitleH1, TitleWrapper } from './style';
import PropsTypes from 'prop-types';
const Breadcumb = ({ title }) => {
  return (
    <>
      <TitleWrapper>{title && <TitleH1>{title}</TitleH1>}</TitleWrapper>
    </>
  );
};
Breadcumb.propTypes = {
  title: PropsTypes.string.isRequired,
};
export default Breadcumb;
