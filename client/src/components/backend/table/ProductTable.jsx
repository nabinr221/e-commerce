import React from 'react';
import PropTypes from 'prop-types';
import {
  TableWrapper,
  StyledTable,
  TableHeader,
  TableRow,
  TableCell,
  ActionButtonWrapper,
  ImageWrapper,
} from './style';
import CustomButton from '../botton/CustomButton';
// import CustomButton from '../button/CustomButton';

const ProductTable = ({ products, onButtonClick }) => {
  return (
    <TableWrapper>
      <StyledTable>
        <thead>
          <tr>
            <TableHeader>S.N.</TableHeader>
            <TableHeader>Image</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Category</TableHeader>
            <TableHeader>Price</TableHeader>
            <TableHeader>Actions</TableHeader>
          </tr>
        </thead>
        <tbody>
          {products.map(({ id, image, name, category, price }) => (
            <TableRow key={id}>
              <TableCell>{id}</TableCell>
              <TableCell>
                <ImageWrapper>
                  <img src={image} alt="" />
                </ImageWrapper>
                {/* <img src={image} alt="" /> */}
              </TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>{category}</TableCell>
              <TableCell>{price}</TableCell>
              <TableCell>
                <ActionButtonWrapper>
                  <CustomButton
                    type="edit"
                    title="Edit"
                    onClick={() => onButtonClick('edit', id)}
                  />
                  <CustomButton
                    type="delete"
                    title="Delete"
                    onClick={() => onButtonClick('delete', id)}
                  />
                </ActionButtonWrapper>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
};

ProductTable.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default ProductTable;
