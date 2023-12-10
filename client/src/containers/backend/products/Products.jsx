import CustomButton from '../../../components/backend/botton/CustomButton';
import Breadcumb from '../../../components/backend/breadcumbs/Breadcumb';
// import Produc  tTable from '../../../components/backend/table/ProductTable';
import { useNavigate } from 'react-router-dom';

import { Container } from '../../../styles/style';
import { ProductHeaderWrapper, ProductTableWrapper } from './style';
// import ReusableTable from '../../../components/backend/table/ReuseableTable';
import ProductTable from '../../../components/backend/table/ProductTable';

const Products = () => {
  const data = [
    {
      id: 1,
      name: 'Product 1',
      price: 19.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 29.99,
      image: 'https://via.placeholder.com/150',
      category: 'laptop',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 39.99,
      image: 'https://via.placeholder.com/150',
      category: 'laptop',
    },
    {
      id: 4,
      name: 'Product 4',
      price: 49.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 5,
      name: 'Product 5',
      price: 59.99,
      image: 'https://via.placeholder.com/150',
    },
  ];
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate('/dashboard/add-product');
  };

  const handleButtonClick = (buttonType, id) => {
    if (buttonType === 'edit') {
      alert(`Edit button clicked for product ID: ${id}`);
      // Handle edit logic here
    } else if (buttonType === 'delete') {
      alert(`Delete button clicked for product ID: ${id}`);
      // Handle delete logic here
    }
  };

  // const columns = ['id', 'image', 'name', 'category', 'price', 'action'];
  return (
    <>
      <Container>
        <ProductHeaderWrapper>
          <Breadcumb title="products" />
          <CustomButton
            type="submit"
            title="Add Product"
            onClick={handleNavigation}
          />
        </ProductHeaderWrapper>

        <ProductTableWrapper>
          <ProductTable products={data} onButtonClick={handleButtonClick} />
          {/* <ReusableTable
            columns={columns}
            products={data}
            onButtonClick={handleButtonClick}
          /> */}
        </ProductTableWrapper>
      </Container>
    </>
  );
};

export default Products;
