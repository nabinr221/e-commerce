import { Button } from './style';
import PropTypes from 'prop-types';

const CustomButton = ({ type, onClick, title }) => {
  const handleButtonClick = () => {
    if (onClick) {
      onClick(type);
    }
  };
  return (
    <Button type={type} onClick={handleButtonClick}>
      {title}
    </Button>
  );
};
CustomButton.propTypes = {
  type: PropTypes.oneOf(['edit', 'delete', 'submit']).isRequired,
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
};

export default CustomButton;
