import React from 'react';
import PropTypes from 'prop-types';
import {
  TableWrapper,
  StyledTable,
  TableHeader,
  TableRow,
  TableCell,
  ImageWrapper,
  ActionButtonWrapper,
} from './style';
import CustomButton from '../botton/CustomButton';

const ReusableTable = ({ products, columns, onButtonClick }) => {
  return (
    <TableWrapper>
      <StyledTable>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <TableHeader key={index}>{column}</TableHeader>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((item, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((col, colIndex) => (
                <TableCell key={colIndex}>
                  {console.log(item[col])}
                  {col === 'image' ? (
                    <ImageWrapper>
                      <img src={item.image} alt="" />
                    </ImageWrapper>
                  ) : (
                    item[col]
                  )}
                </TableCell>
              ))}
              <TableCell>
                <ActionButtonWrapper>
                  <CustomButton
                    type="edit"
                    title="Edit"
                    onClick={() => onButtonClick('edit', item.id)}
                  />
                  <CustomButton
                    type="delete"
                    title="Delete"
                    onClick={() => onButtonClick('delete', item.id)}
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

ReusableTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  onButtonClick: PropTypes.func.isRequired,
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ReusableTable;
