import { InputField, InputBox } from './style';
import PropsTypes from 'prop-types';

const CustomInput = ({ type, name, placeholder }) => {
  return (
    <InputBox>
      <InputField type={type} name={name} placeholder={placeholder} />
    </InputBox>
  );
};

CustomInput.propTypes = {
  type: PropsTypes.string.isRequired,
  name: PropsTypes.string.isRequired,
  placeholder: PropsTypes.string.isRequired,
};
export default CustomInput;
