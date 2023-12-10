import Breadcumb from '../../../components/backend/breadcumbs/Breadcumb';
import CustomButton from '../../../components/backend/botton/CustomButton';
import ProductTable from '../../../components/backend/table/ProductTable';
import { useNavigate } from 'react-router-dom';
import { Container, TitleWrapper } from '../../../styles/style';
import { CategoryTableWrapper } from './style';

const Category = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/dashboard/add-category');
  };
  return (
    <>
      <Container>
        <TitleWrapper>
          <Breadcumb title="Category" />
          <CustomButton
            type="submit"
            title="Add Product"
            onClick={handleButtonClick}
          />
        </TitleWrapper>

      </Container>
    </>
  );
};

export default Category;
