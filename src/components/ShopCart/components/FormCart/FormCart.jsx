import { Field, Formik } from 'formik';
// import axios from 'axios'
import baseUrl from 'utils/baseUrl';
import defaultImg from 'utils/defaultImg';
import { Label, StyledForm } from './FormCart.styled';
// const options = data => ({
//   ...data,
// });
// const ax = axios.post(baseUrl,data)

const FormCart = () => (
  <div>
    <h1>Shop Cart</h1>
    <Formik
      initialValues={{
        name: '',
        price: '',
        description: '',
        defaultImg,
      }}
      onSubmit={data =>
        fetch(baseUrl, {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        })
      }
    >
      <StyledForm>
        <Label>
          First Name
          <Field name="name" placeholder="Name" />
        </Label>
        <Label>
          Last Name
          <Field name="price" placeholder="Price" />
        </Label>
        <Label>
          Description
          <Field name="description" placeholder="Description" />
        </Label>
        <button type="submit">Submit</button>
      </StyledForm>
    </Formik>
  </div>
);

export default FormCart;
