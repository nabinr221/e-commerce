import Breadcumb from '../../../../components/backend/breadcumbs/Breadcumb';
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {
  HeaderWrapper,
  ProductContainer,
  ProductFormWrapper,
  FormWrapper,
} from './style';
import CustomButton from '../../../../components/backend/botton/CustomButton';
import CustomInput from '../../../../components/backend/form/input/CustomInput';

const AddProduct = () => {
  //   const AddProductSchema = Yup.object().shape({
  //     name: Yup.string()
  //       .min(2, 'Too Short!')
  //       .max(50, 'Too Long!')
  //       .required('Required'),

  //     description: Yup.string().email('Invalid email').required('Required'),
  //   });
  return (
    <>
      <ProductContainer>
        <HeaderWrapper>
          <Breadcumb title="add Product" />
        </HeaderWrapper>

        <ProductFormWrapper>
          <FormWrapper>
            <Formik
              initialValues={{
                name: '',
                lastName: '',
                email: '',
              }}
              onSubmit={(values) => {
                // same shape as initial values
                console.log(values);
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <CustomInput
                    type="text"
                    name="name"
                    placeholder="Full name"
                  />
                  <CustomButton type="submit" title="Add Product" />
                </Form>
              )}
            </Formik>
          </FormWrapper>
          {/* <Breadcumb title="Product Information" /> */}
        </ProductFormWrapper>
      </ProductContainer>
    </>
  );
};

export default AddProduct;
